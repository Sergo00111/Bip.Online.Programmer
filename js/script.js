// Анимация появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    
    // Добавляем класс hidden ко всем секциям кроме первой
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== 'home') {
            sections[i].classList.add('hidden');
        }
    }
    
    // Наблюдаем за появлением элементов в viewport
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    // Наблюдаем за всеми скрытыми элементами
    var hiddenElements = document.querySelectorAll('.hidden');
    for (var i = 0; i < hiddenElements.length; i++) {
        observer.observe(hiddenElements[i]);
    }
    
    // Анимация для кнопок
    var buttons = document.querySelectorAll('.cyber-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        buttons[i].addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Плавная прокрутка для навигации
    var navLinks = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', function() {
            // Анимация бургера
            this.classList.toggle('active');
            
            // Показ/скрытие меню
            if (mobileMenu.style.display === 'flex') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'flex';
            }
        });
        
        // Закрытие меню при клике на ссылку
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                burgerMenu.classList.remove('active');
            });
        });
    }
});

// Предотвращаем двойной скролл
document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки скролла
    function checkBodyScroll() {
        const body = document.body;
        const html = document.documentElement;
        
        // Если есть горизонтальный скролл - фиксим
        if (body.scrollWidth > window.innerWidth) {
            body.style.overflowX = 'hidden';
        }
    }
    
    // Проверяем при загрузке и изменении размера
    checkBodyScroll();
    window.addEventListener('resize', checkBodyScroll);
    
    // Для мобильных меню
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('touchmove', function(e) {
            // Разрешаем скролл только внутри меню
            e.stopPropagation();
        }, { passive: true });
    }
});

// Создание эффектных фонов
function createBackgroundEffects() {
    createHomeEffects();
    createAboutEffects();
    createSkillsEffects();
    createEducationEffects();
    createCareerEffects();
    createGalleryEffects();
    createFooterEffects();
}

// Главный экран - взрыв частиц
function createHomeEffects() {
    const bg = document.querySelector('#home .section-bg');
    if (!bg) return;
    
    // Частицы
    for (let i = 0; i < 50; i++) {
        createParticle(bg, '#4deeea', 2, 5);
    }
    
    // Искры
    for (let i = 0; i < 20; i++) {
        createSpark(bg, '#74ee15');
    }
    
    // Молнии
    for (let i = 0; i < 5; i++) {
        createLightning(bg, '#2b9cff');
    }
}

// О профессии - электрические волны
function createAboutEffects() {
    const bg = document.querySelector('#about .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 30; i++) {
        createParticle(bg, '#2b9cff', 1, 4);
    }
    
    for (let i = 0; i < 8; i++) {
        createEnergyWave(bg, '#4deeea');
    }
}

// Навыки - сетка с искрами
function createSkillsEffects() {
    const bg = document.querySelector('#skills .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 40; i++) {
        createParticle(bg, '#74ee15', 1, 3);
    }
    
    for (let i = 0; i < 15; i++) {
        createSpark(bg, '#ff00ff');
    }
}

// Обучение - энергетические импульсы
function createEducationEffects() {
    const bg = document.querySelector('#education .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 6; i++) {
        createEnergyWave(bg, '#ff0066');
    }
    
    for (let i = 0; i < 12; i++) {
        createSpark(bg, '#4deeea');
    }
}

// Карьера - молнии и искры
function createCareerEffects() {
    const bg = document.querySelector('#career .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 7; i++) {
        createLightning(bg, '#ff00ff');
    }
    
    for (let i = 0; i < 35; i++) {
        createParticle(bg, '#ff0066', 2, 6);
    }
}

// Галерея - энергетическое поле
function createGalleryEffects() {
    const bg = document.querySelector('#gallery .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 10; i++) {
        createEnergyWave(bg, '#74ee15');
    }
    
    for (let i = 0; i < 18; i++) {
        createSpark(bg, '#2b9cff');
    }
}

// Футер - финальный салют
function createFooterEffects() {
    const bg = document.querySelector('footer .section-bg');
    if (!bg) return;
    
    for (let i = 0; i < 25; i++) {
        createFirework(bg, '#ff00ff');
    }
}

// Создание частицы
function createParticle(container, color, minSize = 1, maxSize = 3) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * (maxSize - minSize) + minSize;
    const posX = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 10 + 15;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        color: ${color};
    `;
    
    container.appendChild(particle);
}

// Создание искры
function createSpark(container, color) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    
    const width = Math.random() * 30 + 10;
    const height = Math.random() * 2 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    const rotation = Math.random() * 360;
    
    spark.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        transform: rotate(${rotation}deg);
        color: ${color};
    `;
    
    container.appendChild(spark);
}

// Создание молнии
function createLightning(container, color) {
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    
    const width = Math.random() * 200 + 100;
    const height = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 8;
    const rotation = Math.random() * 360;
    
    lightning.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        transform: rotate(${rotation}deg);
        color: ${color};
    `;
    
    container.appendChild(lightning);
}

// Создание энергетической волны
function createEnergyWave(container, color) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    
    const size = Math.random() * 100 + 50;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = Math.random() * 4 + 4;
    
    wave.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        color: ${color};
    `;
    
    container.appendChild(wave);
}

// Создание фейерверка
function createFirework(container, color) {
    const firework = document.createElement('div');
    firework.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 4;
    const tx = (Math.random() - 0.5) * 100;
    
    firework.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        animation: firework 4s infinite;
        animation-delay: ${delay}s;
        color: ${color};
        --tx: ${tx}px;
    `;
    
    container.appendChild(firework);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Создаем эффекты
    createBackgroundEffects();
    
    // Плавное появление
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Наблюдатель для появления эффектов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bg = entry.target.querySelector('.section-bg');
                if (bg) {
                    bg.style.opacity = '1';
                }
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Обновление при ресайзе
window.addEventListener('resize', function() {
    // Пересоздаем эффекты для адаптивности
    document.querySelectorAll('.section-bg').forEach(bg => {
        bg.innerHTML = '';
    });
    createBackgroundEffects();
});

// Управление подсказкой "Листайте"
function initScrollHint() {
    const scrollHint = document.querySelector('.mobile-scroll-hint');
    if (!scrollHint) return;
    
    let hintHidden = false;
    
    // Скрываем подсказку после первого скролла
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && !hintHidden) {
            scrollHint.style.opacity = '0';
            scrollHint.style.transition = 'opacity 0.5s ease';
            hintHidden = true;
            
            setTimeout(() => {
                scrollHint.style.display = 'none';
            }, 500);
        }
    });
    
    // Скрываем подсказку при клике
    scrollHint.addEventListener('click', function() {
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.3s ease';
        hintHidden = true;
        
        setTimeout(() => {
            this.style.display = 'none';
        }, 300);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // ... остальной код ...
    
    initScrollHint();
});