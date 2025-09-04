// SL Skin Therapy — JS
function toggleMenu(){
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

function fakeSubmit(){
  alert('Merci ! Votre message a été noté. Pour une réponse rapide, utilisez WhatsApp.');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});
