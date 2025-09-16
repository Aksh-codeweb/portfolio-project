 // Dummy data for service providers - Expanded with more options
        const providers = [
            {
                id: 1,
                name: "Priya's Kitchen",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "South-Indian",
                foodType: "Veg",
                rating: 4.8,
                reviews: 124,
                availability: "Mon-Fri",
                price: "₹200/meal",
                experience: "5 years",
                location: "Bangalore",
                mealsPerDay: [1, 2, 3],
                maxPrice: 200,
                description: "Specializing in authentic South Indian cuisine with a healthy twist. All meals prepared with fresh, locally sourced ingredients.",
                sampleMenu: "Meals include: Rice, Sambar, Two Vegetables, Rasam, Curd, Pickle, and Appalam",
                reviewsList: [
                    {user: "Rahul S.", rating: 5, comment: "Priya's food tastes just like my mother's cooking!"},
                    {user: "Neha P.", rating: 4.5, comment: "Consistently delicious and delivered on time."}
                ]
            },
            {
                id: 2,
                name: "Singh's Tiffin Service",
                photo: "user-circle",
                serviceType: "Tiffin Service",
                cuisine: "Punjabi",
                foodType: "Veg",
                rating: 4.5,
                reviews: 98,
                availability: "Daily",
                price: "₹1500/week",
                experience: "3 years",
                location: "Delhi",
                mealsPerDay: [2, 3],
                maxPrice: 150,
                description: "Authentic Punjabi flavors with fresh ingredients and quick delivery. Specializing in parathas and hearty curries.",
                sampleMenu: "Meals include: 2 Phulkas, Sabzi, Dal, Rice, Raita, Salad, and Sweet",
                reviewsList: [
                    {user: "Amrit Singh", rating: 4.5, comment: "The best Punjabi food in Delhi!"},
                    {user: "Sarah L.", rating: 4, comment: "Great value for money and always tasty."}
                ]
            },
            {
                id: 3,
                name: "Maria's Homemade",
                photo: "user-circle",
                serviceType: "Home Helper",
                cuisine: "Goan",
                foodType: "Non-Vegetarian",
                rating: 4.9,
                reviews: 156,
                availability: "Mon-Sat",
                price: "₹250/meal",
                experience: "7 years",
                location: "Mumbai",
                mealsPerDay: [1, 2],
                maxPrice: 250,
                description: "Traditional Goan dishes made with love and family recipes. Specializing in seafood and Portuguese-inspired cuisine.",
                sampleMenu: "Meals include: Fish Curry Rice, Veg Side, Salad, Pickle, and Poee",
                reviewsList: [
                    {user: "Carlos R.", rating: 5, comment: "Maria's cooking reminds me of home."},
                    {user: "Jennifer K.", rating: 5, comment: "My kids actually eat vegetables when they're in Maria's dishes!"}
                ]
            },
            {
                id: 4,
                name: "Gupta Bhojnalaya",
                photo: "user-circle",
                serviceType: "Tiffin Service",
                cuisine: "North-Indian",
                foodType: "Jain",
                rating: 4.7,
                reviews: 112,
                availability: "Mon-Sun",
                price: "₹1800/week",
                experience: "6 years",
                location: "Mumbai",
                mealsPerDay: [2, 3],
                maxPrice: 180,
                description: "Authentic Jain cuisine prepared with strict adherence to dietary principles. No root vegetables used.",
                sampleMenu: "Meals include: 2 Rotis, Sabzi, Dal, Rice, Salad, Papad, and Sweet",
                reviewsList: [
                    {user: "Rajesh Jain", rating: 5, comment: "Finally, a service that understands Jain dietary needs!"},
                    {user: "Naina M.", rating: 4.5, comment: "The food is delicious and authentic."}
                ]
            },
            {
                id: 5,
                name: "Chennai Spices",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Chettinad",
                foodType: "Non-Veg",
                rating: 4.6,
                reviews: 87,
                availability: "Mon-Fri",
                price: "₹220/meal",
                experience: "4 years",
                location: "Chennai",
                mealsPerDay: [1, 2, 3],
                maxPrice: 220,
                description: "Spicy and flavorful Chettinad cuisine with authentic recipes passed down through generations.",
                sampleMenu: "Meals include: Rice, Sambar, Kuzambu, Poriyal, Rasam, Curd, and Appalam",
                reviewsList: [
                    {user: "Karthik R.", rating: 5, comment: "Authentic Chettinad taste that reminds me of my grandmother's cooking."},
                    {user: "Divya P.", rating: 4, comment: "Perfect spice level and always fresh ingredients."}
                ]
            },
            {
                id: 6,
                name: "Bengali Rasoi",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Bengali",
                foodType: "Non-Veg",
                rating: 4.4,
                reviews: 93,
                availability: "Daily",
                price: "₹240/meal",
                experience: "4 years",
                location: "Kolkata",
                mealsPerDay: [1, 2],
                maxPrice: 240,
                description: "Traditional Bengali meals with emphasis on fish and seasonal vegetables. Balanced meals with all five tastes.",
                sampleMenu: "Meals include: Rice, Dal, Fish Curry, Veg Sabzi, Chutney, and Begun Bhaja",
                reviewsList: [
                    {user: "Amit K.", rating: 4.5, comment: "Authentic flavors and generous portions."},
                    {user: "Lisa M.", rating: 4, comment: "I love the variety of fish dishes offered each day."}
                ]
            },
            {
                id: 7,
                name: "Maharashtra Bhojan",
                photo: "user-circle",
                serviceType: "Tiffin Service",
                cuisine: "Maharashtrian",
                foodType: "Veg",
                rating: 4.3,
                reviews: 78,
                availability: "Mon-Sat",
                price: "₹1600/week",
                experience: "5 years",
                location: "Pune",
                mealsPerDay: [2, 3],
                maxPrice: 160,
                description: "Authentic Maharashtrian home-style cooking with traditional recipes and local flavors.",
                sampleMenu: "Meals include: Bhakri, Pithla, Rice, Dal, Vegetable, Chutney, and Papad",
                reviewsList: [
                    {user: "Sanjay P.", rating: 4.5, comment: "Tastes just like my grandmother's cooking from Kolhapur."},
                    {user: "Maya R.", rating: 4, comment: "The misal pav is absolutely delicious!"}
                ]
            },
            {
                id: 8,
                name: "Hyderabad Dastarkhwan",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Hyderabadi",
                foodType: "Non-Veg",
                rating: 4.7,
                reviews: 132,
                availability: "Daily",
                price: "₹280/meal",
                experience: "8 years",
                location: "Hyderabad",
                mealsPerDay: [1, 2, 3],
                maxPrice: 280,
                description: "Authentic Hyderabadi cuisine with rich flavors and aromatic biryanis. Specializing in Nizami recipes.",
                sampleMenu: "Meals include: Biryani, Mirchi ka Salan, Raita, Salad, and Dessert",
                reviewsList: [
                    {user: "Ahmed K.", rating: 5, comment: "The best biryani outside of Hyderabad!"},
                    {user: "Sunita M.", rating: 4.5, comment: "The flavors are incredible and authentic."}
                ]
            },
            {
                id: 9,
                name: "Kerala Curry House",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Kerala",
                foodType: "Non-Veg",
                rating: 4.6,
                reviews: 95,
                availability: "Mon-Sat",
                price: "₹230/meal",
                experience: "6 years",
                location: "Bangalore",
                mealsPerDay: [1, 2],
                maxPrice: 230,
                description: "Traditional Kerala cuisine with coconut-based curries and seafood specialties. Healthy and flavorful meals.",
                sampleMenu: "Meals include: Rice, Fish Curry, Thoran, Sambar, Pappadam, and Banana",
                reviewsList: [
                    {user: "Rajeevan N.", rating: 5, comment: "Authentic Kerala taste that reminds me of home."},
                    {user: "Lakshmi P.", rating: 4.5, comment: "The fish curry is perfectly spiced and delicious."}
                ]
            },
            {
                id: 10,
                name: "Gujarati Thali",
                photo: "user-circle",
                serviceType: "Tiffin Service",
                cuisine: "Gujarati",
                foodType: "Veg",
                rating: 4.8,
                reviews: 145,
                availability: "Mon-Sun",
                price: "₹1700/week",
                experience: "7 years",
                location: "Ahmedabad",
                mealsPerDay: [2, 3],
                maxPrice: 170,
                description: "Complete Gujarati thalis with balanced sweet and savory flavors. Wholesome meals prepared with traditional recipes.",
                sampleMenu: "Meals include: Roti, Shaak, Dal, Rice, Kadhi, Farsan, Salad, and Shrikhand",
                reviewsList: [
                    {user: "Mehul P.", rating: 5, comment: "The authentic taste of Gujarat in every bite."},
                    {user: "Jigna S.", rating: 4.5, comment: "Perfect balance of flavors in every meal."}
                ]
            },
            {
                id: 11,
                name: "Rajasthani Spice",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Rajasthani",
                foodType: "Veg",
                rating: 4.5,
                reviews: 87,
                availability: "Mon-Fri",
                price: "₹210/meal",
                experience: "5 years",
                location: "Jaipur",
                mealsPerDay: [1, 2],
                maxPrice: 210,
                description: "Flavorful Rajasthani cuisine with unique desert ingredients and traditional cooking methods.",
                sampleMenu: "Meals include: Bajra Roti, Dal Baati, Churma, Gatte ki Sabzi, and Rice",
                reviewsList: [
                    {user: "Vikram S.", rating: 4.5, comment: "Authentic Rajasthani flavors that transport you to Jodhpur."},
                    {user: "Priya M.", rating: 4, comment: "The dal baati is cooked to perfection every time."}
                ]
            },
            {
                id: 12,
                name: "Chinese Wok",
                photo: "user-circle",
                serviceType: "Home Cook",
                cuisine: "Indo-Chinese",
                foodType: "Eggetarian",
                rating: 3.8,
                reviews: 92,
                availability: "Tue-Sun",
                price: "₹190/meal",
                experience: "4 years",
                location: "Kolkata",
                mealsPerDay: [1],
                maxPrice: 190,
                description: "Delicious Indo-Chinese fusion dishes with perfect balance of spices. Quick and tasty meals for busy families.",
                sampleMenu: "Meals include: Fried Rice, Manchurian, Chilli Potato, Noodles, and Soup",
                reviewsList: [
                    {user: "Amitabh C.", rating: 4.5, comment: "The best hakka noodles in town!"},
                    {user: "Neha G.", rating: 3.5, comment: "Perfect for when we crave Chinese food."}
                ]
            }
        ];

        // DOM Elements
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const overlay = document.getElementById('overlay');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const mobileSignupBtn = document.getElementById('mobileSignupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeSignupModal = document.getElementById('closeSignupModal');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        const priceRange = document.getElementById('price-range');
        const priceValue = document.getElementById('price-value');
        const serviceCards = document.querySelectorAll('.service-card');

        // Toggle Mobile Menu
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);

        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Login/Signup Modals
        loginBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        signupBtn.addEventListener('click', () => {
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileLoginBtn.addEventListener('click', () => {
            closeMobileMenu();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileSignupBtn.addEventListener('click', () => {
            closeMobileMenu();
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        closeSignupModal.addEventListener('click', () => {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('active');
            signupModal.classList.add('active');
        });

        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.classList.remove('active');
            loginModal.classList.add('active');
        });

        // Close modals when clicking outside
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        signupModal.addEventListener('click', (e) => {
            if (e.target === signupModal) {
                signupModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Price range slider
        priceRange.addEventListener('input', () => {
            priceValue.textContent = `₹${priceRange.value}`;
        });

        // Service card interactivity
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                // Close all other service cards
                serviceCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
                
                // Toggle current card
                card.classList.toggle('active');
            });
        });

        // Filter chips functionality
        const filterChips = document.querySelectorAll('.filter-chip');
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                chip.classList.toggle('active');
            });
        });

        // Function to render provider cards
        function renderProviders(providersToRender) {
            const providersContainer = document.getElementById('providers-container');
            providersContainer.innerHTML = '';
            
            if (providersToRender.length === 0) {
                providersContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No providers found matching your criteria</h3>
                        <p>Try adjusting your filters to see more results</p>
                    </div>
                `;
                return;
            }
            
            providersToRender.forEach(provider => {
                const providerCard = document.createElement('div');
                providerCard.className = 'provider-card';
                providerCard.innerHTML = `
                    <button class="favorite-btn" onclick="toggleFavorite(${provider.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <div class="provider-badge">${provider.serviceType}</div>
                    <div class="provider-img">
                        <i class="fas fa-${provider.photo}"></i>
                    </div>
                    <div class="provider-content">
                        <div class="provider-header">
                            <h3 class="provider-name">${provider.name}</h3>
                            <div class="provider-rating">
                                <i class="fas fa-star"></i> ${provider.rating} (${provider.reviews})
                            </div>
                        </div>
                        <div class="provider-details">
                            <div class="provider-detail">
                                <i class="fas fa-utensils"></i> ${provider.cuisine} • ${provider.foodType}
                            </div>
                            <div class="provider-detail">
                                <i class="fas fa-map-marker-alt"></i> ${provider.location}
                            </div>
                            <div class="provider-detail">
                                <i class="fas fa-calendar-alt"></i> ${provider.availability}
                            </div>
                            <div class="provider-detail">
                                <i class="fas fa-user-check"></i> ${provider.experience} experience
                            </div>
                        </div>
                        <div class="provider-price">${provider.price}</div>
                        <button class="view-profile-btn" onclick="viewProfile(${provider.id})">View Profile & Book</button>
                    </div>
                `;
                providersContainer.appendChild(providerCard);
            });
        }

        // Function to scroll to providers section
        function scrollToProviders() {
            document.getElementById('providers').scrollIntoView({ behavior: 'smooth' });
        }

        // Function to view provider profile
        function viewProfile(providerId) {
            // In a real application, this would navigate to a profile page
            const provider = providers.find(p => p.id === providerId);
            alert(`Viewing profile of: ${provider.name}\n\nCuisine: ${provider.cuisine}\nFood Type: ${provider.foodType}\nPrice: ${provider.price}\n\nIn a complete implementation, this would open a detailed profile page with booking form.`);
        }

        // Function to toggle favorite status
        function toggleFavorite(providerId) {
            // In a real application, this would update localStorage
            alert(`Toggling favorite status for provider with ID: ${providerId}\n\nIn a complete implementation, this would be saved to localStorage and reflected in the UI.`);
        }

        // Function to filter providers
        function filterProviders() {
            const locationFilter = document.getElementById('location').value;
            const cuisineFilter = document.getElementById('cuisine').value;
            const foodTypeFilter = document.getElementById('food-type').value;
            const ratingFilter = parseFloat(document.getElementById('rating').value);
            const maxPrice = parseInt(priceRange.value);
            
            // Get active filter chips
            const activeMealChips = Array.from(document.querySelectorAll('.filter-chip[data-value][class*="active"]'))
                .filter(chip => !isNaN(parseInt(chip.dataset.value)))
                .map(chip => parseInt(chip.dataset.value));
                
            const activeServiceChips = Array.from(document.querySelectorAll('.filter-chip[data-value][class*="active"]'))
                .filter(chip => isNaN(parseInt(chip.dataset.value)))
                .map(chip => chip.dataset.value);
            
            const filteredProviders = providers.filter(provider => {
                // Convert price string to number for comparison
                const providerPrice = provider.maxPrice;
                
                return (!locationFilter || provider.location.toLowerCase() === locationFilter) &&
                       (!cuisineFilter || provider.cuisine.toLowerCase() === cuisineFilter) &&
                       (!foodTypeFilter || provider.foodType.toLowerCase() === foodTypeFilter) &&
                       (!ratingFilter || provider.rating >= ratingFilter) &&
                       (providerPrice <= maxPrice) &&
                       (activeMealChips.length === 0 || activeMealChips.some(meal => provider.mealsPerDay.includes(meal))) &&
                       (activeServiceChips.length === 0 || activeServiceChips.some(service => provider.serviceType.toLowerCase().includes(service)));
            });
            
            renderProviders(filteredProviders);
        }

        // Function to reset filters
        function resetFilters() {
            document.getElementById('location').value = '';
            document.getElementById('cuisine').value = '';
            document.getElementById('food-type').value = '';
            document.getElementById('rating').value = '0';
            priceRange.value = 500;
            priceValue.textContent = '₹500';
            
            // Reset all filter chips
            document.querySelectorAll('.filter-chip').forEach(chip => {
                chip.classList.remove('active');
            });
            
            renderProviders(providers);
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderProviders(providers);
            
            // Add event listeners to filters
            document.getElementById('location').addEventListener('change', filterProviders);
            document.getElementById('cuisine').addEventListener('change', filterProviders);
            document.getElementById('food-type').addEventListener('change', filterProviders);
            document.getElementById('rating').addEventListener('change', filterProviders);
            priceRange.addEventListener('change', filterProviders);
        });