 // Sample ride data with Indian pricing
        const ridesData = [
            {
                id: 1,
                from: "Connaught Place",
                to: "Indira Gandhi Airport",
                departure: "2023-06-15T08:30:00",
                driver: { name: "Raj Sharma", avatar: "RS" },
                vehicle: { type: "electric", model: "Tata Nexon EV" },
                cost: 300,
                seats: { available: 3, total: 4 },
                distance: "18 km",
                ecoBadge: "electric car"
            },
            {
                id: 2,
                from: "Delhi University",
                to: "New Delhi Railway Station",
                departure: "2023-06-15T09:15:00",
                driver: { name: "Priya Singh", avatar: "PS" },
                vehicle: { type: "bike", model: "E-Bike Group" },
                cost: 150,
                seats: { available: 2, total: 2 },
                distance: "8 km",
                ecoBadge: "bike-friendly"
            },
            {
                id: 3,
                from: "Lodhi Garden",
                to: "Gurugram Cyber City",
                departure: "2023-06-15T17:45:00",
                driver: { name: "Vikram Mehta", avatar: "VM" },
                vehicle: { type: "shared", model: "Maruti Suzuki Ertiga" },
                cost: 250,
                seats: { available: 1, total: 4 },
                distance: "22 km",
                ecoBadge: "shared cab"
            },
            {
                id: 4,
                from: "Select Citywalk Mall",
                to: "India Habitat Centre",
                departure: "2023-06-16T10:00:00",
                driver: { name: "Ananya Patel", avatar: "AP" },
                vehicle: { type: "hybrid", model: "Toyota Camry Hybrid" },
                cost: 280,
                seats: { available: 2, total: 4 },
                distance: "12 km",
                ecoBadge: "hybrid vehicle"
            },
            {
                id: 5,
                from: "Khan Market",
                to: "Akshardham Temple",
                departure: "2023-06-16T14:20:00",
                driver: { name: "Arjun Kumar", avatar: "AK" },
                vehicle: { type: "electric", model: "MG ZS EV" },
                cost: 200,
                seats: { available: 3, total: 4 },
                distance: "10 km",
                ecoBadge: "electric car"
            },
            {
                id: 6,
                from: "Hauz Khas Village",
                to: "Noida Sector 18",
                departure: "2023-06-17T07:30:00",
                driver: { name: "Neha Gupta", avatar: "NG" },
                vehicle: { type: "shared", model: "Honda City Hybrid" },
                cost: 350,
                seats: { available: 2, total: 4 },
                distance: "25 km",
                ecoBadge: "shared cab"
            }
        ];

        // Initialize user data in localStorage if not exists
        function initUserData() {
            if (!localStorage.getItem('ecorideUser')) {
                const userData = {
                    favorites: [],
                    upcomingRides: [],
                    pastRides: [],
                    ecoImpact: {
                        co2Saved: 38.4,
                        moneySaved: 8640
                    }
                };
                localStorage.setItem('ecorideUser', JSON.stringify(userData));
            }
            return JSON.parse(localStorage.getItem('ecorideUser'));
        }

        // Update user data in localStorage
        function updateUserData(userData) {
            localStorage.setItem('ecorideUser', JSON.stringify(userData));
        }

        // Format date and time for display
        function formatDateTime(dateTimeStr) {
            const date = new Date(dateTimeStr);
            return {
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                fullDate: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
            };
        }

        // Get eco badge class based on type
        function getEcoBadgeClass(type) {
            switch(type) {
                case 'electric': return 'badge-electric';
                case 'bike': return 'badge-bike';
                case 'shared': return 'badge-shared';
                case 'hybrid': return 'badge-hybrid';
                default: return 'badge-electric';
            }
        }

        // Generate ride card HTML
        function generateRideCard(ride) {
            const datetime = formatDateTime(ride.departure);
            const badgeClass = getEcoBadgeClass(ride.vehicle.type);
            
            return `
                <div class="ride-card card" data-id="${ride.id}">
                    <div class="ride-card-header">
                        <div class="ride-route">
                            <div class="ride-locations">${ride.from} → ${ride.to}</div>
                            <div class="ride-distance">${ride.distance}</div>
                        </div>
                        <div class="ride-time">${datetime.time} <span>${datetime.date}</span></div>
                    </div>
                    <div class="ride-card-body">
                        <div class="ride-details">
                            <div class="ride-detail">
                                <i class="fas fa-user-friends"></i>
                                <span>${ride.seats.available}/${ride.seats.total} seats</span>
                            </div>
                            <div class="ride-detail">
                                <i class="fas fa-car"></i>
                                <span>${ride.vehicle.model}</span>
                            </div>
                        </div>
                        <div class="ride-driver">
                            <div class="driver-avatar">${ride.driver.avatar}</div>
                            <div>${ride.driver.name}</div>
                        </div>
                    </div>
                    <div class="ride-card-footer">
                        <div class="cost">₹${ride.cost} <span>per passenger</span></div>
                        <div class="eco-badge ${badgeClass}">${ride.ecoBadge}</div>
                    </div>
                </div>
            `;
        }

        // Render ride cards
        function renderRideCards(rides, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            rides.forEach(ride => {
                container.innerHTML += generateRideCard(ride);
            });
            
            // Add event listeners to ride cards
            document.querySelectorAll('.ride-card').forEach(card => {
                card.addEventListener('click', () => {
                    const rideId = parseInt(card.getAttribute('data-id'));
                    openRideModal(rideId);
                });
            });
        }

        // Open ride details modal
        function openRideModal(rideId) {
            const ride = ridesData.find(r => r.id === rideId);
            if (!ride) return;
            
            const datetime = formatDateTime(ride.departure);
            
            document.getElementById('modal-ride-title').textContent = `${ride.from} to ${ride.to}`;
            document.getElementById('modal-ride-route').textContent = `${ride.from} to ${ride.to}`;
            document.getElementById('modal-ride-time').textContent = `${datetime.time}, ${datetime.fullDate}`;
            document.getElementById('modal-ride-seats').textContent = `${ride.seats.available} of ${ride.seats.total} seats available`;
            document.getElementById('modal-driver-avatar').textContent = ride.driver.avatar;
            document.getElementById('modal-driver-name').textContent = ride.driver.name;
            document.getElementById('modal-vehicle-info').textContent = `${ride.vehicle.model} - ${ride.ecoBadge}`;
            document.getElementById('modal-ride-cost').textContent = `₹${ride.cost} per passenger`;
            document.getElementById('modal-eco-impact').textContent = `This ride saves approximately ${(parseInt(ride.distance) * 0.12).toFixed(1)} kg of CO₂ compared to driving alone`;
            
            const modal = document.getElementById('ride-modal');
            modal.classList.add('show');
            
            setTimeout(() => {
                modal.style.display = 'block';
            }, 10);
        }

        // Close modal
        function closeModal() {
            const modal = document.getElementById('ride-modal');
            modal.classList.remove('show');
            
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        // Smooth scroll to element
        function smoothScrollTo(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Switch between pages
        function showPage(pageId) {
            document.querySelectorAll('[data-page]').forEach(link => {
                link.classList.remove('active');
            });
            
            document.querySelectorAll(`[data-page="${pageId}"]`).forEach(el => {
                el.classList.add('active');
            });
            
            document.getElementById('home-section').style.display = 'none';
            document.getElementById('rides-section').style.display = 'none';
            document.getElementById('dashboard-section').style.display = 'none';
            document.getElementById('about-section').style.display = 'none';
            document.getElementById('contact-section').style.display = 'none';
            
            document.getElementById(`${pageId}-section`).style.display = 'block';
            
            if (pageId === 'rides') {
                renderRideCards(ridesData, 'rides-container');
                smoothScrollTo('rides-section');
            } else if (pageId === 'dashboard') {
                updateDashboard();
                smoothScrollTo('dashboard-section');
            } else if (pageId === 'about') {
                smoothScrollTo('about-section');
            } else if (pageId === 'contact') {
                smoothScrollTo('contact-section');
            }
        }

        // Update dashboard with user data
        function updateDashboard() {
            const userData = initUserData();
            
            document.getElementById('total-rides').textContent = userData.pastRides.length;
            document.getElementById('money-saved').textContent = `₹${userData.ecoImpact.moneySaved}`;
            document.getElementById('co2-saved').textContent = userData.ecoImpact.co2Saved;
            
            // For demo purposes, show some sample upcoming and favorite rides
            renderRideCards(ridesData.slice(0, 2), 'upcoming-rides');
            renderRideCards(ridesData.slice(2, 4), 'favorite-rides');
        }

        // Initialize the application
        function initApp() {
            // Initialize user data
            initUserData();
            
            // Render initial ride cards
            renderRideCards(ridesData, 'rides-container');
            
            // Set up event listeners
            document.querySelectorAll('[data-page]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('data-page');
                    if (page) showPage(page);
                });
            });
            
            // Mobile menu toggle
            document.getElementById('menu-toggle').addEventListener('click', () => {
                document.getElementById('menu-toggle').classList.toggle('active');
                document.getElementById('nav-links').classList.toggle('active');
            });
            
            document.querySelector('.close-modal').addEventListener('click', closeModal);
            
            document.getElementById('join-ride-btn').addEventListener('click', () => {
                alert('Ride joined successfully! You will receive confirmation details soon.');
                closeModal();
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === document.getElementById('ride-modal')) {
                    closeModal();
                }
            });
            
            // Set up eco filter buttons
            document.querySelectorAll('.eco-filter').forEach(filter => {
                filter.addEventListener('click', () => {
                    document.querySelectorAll('.eco-filter').forEach(f => f.classList.remove('active'));
                    filter.classList.add('active');
                    
                    const type = filter.getAttribute('data-type');
                    let filteredRides;
                    
                    if (!type || type === 'all') {
                        filteredRides = ridesData;
                    } else {
                        filteredRides = ridesData.filter(ride => ride.vehicle.type === type);
                    }
                    
                    renderRideCards(filteredRides, 'rides-container');
                });
            });
            
            // Set up cost slider
            const costSlider = document.getElementById('max-cost');
            const costValue = document.getElementById('cost-value');
            
            costSlider.addEventListener('input', () => {
                costValue.textContent = `₹${costSlider.value}`;
                
                // Filter rides by cost
                const maxCost = parseInt(costSlider.value);
                const filteredRides = ridesData.filter(ride => ride.cost <= maxCost);
                renderRideCards(filteredRides, 'rides-container');
            });
            
            // Contact form submission
            document.querySelector('.contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                document.querySelector('.contact-form').reset();
            });
            
            // Show home page by default
            showPage('home');
            
            // Add scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe all animate elements
            document.querySelectorAll('.animate-fadeIn, .animate-slideLeft, .animate-slideRight').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);
