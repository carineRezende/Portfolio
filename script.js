const btnMenu = document.getElementById('btnMenu');
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("show");
  });
});



const form = document.getElementById('contact-form');
const msgStatus = document.getElementById('msg-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
      msgStatus.textContent = 'Enviando...';
      msgStatus.style.color = '#0077b6';

    emailjs.init({
        publicKey: 'DlwwRFM237-p3Psed',
    });

    emailjs.sendForm("service_ei6kngi", "template_9ikwl9d", form)
        .then((response) => {
            msgStatus.textContent = 'Mensagem enviada com sucesso!';
            msgStatus.style.color = 'green';
            form.reset();
    })
        .catch((error) => {
            msgStatus.textContent = "Ocorreu um erro ao enviar a mensagem.";
            msgStatus.style.color = 'red';
    });
});