// Espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const productGrid = document.getElementById('product-grid');
    const loadingMessage = document.getElementById('loading-message');

    async function carregarProdutos() {
        try {
            const response = await fetch('data/produtos.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const produtos = await response.json();

            loadingMessage.style.display = 'none';

            produtos.forEach(produto => {
                const card = document.createElement('div');
                card.className = 'bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col group';
                card.setAttribute('data-aos', 'fade-up');

                // ===== PONTO DE CORREÇÃO =====
                // Ajuste os nomes das propriedades para corresponderem ao seu JSON.
                // Por exemplo, se o nome do produto for 'title', use produto.title.
                
                const nomeProduto = produto.nome || produto.title || 'Nome Indisponível';
                // CORREÇÃO APLICADA AQUI: Usando 'primaryImage'
                const urlImagem = produto.primaryImage || produto.imagemURL || produto.imageUrl || produto.image;
                const nomeAutor = produto.autor || produto.author || 'Autor Desconhecido';
                const urlOriginalProduto = produto.urlOriginal || produto.url;

                card.innerHTML = `
                    <div class="w-full h-64 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <img src="${urlImagem}" alt="${nomeProduto}" class="max-w-full max-h-full object-contain p-4">
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white">${nomeProduto}</h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            Design original por: 
                            <a href="${urlOriginalProduto}" target="_blank" class="text-indigo-500 dark:text-cyan-400 hover:underline">${nomeAutor}</a>
                        </p>
                        <div class="flex justify-between items-center mt-auto pt-4">
                            <span class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                                Sob Consulta
                            </span>
                            <a href="orcamento.html" class="text-white font-bold py-2 px-4 rounded-lg transition transform group-hover:scale-105 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 shadow-lg">
                                Orçamento
                            </a>
                        </div>
                    </div>
                `;

                productGrid.appendChild(card);
            });

        } catch (error) {
            console.error("Não foi possível carregar os produtos:", error);
            loadingMessage.textContent = 'Erro ao carregar os produtos. Verifique o ficheiro JSON.';
        }
    }

    carregarProdutos();
});
