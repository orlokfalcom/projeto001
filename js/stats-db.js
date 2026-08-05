/**
 * Motor do Banco de Dados de Estatísticas — Viva Bem, Menina!
 * Gerencia persistência via IndexedDB + Fallback de Seed JSON.
 */

const StatsDB = (function() {
    const DB_NAME = 'VivaBemMeninaDB';
    const DB_VERSION = 1;
    let dbInstance = null;

    const SEED_DATA = {
        highlights: [
            { id: "stat-1", value: 73, unit: "%", label: "das adolescentes brasileiras relatam cólica intensa que interfere nas atividades", source: "Fonte: IBGE / Fiocruz 2024", category: "saude" },
            { id: "stat-2", value: 58, unit: "%", label: "nunca receberam informações sobre ciclo menstrual na escola", source: "Fonte: Instituto Socioambiental 2023", category: "educacao" },
            { id: "stat-3", value: 40, unit: "%", label: "das meninas passam por bullying relacionado ao corpo durante a adolescência", source: "Fonte: UNICEF Brasil 2023", category: "bem-estar" },
            { id: "stat-4", value: 33, unit: "%", label: "desenvolvem sintomas de ansiedade ligados à imagem corporal (1 em cada 3)", source: "Fonte: OMS 2024", category: "bem-estar" }
        ],
        sources_chart: [
            { id: "src-1", label: "Redes Sociais", percentage: 82, color: "linear-gradient(90deg, #9B5DE5, #F15BB5)" },
            { id: "src-2", label: "Família", percentage: 61, color: "linear-gradient(90deg, #9B5DE5, #CDB4DB)" },
            { id: "src-3", label: "Escola", percentage: 45, color: "linear-gradient(90deg, #B8D4E3, #98D8C8)" },
            { id: "src-4", label: "Profissionais de Saúde", percentage: 34, color: "linear-gradient(90deg, #98D8C8, #2E8B75)" },
            { id: "src-5", label: "Portais Científicos", percentage: 12, color: "linear-gradient(90deg, #F15BB5, #FFB7C5)" },
            { id: "src-6", label: "Livros / Revistas", percentage: 9, color: "linear-gradient(90deg, #CDB4DB, #E8C8F0)" }
        ],
        donut_metrics: [
            { id: "donut-1", title: "Acesso a Informações", percentage: 75, sublabel: "acesso", desc: "das adolescentes têm acesso a alguma fonte de informação — mas apenas 12% são fontes científicas.", strokeColor: "#CDB4DB" },
            { id: "donut-2", title: "Falta de Produtos Íntimos", percentage: 28, sublabel: "ausência", desc: "já faltaram à aula por falta de absorventes ou infraestrutura adequada na escola.", strokeColor: "#FFAFC8" },
            { id: "donut-3", title: "Diálogo Aberto", percentage: 42, sublabel: "diálogo", desc: "sentem-se confortáveis para conversar abertamente sobre menstruação com a família.", strokeColor: "#98D8C8" }
        ]
    };

    /**
     * Inicializa a conexão com o IndexedDB
     */
    function openDB() {
        return new Promise((resolve, reject) => {
            if (dbInstance) {
                resolve(dbInstance);
                return;
            }

            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('highlights')) {
                    db.createObjectStore('highlights', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('sources_chart')) {
                    db.createObjectStore('sources_chart', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('donut_metrics')) {
                    db.createObjectStore('donut_metrics', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('user_submissions')) {
                    db.createObjectStore('user_submissions', { keyPath: 'id', autoIncrement: true });
                }
            };

            request.onsuccess = (event) => {
                dbInstance = event.target.result;
                resolve(dbInstance);
            };

            request.onerror = (event) => {
                console.warn('[StatsDB] Falha ao abrir IndexedDB. Usando modo de fallback em memória.', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Popula o banco com os dados iniciais do JSON se estiver vazio
     */
    async function seedDB() {
        try {
            const db = await openDB();
            const count = await getItemCount(db, 'highlights');
            if (count === 0) {
                console.log('[StatsDB] Populando tabelas com o seed inicial de dados...');
                let initialData = SEED_DATA;
                try {
                    const response = await fetch('data/statistics.json');
                    if (response.ok) {
                        const json = await response.json();
                        initialData = { ...SEED_DATA, ...json };
                    }
                } catch (e) {
                    console.log('[StatsDB] Usando seed interno fallback.');
                }

                await saveDataList(db, 'highlights', initialData.highlights);
                await saveDataList(db, 'sources_chart', initialData.sources_chart);
                await saveDataList(db, 'donut_metrics', initialData.donut_metrics);
            }
        } catch (e) {
            console.error('[StatsDB] Erro no processo de seed:', e);
        }
    }

    function getItemCount(db, storeName) {
        return new Promise((resolve) => {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const countReq = store.count();
            countReq.onsuccess = () => resolve(countReq.result);
            countReq.onerror = () => resolve(0);
        });
    }

    function saveDataList(db, storeName, items) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            items.forEach(item => store.put(item));
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    }

    function getAllFromStore(storeName) {
        return new Promise(async (resolve) => {
            try {
                const db = await openDB();
                const tx = db.transaction(storeName, 'readonly');
                const store = tx.objectStore(storeName);
                const req = store.getAll();
                req.onsuccess = () => resolve(req.result.length ? req.result : SEED_DATA[storeName] || []);
                req.onerror = () => resolve(SEED_DATA[storeName] || []);
            } catch (e) {
                resolve(SEED_DATA[storeName] || []);
            }
        });
    }

    return {
        /**
         * Inicializa o banco de dados
         */
        async init() {
            await seedDB();
            console.log('[StatsDB] Banco de dados de estatísticas ativado e pronto.');
        },

        /**
         * Obtém cartões de destaques numéricos
         */
        async getHighlights(category = 'all') {
            const data = await getAllFromStore('highlights');
            if (category === 'all') return data;
            return data.filter(item => item.category === category);
        },

        /**
         * Obtém dados do gráfico de barras (fontes de informação)
         */
        async getSourcesChart() {
            return await getAllFromStore('sources_chart');
        },

        /**
         * Obtém dados das roscas de métricas (donuts)
         */
        async getDonuts() {
            return await getAllFromStore('donut_metrics');
        },

        /**
         * Adiciona uma nova submissão/pesquisa de usuário no banco
         */
        async addSubmission(submission) {
            try {
                const db = await openDB();
                const tx = db.transaction('user_submissions', 'readwrite');
                const store = tx.objectStore('user_submissions');
                submission.timestamp = new Date().toISOString();
                store.add(submission);
                return true;
            } catch (e) {
                console.error('[StatsDB] Erro ao salvar submissão:', e);
                return false;
            }
        },

        /**
         * Adiciona um novo indicador ao banco de dados
         */
        async addHighlight(stat) {
            try {
                const db = await openDB();
                const tx = db.transaction('highlights', 'readwrite');
                const store = tx.objectStore('highlights');
                if (!stat.id) stat.id = 'stat-' + Date.now();
                store.put(stat);
                return true;
            } catch (e) {
                console.error('[StatsDB] Erro ao salvar destaque:', e);
                return false;
            }
        },

        /**
         * Reseta o banco de dados para os valores padrão
         */
        async resetDB() {
            try {
                const db = await openDB();
                await saveDataList(db, 'highlights', SEED_DATA.highlights);
                await saveDataList(db, 'sources_chart', SEED_DATA.sources_chart);
                await saveDataList(db, 'donut_metrics', SEED_DATA.donut_metrics);
                console.log('[StatsDB] Banco de dados restaurado ao estado original.');
                return true;
            } catch (e) {
                return false;
            }
        }
    };
})();

// Auto-inicializar ao carregar o script
document.addEventListener('DOMContentLoaded', () => {
    StatsDB.init();
});
