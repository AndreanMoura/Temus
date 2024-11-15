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
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos;
  }
  
  // Atualiza o contador a cada 1 segundo
  setInterval(atualizarContador, 1000);
  atualizarContador(); // Chama imediatamente para exibir o contador sem espera
// Seleciona todas as imagens do slide
const slides = document.querySelectorAll(".slide img");

// Função para alterar o fundo conforme a imagem do slide
function changeBackground() {
    // O contador vai acompanhar o índice da imagem atual no slide
    let currentIndex = 0;

    setInterval(() => {
        // Atualiza o fundo do container com a imagem correspondente
        const currentImage = slides[currentIndex].src;
        document.getElementById("background-container").style.backgroundImage = url(${currentImage});

        // Atualiza o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % slides.length; // Voltando para o início quando chegar ao final
    }, 6000); // A cada 6 segundos, muda a imagem de fundo
}

// Inicia a troca de fundo assim que a página for carregada
window.onload = changeBackground;