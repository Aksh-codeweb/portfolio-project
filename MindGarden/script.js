 // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.id !== 'chatbot-nav-link') {
                    e.preventDefault();
                    const target = link.getAttribute('data-target');
                    
                    // Remove active class from all links and modules
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
                    
                    // Add active class to clicked link and corresponding module
                    link.classList.add('active');
                    document.getElementById(`${target}-module`).classList.add('active');
                    
                    // Scroll to top of the module with smooth behavior
                    document.getElementById(`${target}-module`).scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // If journal module, reload entries
                    if (target === 'journal') {
                        loadJournalEntries();
                    }
                    
                    // Update mood chart when switching to mood module
                    if (target === 'mood') {
                        updateMoodChart();
                    }
                }
            });
        });

        // Chatbot nav link
        document.getElementById('chatbot-nav-link').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('chatbot-window').style.display = 'flex';
        });

        // Hero CTA button
        document.getElementById('hero-cta').addEventListener('click', () => {
            // Remove active class from all links and modules
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
            
            // Add active class to Mood link and module
            document.querySelector('[data-target="mood"]').classList.add('active');
            document.getElementById('mood-module').classList.add('active');
            
            // Scroll to top of the module with smooth behavior
            document.getElementById('mood-module').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update mood chart
            updateMoodChart();
        });

        // Mood selection
        document.querySelectorAll('.mood-option').forEach(option => {
            option.addEventListener('click', () => {
                if (option.dataset.mood === 'custom') {
                    document.getElementById('custom-mood-input').style.display = 'block';
                    document.getElementById('mood-note-section').style.display = 'none';
                } else {
                    document.getElementById('custom-mood-input').style.display = 'none';
                    document.getElementById('mood-note-section').style.display = 'block';
                    
                    // Remove selected class from all options
                    document.querySelectorAll('.mood-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    option.classList.add('selected');
                }
            });
        });

        // Save custom mood
        document.getElementById('save-custom-mood').addEventListener('click', () => {
            const customMood = document.getElementById('custom-mood').value;
            if (customMood.trim() !== '') {
                document.getElementById('mood-note-section').style.display = 'block';
                document.querySelectorAll('.mood-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
            }
        });

        // Save mood entry with confetti animation for positive moods
        document.getElementById('save-mood').addEventListener('click', () => {
            const selectedMood = document.querySelector('.mood-option.selected');
            if (selectedMood) {
                const mood = selectedMood.dataset.mood;
                const note = document.getElementById('mood-note').value;
                
                // Get current date
                const now = new Date();
                
                // Save mood to localStorage
                const moodEntry = {
                    mood: mood,
                    note: note,
                    date: now.toISOString()
                };
                
                let moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
                moodEntries.push(moodEntry);
                localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
                
                // Update the mood chart
                updateMoodChart();
                
                // Show confetti for happy mood
                if (mood === 'happy') {
                    createConfetti();
                }
                
                alert(`Your ${mood} mood has been recorded!`);
                
                // Reset form
                document.querySelectorAll('.mood-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                document.getElementById('mood-note').value = '';
                document.getElementById('custom-mood-input').style.display = 'none';
                document.getElementById('mood-note-section').style.display = 'none';
            } else {
                alert('Please select a mood first');
            }
        });

        // Mood Chart with Chart.js
        let moodChartInstance = null;

        function updateMoodChart() {
            const moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const today = new Date();
            
            // Get dates for the current week
            const weekDates = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(today.getDate() - i);
                weekDates.push(date.toDateString());
            }
            
            // Prepare data for the chart
            const moodValues = {
                'happy': 100,
                'energetic': 80,
                'neutral': 60,
                'anxious': 40,
                'sad': 20,
                'custom': 50
            };
            
            // Initialize with zero values
            const data = weekDates.map(date => null);
            const labels = weekDates.map(date => {
                const d = new Date(date);
                return days[d.getDay()];
            });
            
            // Fill in the data from mood entries
            moodEntries.forEach(entry => {
                const entryDate = new Date(entry.date);
                const entryDay = entryDate.toDateString();
                
                const index = weekDates.indexOf(entryDay);
                if (index !== -1) {
                    data[index] = moodValues[entry.mood] || 50;
                }
            });
            
            // Get canvas context
            const ctx = document.getElementById('moodChart').getContext('2d');
            
            // Destroy previous chart instance if it exists
            if (moodChartInstance) {
                moodChartInstance.destroy();
            }
            
            // Create new chart
            moodChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Mood Level',
                        data: data,
                        backgroundColor: 'rgba(91, 139, 247, 0.1)',
                        borderColor: '#5B8BF7',
                        borderWidth: 3,
                        pointBackgroundColor: '#5B8BF7',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    if (value === 100) return '😊 Happy';
                                    if (value === 80) return '💪 Energetic';
                                    if (value === 60) return '😐 Neutral';
                                    if (value === 40) return '😰 Anxious';
                                    if (value === 20) return '😢 Sad';
                                    return '';
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgza(255, 255, 255, 0.9)',
                            titleColor: '#2D3436',
                            bodyColor: '#2D3436',
                            borderColor: '#E6E9F0',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    const value = context.parsed.y;
                                    if (value === 100) return 'Mood: Happy';
                                    if (value === 80) return 'Mood: Energetic';
                                    if (value === 60) return 'Mood: Neutral';
                                    if (value === 40) return 'Mood: Anxious';
                                    if (value === 20) return 'Mood: Sad';
                                    return 'Mood: Custom';
                                }
                            }
                        }
                    }
                }
            });
            
            // Update insight
            const insightBox = document.getElementById('mood-insight');
            const validEntries = data.filter(value => value !== null);
            
            if (validEntries.length > 0) {
                const avgMood = validEntries.reduce((a, b) => a + b, 0) / validEntries.length;
                
                if (avgMood >= 80) {
                    insightBox.innerHTML = `<i class="fas fa-lightbulb"></i> Your mood has been positive this week! Keep doing what makes you feel good.`;
                } else if (avgMood >= 60) {
                    insightBox.innerHTML = `<i class="fas fa-lightbulb"></i> You've been feeling mostly neutral this week. Maybe try some new activities to add more excitement to your days.`;
                } else if (avgMood >= 40) {
                    insightBox.innerHTML = `<i class="fas fa-lightbulb"></i> You've been feeling anxious at times this week. Try some relaxation techniques like deep breathing or meditation.`;
                } else {
                    insightBox.innerHTML = `<i class="fas fa-lightbulb"></i> You've been feeling down this week. Remember that it's okay to not be okay. Consider reaching out to someone you trust.`;
                }
            } else {
                insightBox.innerHTML = `<i class="fas fa-lightbulb"></i> Track your mood to see insights here!`;
            }
        }

        // Initialize mood chart
        function initMoodChart() {
            updateMoodChart();
        }

        // Selfie upload functionality
        document.getElementById('selfie-upload').addEventListener('click', () => {
            document.getElementById('selfie-input').click();
        });

        document.getElementById('selfie-input').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('selfie-preview');
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

        // Save journal entry
        document.getElementById('save-journal').addEventListener('click', () => {
            const entryText = document.getElementById('journal-entry').value;
            const tags = document.getElementById('journal-tags').value;
            const mood = document.getElementById('journal-mood').value;
            const privacy = document.getElementById('journal-privacy').value;
            const selfie = document.getElementById('selfie-preview').src;
            
            if (entryText.trim() !== '') {
                // Save to localStorage
                const journalEntry = {
                    id: Date.now(), // Add unique ID for deletion
                    text: entryText,
                    tags: tags.split(',').map(tag => tag.trim()),
                    mood: mood,
                    privacy: privacy,
                    selfie: selfie !== '' && selfie !== 'null' ? selfie : null,
                    date: new Date().toISOString()
                };
                
                let journalEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
                journalEntries.push(journalEntry);
                localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
                
                // Add to UI
                addJournalEntryToUI(journalEntry);
                
                // Reset form
                document.getElementById('journal-entry').value = '';
                document.getElementById('journal-tags').value = '';
                document.getElementById('journal-mood').selectedIndex = 0;
                document.getElementById('journal-privacy').selectedIndex = 0;
                document.getElementById('selfie-preview').style.display = 'none';
                
                alert('Journal entry saved successfully!');
            } else {
                alert('Please write something in your journal entry');
            }
        });

        // Load journal entries on page load
        function loadJournalEntries() {
            const journalEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
            const container = document.getElementById('journal-entries-container');
            container.innerHTML = '';
            
            // Sort entries by date (newest first)
            journalEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            journalEntries.forEach(entry => {
                addJournalEntryToUI(entry);
            });
        }
        
        function addJournalEntryToUI(entry) {
            const container = document.getElementById('journal-entries-container');
            const entryEl = document.createElement('div');
            entryEl.className = 'journal-entry';
            entryEl.dataset.id = entry.id;
            
            const date = new Date(entry.date).toLocaleDateString();
            
            let entryHTML = `
                <button class="delete-entry" data-id="${entry.id}">
                    <i class="fas fa-trash"></i>
                </button>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong>${entry.text.substring(0, 30)}${entry.text.length > 30 ? '...' : ''}</strong>
                    <span style="color: var(--text-light); font-size: 0.9rem;">${date}</span>
                </div>
                <p style="color: var(--text-light);">${entry.text}</p>
            `;
            
            if (entry.selfie) {
                entryHTML += `
                    <img src="${entry.selfie}" class="entry-image" style="display: block; max-width: 200px; border-radius: 10px; margin-top: 1rem;">
                `;
            }
            
            if (entry.tags && entry.tags.length > 0 && entry.tags[0] !== '') {
                entryHTML += `
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap;">
                        ${entry.tags.map(tag => `<span style="background-color: var(--secondary); color: white; padding: 0.2rem 0.5rem; border-radius: 10px; font-size: 0.8rem;">#${tag}</span>`).join('')}
                    </div>
                `;
            }
            
            entryEl.innerHTML = entryHTML;
            container.appendChild(entryEl);
            
            // Add delete functionality
            const deleteBtn = entryEl.querySelector('.delete-entry');
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                deleteJournalEntry(entry.id);
            });
        }
        
        function deleteJournalEntry(id) {
            if (confirm('Are you sure you want to delete this journal entry?')) {
                let journalEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
                journalEntries = journalEntries.filter(entry => entry.id !== id);
                localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
                
                // Remove from UI
                document.querySelector(`.journal-entry[data-id="${id}"]`).remove();
                alert('Journal entry deleted successfully!');
            }
        }

        // Hobby note functionality
        document.querySelectorAll('.add-note-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const notesSection = btn.closest('.activity-card').querySelector('.activity-notes');
                notesSection.style.display = notesSection.style.display === 'block' ? 'none' : 'block';
            });
        });

        document.querySelectorAll('.save-note-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const notesSection = btn.closest('.activity-notes');
                const textarea = notesSection.querySelector('textarea');
                if (textarea.value.trim() !== '') {
                    const noteDisplay = notesSection.closest('.activity-card').querySelector('.activity-note');
                    noteDisplay.textContent = textarea.value;
                    noteDisplay.style.display = 'block';
                    
                    notesSection.style.display = 'none';
                    textarea.value = '';
                    
                    alert('Note saved successfully!');
                } else {
                    alert('Please write something in your note');
                }
            });
        });

        // Add new hobby
        document.getElementById('add-hobby').addEventListener('click', () => {
            const hobbyName = prompt('Enter the name of your new hobby:');
            if (hobbyName && hobbyName.trim() !== '') {
                const hobbyCategories = document.getElementById('hobby-categories-container');
                
                const newHobby = document.createElement('div');
                newHobby.className = 'hobby-category';
                newHobby.style.color = getRandomColor();
                
                newHobby.innerHTML = `
                    <button class="delete-hobby">×</button>
                    <i class="fas fa-heart"></i>
                    <span>${hobbyName}</span>
                `;
                
                hobbyCategories.appendChild(newHobby);
                
                // Add delete functionality
                newHobby.querySelector('.delete-hobby').addEventListener('click', (e) => {
                    e.stopPropagation();
                    newHobby.remove();
                });
            }
        });

        // Add new activity
        document.getElementById('add-activity').addEventListener('click', () => {
            const activityName = prompt('Enter the name of your new activity:');
            if (activityName && activityName.trim() !== '') {
                alert(`Activity "${activityName}" added! In a full implementation, this would be saved.`);
            }
        });

        // Helper function to get random color for new hobbies
        function getRandomColor() {
            const colors = [
                '#5B8BF7', '#8E6CD3', '#FF7D9C', '#6DD5A4', '#FFC46B', 
                '#FF6B6B', '#3A6BD9', '#6C63FF', '#00B894', '#E17055'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // Chatbot functionality
        document.getElementById('chatbot-toggle').addEventListener('click', () => {
            const chatbotWindow = document.getElementById('chatbot-window');
            chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
        });

        document.getElementById('close-chat').addEventListener('click', () => {
            document.getElementById('chatbot-window').style.display = 'none';
        });

        document.getElementById('send-message').addEventListener('click', sendMessage);
        document.getElementById('user-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        let assessmentInProgress = false;
        let currentAssessment = null;
        let assessmentQuestions = [];
        let currentQuestionIndex = 0;
        let assessmentScore = 0;
        let conversationCount = 0;

        function sendMessage() {
            const userInput = document.getElementById('user-input');
            const message = userInput.value.trim();
            
            if (message !== '') {
                // Add user message to chat
                addMessage(message, 'user');
                userInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    let botResponse = '';
                    
                    if (assessmentInProgress) {
                        processAssessmentResponse(message);
                    } else if (message.toLowerCase().includes('how are you') || message.toLowerCase().includes("how're you")) {
                        botResponse = "I'm here to support you! How are you feeling today?";
                        conversationCount++;
                    } else if (message.toLowerCase().includes('sad') || message.toLowerCase().includes('unhappy') || message.toLowerCase().includes('depressed')) {
                        botResponse = "I'm sorry to hear you're feeling this way. It's okay to feel sad sometimes. Remember that emotions are temporary, and it's important to be kind to yourself. Would you like to try a quick mindfulness exercise or would you prefer to talk about what's on your mind?";
                        conversationCount++;
                    } else if (message.toLowerCase().includes('anxious') || message.toLowerCase().includes('nervous') || message.toLowerCase().includes('worried')) {
                        botResponse = "Anxiety can be challenging. Let's take a moment to breathe together. Inhale slowly for 4 counts, hold for 2 counts, and exhale for 6 counts. Would you like to try a grounding exercise or would you prefer to discuss what's causing these feelings?";
                        conversationCount++;
                    } else if (message.toLowerCase().includes('happy') || message.toLowerCase().includes('good') || message.toLowerCase().includes('great')) {
                        botResponse = "I'm glad to hear you're feeling good! Celebrating positive moments is important. Would you like to journal about what's making you happy to remember this feeling later?";
                        conversationCount++;
                    } else if (message.toLowerCase().includes('assessment') || message.toLowerCase().includes('test') || message.toLowerCase().includes('check')) {
                        botResponse = "I can help you with a self-assessment for depression, anxiety, or eating disorders. These are not diagnostic tools but can help you understand your symptoms better. Would you like to take one?";
                        addAssessmentOptions();
                    } else {
                        botResponse = "Thank you for sharing. I'm here to listen and support you. How has your day been so far?";
                        conversationCount++;
                    }
                    
                    // After a few exchanges, ask about assessment
                    if (conversationCount >= 3 && !assessmentInProgress) {
                        botResponse += " Would you like to take a quick assessment to better understand how you've been feeling?";
                        addAssessmentOptions();
                        conversationCount = 0;
                    }
                    
                    if (!assessmentInProgress) {
                        addMessage(botResponse, 'bot');
                    }
                }, 1000);
            }
        }

        function addAssessmentOptions() {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'assessment-options';
            optionsDiv.innerHTML = `
                <button class="assessment-btn" data-assessment="depression">Depression Assessment</button>
                <button class="assessment-btn" data-assessment="anxiety">Anxiety Assessment</button>
                <button class="assessment-btn" data-assessment="eating">Eating Disorder Assessment</button>
            `;
            
            document.getElementById('chat-messages').appendChild(optionsDiv);
            
            document.querySelectorAll('.assessment-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    startAssessment(btn.getAttribute('data-assessment'));
                });
            });
        }

        function startAssessment(assessmentType) {
            assessmentInProgress = true;
            currentAssessment = assessmentType;
            currentQuestionIndex = 0;
            assessmentScore = 0;
            
            // Define questions based on assessment type
            if (assessmentType === 'depression') {
                assessmentQuestions = [
                    "How often have you felt down, depressed, or hopeless in the past two weeks?",
                    "How often have you had little interest or pleasure in doing things?",
                    "How often have you had trouble falling or staying asleep, or sleeping too much?",
                    "How often have you felt tired or had little energy?",
                    "How often have you had poor appetite or overeaten?",
                    "How often have you felt bad about yourself — or that you are a failure or have let yourself or your family down?",
                    "How often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
                    "How often have you been moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
                    "How often have you had thoughts that you would be better off dead or of hurting yourself in some way?",
                    "How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?"
                ];
            } else if (assessmentType === 'anxiety') {
                assessmentQuestions = [
                    "How often have you felt nervous, anxious, or on edge?",
                    "How often have you been unable to stop or control worrying?",
                    "How often have you worried too much about different things?",
                    "How often have you had trouble relaxing?",
                    "How often have you been so restless that it is hard to sit still?",
                    "How often have you become easily annoyed or irritable?",
                    "How often have you felt afraid as if something awful might happen?",
                    "How often have you felt like you might panic?",
                    "How often have you avoided situations that make you anxious?",
                    "How often has anxiety interfered with your daily activities?"
                ];
            } else if (assessmentType === 'eating') {
                assessmentQuestions = [
                    "How often do you avoid eating despite feeling hungry?",
                    "How often do you feel guilty or ashamed after eating?",
                    "How often do you think about your body shape or weight?",
                    "How often does your weight influence how you feel about yourself?",
                    "How often have you eaten in secret?",
                    "How often do you feel out of control when eating?",
                    "How often do you make yourself vomit after eating?",
                    "How often do you use laxatives, diuretics, or diet pills to control your weight?",
                    "How often do you exercise excessively to control your weight?",
                    "How often has your relationship with food affected your social life?"
                ];
            }
            
            // Clear assessment options
            document.querySelector('.assessment-options').remove();
            
            // Ask first question
            askAssessmentQuestion();
        }

        function askAssessmentQuestion() {
            if (currentQuestionIndex < assessmentQuestions.length) {
                addMessage(assessmentQuestions[currentQuestionIndex] + " (Please respond with: Never, Sometimes, Often, or Always)", 'bot');
            } else {
                completeAssessment();
            }
        }

        function processAssessmentResponse(message) {
            // Score the response
            const response = message.toLowerCase();
            let score = 0;
            
            if (response.includes('never')) score = 0;
            else if (response.includes('sometimes')) score = 1;
            else if (response.includes('often')) score = 2;
            else if (response.includes('always')) score = 3;
            else {
                addMessage("I didn't understand that. Please respond with: Never, Sometimes, Often, or Always", 'bot');
                return;
            }
            
            assessmentScore += score;
            currentQuestionIndex++;
            
            // Ask next question or complete assessment
            if (currentQuestionIndex < assessmentQuestions.length) {
                setTimeout(() => {
                    askAssessmentQuestion();
                }, 1000);
            } else {
                setTimeout(() => {
                    completeAssessment();
                }, 1000);
            }
        }

        function completeAssessment() {
            let result = '';
            let severity = '';
            
            // Calculate result based on score
            const maxScore = assessmentQuestions.length * 3;
            const percentage = (assessmentScore / maxScore) * 100;
            
            if (percentage < 25) {
                severity = 'Minimal';
                result = `Based on your responses, you're experiencing minimal symptoms of ${currentAssessment}. This is great news! Continue practicing self-care and check in with yourself regularly.`;
            } else if (percentage < 50) {
                severity = 'Mild';
                result = `Your responses suggest mild symptoms of ${currentAssessment}. It might be helpful to practice more self-care activities and monitor these feelings. Consider talking to a trusted friend or family member about how you're feeling.`;
            } else if (percentage < 75) {
                severity = 'Moderate';
                result = `Your responses indicate moderate symptoms of ${currentAssessment}. It's important to take these feelings seriously. Consider reaching out to a mental health professional for support. You don't have to navigate this alone.`;
            } else {
                severity = 'Severe';
                result = `Your responses suggest severe symptoms of ${currentAssessment}. It's important to seek professional help. Please consider reaching out to a mental health provider, counselor, or your doctor as soon as possible. You deserve support and effective treatment.`;
            }
            
            addMessage(`Thank you for completing the assessment. Your score: ${assessmentScore}/${maxScore}`, 'bot');
            addMessage(result, 'bot');
            
            if (severity === 'Severe') {
                addMessage("Would you like information on how to find professional help in your area?", 'bot');
            }
            
            assessmentInProgress = false;
            currentAssessment = null;
        }

        function addMessage(message, sender) {
            const messagesContainer = document.getElementById('chat-messages');
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Create confetti animation
        function createConfetti() {
            const colors = ['#5B8BF7', '#8E6CD3', '#FF7D9C', '#6DD5A4', '#FFC46B'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 10 + 5) + 'px';
                confetti.style.height = (Math.random() * 10 + 5) + 'px';
                
                document.body.appendChild(confetti);
                
                // Animate the confetti
                confetti.animate([
                    { transform: 'translateY(0) rotate(0)', opacity: 1 },
                    { transform: `translateY(100px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: 1000 + Math.random() * 2000,
                    easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
                });
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }
        }

        // Initialize on load
        window.addEventListener('load', () => {
            if (typeof(Storage) === "undefined") {
                alert("Your browser doesn't support local storage. Some features may not work properly.");
            }
            
            // Initialize mood chart
            initMoodChart();
            
            // Load journal entries
            loadJournalEntries();
            
            // Add delete functionality to hobby categories
            document.querySelectorAll('.delete-hobby').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    btn.closest('.hobby-category').remove();
                });
            });
        });