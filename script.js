// Animasi mengetik
const typingTexts = [
  'UI/UX bukan hanya tentang tampilan, tapi juga pengalaman.',
  'Desain yang baik adalah desain yang sederhana dan mudah digunakan.',
  'Jadilah kreatif, jadilah inovatif, jadilah UI/UX designer!'
];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
  const currentText = typingTexts[typingIndex];
  if (!typingElement) return;
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex);
    if (charIndex > 0) {
      charIndex--;
      setTimeout(type, 30);
    } else {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      setTimeout(type, 600);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex);
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 70);
    } else {
      isDeleting = true;
      setTimeout(type, 1200);
    }
  }
}
if (typingElement) type();

// Smooth scroll untuk navbar
const navHome = document.getElementById('nav-home');
const navModule = document.getElementById('nav-module');
navHome.addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});
navModule.addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('studies').scrollIntoView({ behavior: 'smooth' });
});

// Parallax effect pada hero section
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const layer1 = document.querySelector('.layer1');
  const layer2 = document.querySelector('.layer2');
  const layer3 = document.querySelector('.layer3');
  if (layer1) layer1.style.transform = `translateX(-50%) translateY(${scrollY * 0.2}px)`;
  if (layer2) layer2.style.transform = `translateX(-50%) translateY(${-scrollY * 0.15}px)`;
  if (layer3) layer3.style.transform = `translateX(-50%) scale(${1 + scrollY * 0.0007})`;
});
