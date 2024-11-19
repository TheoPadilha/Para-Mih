// script.js

function calculateFullTimeTogether(startDate) {
    const start = new Date(startDate);
    const now = new Date();
  
    // Calcula os anos
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();
  
    // Ajusta dias, meses e anos
    if (seconds < 0) {
      minutes -= 1;
      seconds += 60;
    }
    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }
    if (hours < 0) {
      days -= 1;
      hours += 24;
    }
    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Dias do mês anterior
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    return { years, months, days, hours, minutes, seconds };
  }
  
  function updateTimeCounter() {
    const startDate = "2023-02-22"; // Data de início do relacionamento
    const { years, months, days, hours, minutes, seconds } = calculateFullTimeTogether(startDate);
  
    // Atualiza o HTML
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  // Atualiza o contador continuamente
  setInterval(updateTimeCounter, 1000);
  
  let currentIndex = 0;
const images = document.querySelectorAll('.fotos');
const totalImages = images.length;

// Função para mostrar a imagem com o índice correto
function showImage(index) {
  // Move as imagens com a animação suave
  const offset = -index * 100; // Deslocamento em porcentagem
  images.forEach((img) => {
    img.style.transform = `translateX(${offset}%)`;
  });
}

// Função para ir para a próxima imagem
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

// Função para ir para a imagem anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Botões de navegação
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

// Inicializa o carrossel
showImage(currentIndex);
