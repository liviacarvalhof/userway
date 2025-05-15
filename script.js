document.addEventListener('DOMContentLoaded', () => {
    const botoesComprar = document.querySelectorAll('.card button');
    const menuAcessibilidade = document.querySelector('.accessibility-menu');
    const body = document.body;
    const cards = document.querySelectorAll('.card');
  
   
    botoesComprar.forEach(botao => {
      botao.addEventListener('click', function() {
        const nomeJogo = this.parentNode.querySelector('h2').textContent;
        alert(`"${nomeJogo}" foi adicionado ao carrinho! (Funcionalidade não implementada completamente)`);
      
      });
    });
  
   
    if (menuAcessibilidade) {
      const contrasteOpcao = Array.from(menuAcessibilidade.children).find(p => p.textContent.includes('Contraste'));
      const textoMaiorOpcao = Array.from(menuAcessibilidade.children).find(p => p.textContent.includes('Texto maior'));
      const espacamentoOpcao = Array.from(menuAcessibilidade.children).find(p => p.textContent.includes('Espaçamento'));
      const ocultarImagensOpcao = Array.from(menuAcessibilidade.children).find(p => p.textContent.includes('Ocultar imagens'));
  
      if (contrasteOpcao) {
        contrasteOpcao.style.cursor = 'pointer';
        contrasteOpcao.addEventListener('click', () => {
          body.classList.toggle('alto-contraste');
        });
      }
  
      if (textoMaiorOpcao) {
        textoMaiorOpcao.style.cursor = 'pointer';
        textoMaiorOpcao.addEventListener('click', () => {
          body.classList.toggle('texto-maior');
        });
      }
  
      if (espacamentoOpcao) {
        espacamentoOpcao.style.cursor = 'pointer';
        espacamentoOpcao.addEventListener('click', () => {
          body.classList.toggle('espacamento-texto');
        });
      }
  
      if (ocultarImagensOpcao) {
        ocultarImagensOpcao.style.cursor = 'pointer';
        ocultarImagensOpcao.addEventListener('click', () => {
          cards.forEach(card => {
            const img = card.querySelector('img');
            if (img) {
              img.classList.toggle('ocultar-imagem');
            }
          });
        });
      }
    }
  });