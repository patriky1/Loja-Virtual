// Formulário de Contato
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formResponse.style.display = 'block';
        formResponse.style.color = 'green';
        formResponse.textContent = 'Mensagem enviada com sucesso!';
        form.reset();
    } else {
        formResponse.style.display = 'block';
        formResponse.style.color = 'red';
        formResponse.textContent = 'Por favor, preencha todos os campos.';
    }
});

// Perguntas Frequentes (FAQ)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
    });
});
