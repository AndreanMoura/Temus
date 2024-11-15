// Função para atualizar o contador com meses, dias, horas, minutos e segundos
function atualizarContador() {
    const dataInicial = new Date('2024-08-10T00:00:00'); // Data de referência (10 de agosto de 2024)
    const agora = new Date(); // Data atual
  
    // Calcular a diferença em milissegundos
    const diff = agora - dataInicial;
  
    // Calcular a diferença em meses, dias, horas, minutos e segundos
    let meses = agora.getMonth() - dataInicial.getMonth();
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    meses += anos * 12; // Converter os anos para meses
  
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  
    // Atualizar os elementos no HTML
    const elementos = {
        meses: document.getElementById('meses'),
        dias: document.getElementById('dias'),
        horas: document.getElementById('horas'),
        minutos: document.getElementById('minutos'),
        segundos: document.getElementById('segundos')
    };
    
    if (elementos.meses && elementos.dias && elementos.horas && elementos.minutos && elementos.segundos) {
        elementos.meses.textContent = meses;
        elementos.dias.textContent = dias;
        elementos.horas.textContent = horas < 10 ? '0' + horas : horas;
        elementos.minutos.textContent = minutos < 10 ? '0' + minutos : minutos;
        elementos.segundos.textContent = segundos < 10 ? '0' + segundos : segundos;
    }
}
  
// Atualiza o contador a cada 1 segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chama imediatamente para exibir o contador sem espera

// Função para alterar o fundo conforme a imagem do slide
function changeBackground() {
    // Seleciona todas as imagens do slide
    const slides = document.querySelectorAll(".slide img");
    const container = document.getElementById("background-container");
    
    if (slides.length === 0 || !container) {
        console.warn("Slides ou container de fundo não encontrados.");
        return;
    }

    let currentIndex = 0; // Índice da imagem atual

    setInterval(() => {
        // Atualiza o fundo do container com a imagem correspondente
        const currentImage = slides[currentIndex].src;
        container.style.backgroundImage = `url(${currentImage})`;

        // Atualiza o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % slides.length; // Volta para o início ao atingir o final
    }, 6000); // A cada 6 segundos, muda a imagem de fundo
}

// Inicia a troca de fundo assim que a página for carregada
window.onload = () => {
    changeBackground();
};
