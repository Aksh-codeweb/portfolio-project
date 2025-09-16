// Skill data - expanded with more items for each category
        const skillsData = [
            // Tech & Coding
            { id: 1, category: 'tech', title: 'Web Development', icon: 'fas fa-code', users: 245, rating: 4.8, description: 'Learn HTML, CSS, JavaScript and modern frameworks from experienced developers.' },
            { id: 2, category: 'tech', title: 'Python Programming', icon: 'fas fa-laptop-code', users: 198, rating: 4.7, description: 'Master Python from basics to advanced applications and data science.' },
            { id: 3, category: 'tech', title: 'Mobile App Development', icon: 'fas fa-mobile-alt', users: 176, rating: 4.6, description: 'Build iOS and Android apps with expert guidance from experienced developers.' },
            
            // Languages
            { id: 4, category: 'language', title: 'Spanish Language', icon: 'fas fa-language', users: 312, rating: 4.7, description: 'Practice conversational Spanish with native speakers and language experts.' },
            { id: 5, category: 'language', title: 'French Conversation', icon: 'fas fa-comments', users: 228, rating: 4.8, description: 'Improve your French speaking skills with native speakers and tutors.' },
            { id: 6, category: 'language', title: 'Japanese Basics', icon: 'fas fa-globe-asia', users: 154, rating: 4.9, description: 'Learn Japanese writing and speaking from beginners to advanced level.' },
            
            // Music
            { id: 7, category: 'music', title: 'Guitar Lessons', icon: 'fas fa-guitar', users: 189, rating: 4.9, description: 'From beginners to advanced players, swap guitar skills with music enthusiasts.' },
            { id: 8, category: 'music', title: 'Piano Training', icon: 'fas fa-music', users: 167, rating: 4.8, description: 'Learn piano techniques and music theory from skilled musicians.' },
            { id: 9, category: 'music', title: 'Vocal Coaching', icon: 'fas fa-microphone', users: 142, rating: 4.7, description: 'Improve your singing voice with professional vocal techniques and exercises.' },
            
            // Cooking
            { id: 10, category: 'cooking', title: 'Italian Cuisine', icon: 'fas fa-utensils', users: 276, rating: 4.9, description: 'Master the art of Italian cooking from pasta to authentic regional dishes.' },
            { id: 11, category: 'cooking', title: 'Baking Techniques', icon: 'fas fa-birthday-cake', users: 201, rating: 4.8, description: 'Learn professional baking skills from cakes to artisan breads.' },
            { id: 12, category: 'cooking', title: 'Vegan Cooking', icon: 'fas fa-leaf', users: 165, rating: 4.7, description: 'Discover delicious plant-based recipes and cooking techniques.' },
            
            // Fitness
            { id: 13, category: 'fitness', title: 'Yoga Practice', icon: 'fas fa-spa', users: 224, rating: 4.8, description: 'Learn yoga poses, breathing techniques and meditation practices.' },
            { id: 14, category: 'fitness', title: 'Strength Training', icon: 'fas fa-dumbbell', users: 198, rating: 4.7, description: 'Build muscle and improve strength with proper training techniques.' },
            { id: 15, category: 'fitness', title: 'Martial Arts', icon: 'fas fa-fist-raised', users: 132, rating: 4.9, description: 'Learn self-defense and martial arts techniques from experienced practitioners.' },
            
            // Arts & Crafts
            { id: 16, category: 'art', title: 'Digital Art', icon: 'fas fa-paint-brush', users: 198, rating: 4.6, description: 'Learn digital painting, illustration, and graphic design from talented artists.' },
            { id: 17, category: 'art', title: 'Pottery Making', icon: 'fas fa-hand-sparkles', users: 121, rating: 4.8, description: 'Create beautiful pottery pieces with guidance from skilled artisans.' },
            { id: 18, category: 'art', title: 'Photography', icon: 'fas fa-camera', users: 187, rating: 4.7, description: 'Master photography techniques from composition to post-processing.' },
            
            // Academic
            { id: 19, category: 'academic', title: 'Mathematics Tutoring', icon: 'fas fa-square-root-alt', users: 156, rating: 4.7, description: 'Get help with math concepts from algebra to calculus from skilled tutors.' },
            { id: 20, category: 'academic', title: 'Science Education', icon: 'fas fa-flask', users: 143, rating: 4.6, description: 'Understand complex scientific concepts with guided learning sessions.' },
            
            // Business
            { id: 21, category: 'business', title: 'Digital Marketing', icon: 'fas fa-chart-line', users: 178, rating: 4.8, description: 'Learn SEO, social media marketing, and online advertising strategies.' },
            { id: 22, category: 'business', title: 'Entrepreneurship', icon: 'fas fa-lightbulb', users: 165, rating: 4.7, description: 'Get guidance on starting and growing your business from experienced entrepreneurs.' },
            
            // DIY & Home
            { id: 23, category: 'diy', title: 'Home Repair', icon: 'fas fa-tools', users: 192, rating: 4.7, description: 'Learn essential home repair and maintenance skills from experienced DIYers.' },
            { id: 24, category: 'diy', title: 'Gardening', icon: 'fas fa-seedling', users: 154, rating: 4.9, description: 'Discover gardening techniques for growing vegetables, flowers, and herbs.' }
        ];

        // Mobile Menu Functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeMenuBtn = document.querySelector('#closeMenu');
        const mobileNav = document.querySelector('#mobileNav');

        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            document.body.style.overflow = 'auto';
        });

        // Modal Functionality
        const loginBtn = document.querySelector('#loginBtn');
        const signupBtn = document.querySelector('#signupBtn');
        const heroSignupBtn = document.querySelector('#heroSignupBtn');
        const ctaSignupBtn = document.querySelector('#ctaSignupBtn');
        const browseSkillsBtn = document.querySelector('#browseSkillsBtn');
        const mobileLoginBtn = document.querySelector('#mobileLoginBtn');
        const mobileSignupBtn = document.querySelector('#mobileSignupBtn');
        
        const loginModal = document.querySelector('#loginModal');
        const signupModal = document.querySelector('#signupModal');
        const closeLoginModal = document.querySelector('#closeLoginModal');
        const closeSignupModal = document.querySelector('#closeSignupModal');

        // Open modals
        loginBtn.addEventListener('click', () => loginModal.classList.add('open'));
        mobileLoginBtn.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            loginModal.classList.add('open');
        });
        
        signupBtn.addEventListener('click', () => signupModal.classList.add('open'));
        heroSignupBtn.addEventListener('click', () => signupModal.classList.add('open'));
        ctaSignupBtn.addEventListener('click', () => signupModal.classList.add('open'));
        mobileSignupBtn.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            signupModal.classList.add('open');
        });
        
        browseSkillsBtn.addEventListener('click', () => {
            document.querySelector('#browse-skills').scrollIntoView({ behavior: 'smooth' });
        });

        // Close modals
        closeLoginModal.addEventListener('click', () => loginModal.classList.remove('open'));
        closeSignupModal.addEventListener('click', () => signupModal.classList.remove('open'));

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) loginModal.classList.remove('open');
            if (e.target === signupModal) signupModal.classList.remove('open');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileNav.classList.remove('open');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.slide-up, .fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
            
            // Initialize skills
            renderSkills('all');
            
            // Category buttons
            const categoryBtns = document.querySelectorAll('.category-btn');
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const category = btn.getAttribute('data-category');
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderSkills(category);
                });
            });

            // Slider navigation
            const slider = document.getElementById('skillsSlider');
            const prevBtn = document.getElementById('sliderPrev');
            const nextBtn = document.getElementById('sliderNext');
            
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
        });

        // Form submission
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Form submitted! In a real application, this would send your data to our servers.');
            });
        });

        // Render skills based on category
        function renderSkills(category) {
            const skillsSlider = document.getElementById('skillsSlider');
            skillsSlider.innerHTML = '';
            
            const filteredSkills = category === 'all' 
                ? skillsData 
                : skillsData.filter(skill => skill.category === category);
            
            filteredSkills.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card slide-up';
                skillCard.innerHTML = `
                    <div class="skill-img ${skill.category}-bg">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="skill-content">
                        <h3 class="skill-title">${skill.title}</h3>
                        <p>${skill.description}</p>
                        <div class="skill-stats">
                            <span><i class="fas fa-users"></i> ${skill.users} learners</span>
                            <span><i class="fas fa-star"></i> ${skill.rating}/5</span>
                        </div>
                    </div>
                `;
                skillsSlider.appendChild(skillCard);
            });
        }