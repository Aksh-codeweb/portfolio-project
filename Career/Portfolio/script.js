// Animate journey items on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const journeyItems = document.querySelectorAll('.journey-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        }, index * 300);
                    }
                });
            }, { threshold: 0.3 });
            
            journeyItems.forEach(item => {
                item.style.opacity = 0;
                item.style.transform = 'translateY(50px)';
                observer.observe(item);
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Project Carousel Functionality
            const carouselContainer = document.querySelector('.carousel-container');
            const slides = document.querySelectorAll('.project-slide');
            const dots = document.querySelectorAll('.dot');
            const prevBtn = document.querySelector('.carousel-nav.prev');
            const nextBtn = document.querySelector('.carousel-nav.next');
            let currentIndex = 0;
            
            function updateCarousel() {
                // Update slides
                slides.forEach((slide, index) => {
                    if (index === currentIndex) {
                        slide.classList.add('active');
                    } else {
                        slide.classList.remove('active');
                    }
                });
                
                // Update dots
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Move carousel
                carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            
            // Navigation buttons
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel();
            });
            
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            });
            
            // Dot navigation
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.getAttribute('data-index'));
                    updateCarousel();
                });
            });
            
            // Auto-advance carousel
            let carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            }, 3000);
            
            // Pause auto-advance on hover
            const carousel = document.querySelector('.projects-carousel');
            carousel.addEventListener('mouseenter', () => {
                clearInterval(carouselInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                carouselInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }, 3000);
            });
        });