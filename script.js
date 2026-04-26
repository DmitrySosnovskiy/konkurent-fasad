// Обработка клика по кнопке CTA
document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Спасибо за интерес к нашему продукту! Мы свяжемся с вами в ближайшее время.');
});

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Данные формы:', { name, email, message });
    
    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим вам на ${email} в ближайшее время.`);
    
    // Очистка формы
    document.getElementById('contactForm').reset();
});

// Плавная прокрутка для навигации (если добавите меню)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
