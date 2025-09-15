// Ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile (abre/fecha o drawer)
function toggleMobile(force) {
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('backdrop');
  const isOpen = drawer.getAttribute('aria-hidden') === 'false';
  const open = typeof force === 'boolean' ? force : !isOpen;
  drawer.setAttribute('aria-hidden', !open);
  backdrop.style.display = open ? 'block' : 'none';
  drawer.style.transform = open ? 'translateX(0)' : 'translateX(-100%)';
}

// Carousel Netflix-style
function moveCarousel(dir){
  const carousel = document.getElementById('carousel');
  const scrollAmount = 300;
  carousel.scrollBy({left: dir * scrollAmount, behavior: 'smooth'});
}

// Enviar email via mailto
function sendEmail(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const subject = encodeURIComponent("Novo contato do site");
  const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

  window.location.href = `mailto:jc18618@gmail.com?subject=${subject}&body=${body}`;
}

// FAQ (abre/fecha resposta)
function toggleFAQ(btn) {
  const content = btn.nextElementSibling;
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
}
const images = [
  "img\\img2.jpg",
  "img\\img3.jpg",
  "img\\img4.jpg",
];
let current = 0;

function showImage(idx) {
  const img = document.getElementById('carousel-img');
  img.src = images[idx];
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function showNext() {
  current = (current + 1) % images.length;
  showImage(current);
}

// Inicializa com a primeira imagem
showImage(current);
