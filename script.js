function goToPage(page) {
    window.location.href = page;
}

function openArticle(articleId) {
    alert('Открывается статья ' + articleId + '. Полная версия скоро будет доступна!');
}

function filterArticles(category) {
    const rubrics = document.querySelectorAll('.rubric-item');
    rubrics.forEach(rubric => {
        rubric.classList.remove('active');
        if (rubric.innerText.toLowerCase() === category || 
            (category === 'all' && rubric.innerText === 'Всё')) {
            rubric.classList.add('active');
        }
    });
    
    const trendingCards = document.querySelectorAll('#trending-cards .card');
    trendingCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
    
    const materialCards = document.querySelectorAll('#materials-grid .material-card');
    materialCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function likeArticle(button) {
    const likeSpan = button.querySelector('.like-count');
    let currentLikes = parseInt(likeSpan.innerText);
    currentLikes++;
    likeSpan.innerText = currentLikes;
    
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    if (currentLikes === 1) {
        const message = document.createElement('div');
        message.innerText = '❤️ Спасибо за лайк!';
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.background = '#BF321C';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '30px';
        message.style.fontFamily = 'Montserrat, sans-serif';
        message.style.zIndex = '1000';
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 2000);
    }
}

function showSubscribe() {
    const email = prompt('Введите ваш email для подписки на рассылку:');
    if (email && email.includes('@') && email.includes('.')) {
        localStorage.setItem('subscriberEmail', email);
        alert('Спасибо за подписку! На ' + email + ' будут приходить наши лучшие материалы.');
    } else if (email) {
        alert('Пожалуйста, введите корректный email адрес.');
    }
}

function subscribeEmail() {
    const emailInput = document.getElementById('subs-email');
    const messageSpan = document.getElementById('subs-message');
    if (!emailInput) return;
    const email = emailInput.value;
    
    if (email && email.includes('@') && email.includes('.')) {
        localStorage.setItem('subscriberEmail', email);
        messageSpan.style.color = '#4CAF50';
        messageSpan.innerText = '✅ Вы успешно подписались!';
        emailInput.value = '';
        setTimeout(() => {
            messageSpan.innerText = '';
        }, 3000);
    } else {
        messageSpan.style.color = '#BF321C';
        messageSpan.innerText = '❌ Пожалуйста, введите корректный email';
        setTimeout(() => {
            messageSpan.innerText = '';
        }, 3000);
    }
}

function sendContact() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    const resultSpan = document.getElementById('contact-message-result');
    
    if (!name || !email || !message || !resultSpan) return;
    
    if (name.value && email.value && message.value) {
        if (email.value.includes('@') && email.value.includes('.')) {
            resultSpan.style.color = '#4CAF50';
            resultSpan.innerText = '✅ Спасибо! Мы свяжемся с вами в ближайшее время.';
            name.value = '';
            email.value = '';
            message.value = '';
            setTimeout(() => {
                resultSpan.innerText = '';
            }, 4000);
        } else {
            resultSpan.style.color = '#BF321C';
            resultSpan.innerText = '❌ Введите корректный email';
        }
    } else {
        resultSpan.style.color = '#BF321C';
        resultSpan.innerText = '❌ Заполните все поля';
    }
}

window.onload = function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
};
