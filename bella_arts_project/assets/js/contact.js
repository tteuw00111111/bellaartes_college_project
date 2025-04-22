document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const openBtn = document.getElementById('openContactForm');
    const closeBtn = document.querySelector('.close-button');
    const contactForm = document.getElementById('contact-form');
    
    if (openBtn) {
        openBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            clearErrors();
            
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Por favor, informe seu nome');
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
                showError(emailInput, 'Por favor, informe um email válido');
                isValid = false;
            }
            
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Por favor, escreva sua mensagem');
                isValid = false;
            }
            
            if (isValid) {
                //manda nada
                alert('Mensagem enviada com sucesso!');
                contactForm.reset();
                modal.style.display = 'none';
            }
        });
    }
    
    function showError(input, message) {
        input.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        input.parentElement.appendChild(errorElement);
    }
    
    function clearErrors() {
        document.querySelectorAll('.error').forEach(element => {
            element.classList.remove('error');
        });
        
        document.querySelectorAll('.error-message').forEach(element => {
            element.remove();
        });
    }
});