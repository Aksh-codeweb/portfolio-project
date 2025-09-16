 document.addEventListener("DOMContentLoaded", function () {
      // Navigation
      const navLinks = document.querySelectorAll(".nav-link");
      const pages = document.querySelectorAll(".page");

      navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetPage = this.getAttribute("data-page");

          // Update active nav link
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          this.classList.add("active");

          // Show target page
          pages.forEach((page) => {
            page.classList.remove("active");
            if (page.id === targetPage) {
              page.classList.add("active");

              // If My Journey page, load saved paths
              if (targetPage === "my-journey") {
                loadSavedPaths();
              }
            }
          });
        });
      });

      // Homepage explore button
      document
        .querySelector(".explore-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector('[data-page="explore"]').click();
        });

      // Explore from journey button
      document
        .querySelector(".explore-from-journey")
        .addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector('[data-page="explore"]').click();
        });

      // Career icons animation
      const careerIcons = document.querySelectorAll(".career-icon");
      let angle = 0;

      function animateIcons() {
        angle += 0.005;

        careerIcons.forEach((icon, index) => {
          const orbit = icon.parentElement;
          const orbitWidth = parseInt(orbit.style.width);
          const orbitHeight = parseInt(orbit.style.height);
          const speed = 0.5 + index * 0.1;

          const x = Math.cos(angle * speed) * (orbitWidth / 2);
          const y = Math.sin(angle * speed) * (orbitHeight / 2);

          icon.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });

        requestAnimationFrame(animateIcons);
      }

      animateIcons();

      // Career selection
      const careerCards = document.querySelectorAll(".career-card");
      const roadmapContainer = document.querySelector(".roadmap-container");
      const roadmapTitle = document.querySelector(".roadmap-title");
      const savePathBtn = document.querySelector(".save-path-btn");

      // Roadmap data for different careers
      const roadmaps = {
        developer: {
          title: "Software Developer Roadmap",
          steps: [
            {
              title: "Education & Foundation",
              description:
                "Start with a bachelor's degree in computer science or related field. Learn programming fundamentals and data structures.",
            },
            {
              title: "Build Projects",
              description:
                "Create a portfolio of projects to showcase your skills. Contribute to open source or build your own applications.",
            },
            {
              title: "Internship & Entry-Level",
              description:
                "Gain practical experience through internships. Apply for junior developer positions to start your professional journey.",
            },
            {
              title: "Specialize",
              description:
                "Choose a specialization like front-end, back-end, mobile, or full-stack development. Learn advanced concepts and frameworks.",
            },
            {
              title: "Senior Roles & Leadership",
              description:
                "Progress to senior developer, tech lead, or architect roles. Mentor junior developers and contribute to technical strategy.",
            },
          ],
        },
        designer: {
          title: "UX/UI Designer Roadmap",
          steps: [
            {
              title: "Learn Design Principles",
              description:
                "Study color theory, typography, layout, and visual hierarchy. Understand user psychology and behavior.",
            },
            {
              title: "Master Design Tools",
              description:
                "Become proficient with design tools like Figma, Sketch, Adobe XD, and prototyping tools.",
            },
            {
              title: "Build a Portfolio",
              description:
                "Create case studies for your projects. Showcase your design process from research to final implementation.",
            },
            {
              title: "Gain Practical Experience",
              description:
                "Look for internships or freelance opportunities. Work on real projects to understand client needs and constraints.",
            },
            {
              title: "Specialize & Advance",
              description:
                "Focus on a specific area like UX research, interaction design, or product design. Consider leadership roles like Design Director.",
            },
          ],
        },
        "data-scientist": {
          title: "Data Scientist Roadmap",
          steps: [
            {
              title: "Build Mathematical Foundation",
              description:
                "Study statistics, linear algebra, calculus, and probability. These form the basis for machine learning algorithms.",
            },
            {
              title: "Learn Programming & Tools",
              description:
                "Master Python or R, along with libraries like Pandas, NumPy, Scikit-learn. Learn SQL for database querying.",
            },
            {
              title: "Understand Machine Learning",
              description:
                "Study machine learning algorithms and when to apply them. Learn about supervised and unsupervised learning.",
            },
            {
              title: "Work on Projects",
              description:
                "Apply your skills to real datasets. Participate in Kaggle competitions to practice and build your portfolio.",
            },
            {
              title: "Specialize & Communicate",
              description:
                "Focus on areas like deep learning, NLP, or computer vision. Learn to communicate insights effectively to stakeholders.",
            },
          ],
        },
        marketer: {
          title: "Digital Marketer Roadmap",
          steps: [
            {
              title: "Learn Marketing Fundamentals",
              description:
                "Understand marketing principles, consumer behavior, and digital marketing channels like SEO, SEM, and social media.",
            },
            {
              title: "Master Analytics & Tools",
              description:
                "Learn to use tools like Google Analytics, Google Ads, and social media analytics. Understand how to measure campaign success.",
            },
            {
              title: "Develop Content Skills",
              description:
                "Learn copywriting, content creation, and storytelling. Understand how to create engaging content for different platforms.",
            },
            {
              title: "Gain Practical Experience",
              description:
                "Manage social media accounts, run small ad campaigns, or volunteer to market local events or businesses.",
            },
            {
              title: "Specialize & Strategize",
              description:
                "Focus on areas like SEO, PPC, social media marketing, or email marketing. Progress to strategy and management roles.",
            },
          ],
        },
        healthcare: {
          title: "Healthcare Professional Roadmap",
          steps: [
            {
              title: "Education & Certification",
              description:
                "Complete the required education for your chosen healthcare field, which may include degrees, certifications, or specialized training.",
            },
            {
              title: "Clinical Experience",
              description:
                "Gain hands-on experience through clinical rotations, internships, or entry-level positions in healthcare settings.",
            },
            {
              title: "Licensing & Credentials",
              description:
                "Obtain necessary licenses and credentials required for your specific healthcare profession.",
            },
            {
              title: "Specialization",
              description:
                "Consider specializing in a specific area of healthcare to advance your career and expertise.",
            },
            {
              title: "Continuing Education",
              description:
                "Stay current with medical advancements through continuing education and professional development.",
            },
          ],
        },
        education: {
          title: "Educator Roadmap",
          steps: [
            {
              title: "Bachelor's Degree",
              description:
                "Earn a bachelor's degree in education or your chosen subject area, along with completing a teacher preparation program.",
            },
            {
              title: "Student Teaching",
              description:
                "Complete a student teaching internship to gain practical classroom experience under the guidance of a mentor teacher.",
            },
            {
              title: "Certification & Licensing",
              description:
                "Obtain teaching certification or licensure for your state and subject area.",
            },
            {
              title: "First Teaching Position",
              description:
                "Begin your career with an entry-level teaching position, continuing to develop your skills and teaching style.",
            },
            {
              title: "Professional Development",
              description:
                "Pursue advanced degrees, certifications, or specialized training to advance your career and teaching effectiveness.",
            },
          ],
        },
        engineer: {
          title: "Mechanical Engineer Roadmap",
          steps: [
            {
              title: "Engineering Degree",
              description:
                "Earn a bachelor's degree in mechanical engineering or a related field from an accredited program.",
            },
            {
              title: "Internships & Co-ops",
              description:
                "Gain practical experience through internships or cooperative education programs during your studies.",
            },
            {
              title: "Entry-Level Position",
              description:
                "Start your career in an entry-level engineering position, applying your knowledge to real-world problems.",
            },
            {
              title: "Professional Engineering License",
              description:
                "Consider obtaining a Professional Engineering (PE) license to advance your career and take on more responsibility.",
            },
            {
              title: "Specialization & Leadership",
              description:
                "Specialize in a specific area of mechanical engineering and progress to leadership or management roles.",
            },
          ],
        },
        finance: {
          title: "Financial Analyst Roadmap",
          steps: [
            {
              title: "Education Foundation",
              description:
                "Earn a bachelor's degree in finance, accounting, economics, or a related business field.",
            },
            {
              title: "Internships & Entry-Level",
              description:
                "Gain experience through internships and entry-level positions in finance or related areas.",
            },
            {
              title: "Certifications",
              description:
                "Consider pursuing professional certifications like CFA (Chartered Financial Analyst) or FMVA (Financial Modeling & Valuation Analyst).",
            },
            {
              title: "Specialization",
              description:
                "Specialize in a specific area of financial analysis such as investment banking, corporate finance, or risk management.",
            },
            {
              title: "Advanced Roles",
              description:
                "Progress to senior analyst roles, portfolio management, or other advanced positions in the finance industry.",
            },
          ],
        },
      };

      let selectedCareer = null;

      // Function to smoothly scroll to the roadmap section
      function scrollToRoadmap() {
        const roadmapElement = document.getElementById("roadmap");
        if (roadmapElement) {
          const offsetTop = roadmapElement.offsetTop - 100; // Offset for fixed header

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }

      careerCards.forEach((card) => {
        card.addEventListener("click", function () {
          // Remove selected class from all cards
          careerCards.forEach((c) => c.classList.remove("selected"));

          // Add selected class to clicked card
          this.classList.add("selected");

          selectedCareer = this.getAttribute("data-career");
          const roadmap = roadmaps[selectedCareer];

          // Update roadmap title
          roadmapTitle.textContent = roadmap.title;

          // Update step cards
          const stepCards = document.querySelectorAll(".step-card");
          roadmap.steps.forEach((step, index) => {
            if (stepCards[index]) {
              const stepCard = stepCards[index];
              stepCard.querySelector("h3").textContent = step.title;
              stepCard.querySelector("p").textContent = step.description;
            }
          });

          // Show roadmap with animation
          roadmapContainer.style.display = "block";

          // Animate step cards
          setTimeout(() => {
            stepCards.forEach((card) => {
              card.classList.add("show");
            });
          }, 100);

          // Scroll to roadmap section
          scrollToRoadmap();
        });
      });

      // Career filters
      const filterButtons = document.querySelectorAll(".filter-btn");

      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const filter = this.getAttribute("data-filter");

          // Update active filter button
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          this.classList.add("active");

          // Filter career cards
          careerCards.forEach((card) => {
            const category = card.getAttribute("data-category");

            if (filter === "all" || filter === category) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });

      // Save career path
      savePathBtn.addEventListener("click", function () {
        if (!selectedCareer) {
          alert("Please select a career first");
          return;
        }

        const roadmap = roadmaps[selectedCareer];
        const careerName = roadmap.title.replace(" Roadmap", "");

        // Get existing saved paths or initialize empty array
        const savedPaths = JSON.parse(
          localStorage.getItem("savedPaths") || "[]"
        );

        // Check if this path is already saved
        const alreadySaved = savedPaths.some(
          (path) => path.career === selectedCareer
        );

        if (alreadySaved) {
          alert("This career path is already saved to your journey.");
          return;
        }

        // Add new path with timestamp
        savedPaths.push({
          career: selectedCareer,
          name: careerName,
          savedAt: new Date().toISOString(),
        });

        // Save back to localStorage
        localStorage.setItem("savedPaths", JSON.stringify(savedPaths));

        alert("Career path saved to your journey!");

        // Update badges progress
        updateBadgeProgress("explorer", savedPaths.length);
      });

      // Expandable resource sections
      const resourceHeaders = document.querySelectorAll(".resource-header");

      resourceHeaders.forEach((header) => {
        header.addEventListener("click", function () {
          const content = this.nextElementSibling;
          const icon = this.querySelector(".fa-chevron-down");

          content.classList.toggle("expanded");
          icon.classList.toggle("fa-chevron-down");
          icon.classList.toggle("fa-chevron-up");
        });
      });

      // Save resource functionality
      const saveResourceButtons = document.querySelectorAll(".save-resource");

      saveResourceButtons.forEach((button) => {
        button.addEventListener("click", function () {
          this.classList.toggle("saved");
          this.innerHTML = this.classList.contains("saved")
            ? '<i class="fas fa-bookmark"></i>'
            : '<i class="far fa-bookmark"></i>';

          // Update badges progress
          const savedResources = document.querySelectorAll(
            ".save-resource.saved"
          ).length;
          updateBadgeProgress("researcher", savedResources);
        });
      });

      // Expandable FAQ items
      const faqQuestions = document.querySelectorAll(".faq-question");

      faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
          const answer = this.nextElementSibling;
          const icon = this.querySelector(".fa-chevron-down");

          answer.classList.toggle("expanded");
          icon.classList.toggle("fa-chevron-down");
          icon.classList.toggle("fa-chevron-up");
        });
      });

      // Quiz state
      const quizState = {
        currentQuestion: 1,
        totalQuestions: document.querySelectorAll(".quiz-question").length,
        answers: {},
        careerScores: {
          technology: 0,
          creative: 0,
          analytical: 0,
          social: 0,
        },
      };

      // DOM elements for quiz
      const progressFill = document.getElementById("progress-fill");
      const currentQuestionEl = document.getElementById("current-question");
      const totalQuestionsEl = document.getElementById("total-questions");
      const progressPercentEl = document.getElementById("progress-percent");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const quizResults = document.getElementById("quiz-results");
      const careerMatchesContainer =
        document.getElementById("career-matches");
      const retakeQuizBtn = document.getElementById("retake-quiz");
      const exploreCareersBtn = document.getElementById("explore-careers");
      const saveResultsBtn = document.getElementById("save-results");

      // Initialize quiz
      function initQuiz() {
        totalQuestionsEl.textContent = quizState.totalQuestions;
        updateProgress();
        showQuestion(quizState.currentQuestion);

        // Event listeners
        prevBtn.addEventListener("click", goToPreviousQuestion);
        nextBtn.addEventListener("click", handleNextButton);
        retakeQuizBtn.addEventListener("click", resetQuiz);
        exploreCareersBtn.addEventListener("click", function () {
          document.querySelector('[data-page="explore"]').click();
        });
        saveResultsBtn.addEventListener("click", saveQuizResults);

        // Option selection
        document.querySelectorAll(".quiz-option").forEach((option) => {
          option.addEventListener("click", function () {
            const question = this.closest(".quiz-question");
            const questionNum = parseInt(question.dataset.question);
            const value = this.dataset.value;

            // Remove selected class from siblings
            const siblings = this.parentElement.children;
            for (let sibling of siblings) {
              sibling.classList.remove("selected");
            }

            // Add selected class to clicked option
            this.classList.add("selected");

            // Store answer
            quizState.answers[questionNum] = value;

            // Enable next button
            nextBtn.disabled = false;
          });
        });
      }

      // Show specific question
      function showQuestion(questionNum) {
        // Hide all questions
        document.querySelectorAll(".quiz-question").forEach((q) => {
          q.classList.remove("active");
        });

        // Show requested question
        document
          .querySelector(`.quiz-question[data-question="${questionNum}"]`)
          .classList.add("active");

        // Update navigation buttons
        prevBtn.disabled = questionNum === 1;

        // If there's a previously selected answer for this question, highlight it
        if (quizState.answers[questionNum]) {
          const selectedOption = document.querySelector(
            `.quiz-question[data-question="${questionNum}"] .quiz-option[data-value="${quizState.answers[questionNum]}"]`
          );
          if (selectedOption) {
            selectedOption.classList.add("selected");
            nextBtn.disabled = false;
          }
        } else {
          nextBtn.disabled = true;
        }

        // Change next button to submit on last question
        if (questionNum === quizState.totalQuestions) {
          nextBtn.innerHTML = 'Submit <i class="fas fa-paper-plane"></i>';
        } else {
          nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
      }

      // Update progress bar
      function updateProgress() {
        const progress =
          ((quizState.currentQuestion - 1) / quizState.totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
        progressPercentEl.textContent = Math.round(progress);
        currentQuestionEl.textContent = quizState.currentQuestion;
      }

      // Go to next question
      function goToNextQuestion() {
        if (quizState.currentQuestion < quizState.totalQuestions) {
          quizState.currentQuestion++;
          updateProgress();
          showQuestion(quizState.currentQuestion);
        } else {
          calculateResults();
          showResults();
        }
      }

      // Go to previous question
      function goToPreviousQuestion() {
        if (quizState.currentQuestion > 1) {
          quizState.currentQuestion--;
          updateProgress();
          showQuestion(quizState.currentQuestion);
        }
      }

      // Handle next button click
      function handleNextButton() {
        if (quizState.answers[quizState.currentQuestion]) {
          goToNextQuestion();
        }
      }

      // Calculate results based on answers
      function calculateResults() {
        // Reset scores
        for (let career in quizState.careerScores) {
          quizState.careerScores[career] = 0;
        }

        // Calculate scores based on answers
        for (let question in quizState.answers) {
          const category = quizState.answers[question];
          quizState.careerScores[category] += 1;
        }
      }

      // Show results page
      function showResults() {
        document.querySelector(".quiz-content").style.display = "none";
        quizResults.style.display = "block";
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";

        // Generate results based on scores
        displayCareerMatches();
      }

      // Display career matches
      function displayCareerMatches() {
        careerMatchesContainer.innerHTML = "";

        // Convert scores to array and sort
        const categoryArray = [];
        for (let category in quizState.careerScores) {
          categoryArray.push({
            name: category,
            score: quizState.careerScores[category],
          });
        }

        // Sort by score (descending)
        categoryArray.sort((a, b) => b.score - a.score);

        // Calculate percentages
        const totalScore = categoryArray.reduce(
          (sum, category) => sum + category.score,
          0
        );

        // Get careers for top category
        const topCategory = categoryArray[0].name;
        const recommendedCareers = getCareersForCategory(topCategory);

        // Display recommended careers
        recommendedCareers.forEach((career) => {
          const careerMatch = document.createElement("div");
          careerMatch.className = "career-match";

          careerMatch.innerHTML = `
                        <div class="match-percentage">${Math.round(
            (quizState.careerScores[topCategory] / totalScore) *
            100
          )}%</div>
                        <h3 class="match-title">${career.title}</h3>
                        <p class="match-description">${career.description}</p>
                    `;

          careerMatchesContainer.appendChild(careerMatch);
        });
      }

      // Get careers for category
      function getCareersForCategory(category) {
        const careerMap = {
          technology: [
            {
              title: "Software Developer",
              description:
                "Build and maintain software applications and systems.",
            },
            {
              title: "Data Scientist",
              description:
                "Analyze data to extract insights and build models.",
            },
            {
              title: "Mechanical Engineer",
              description: "Design and build mechanical devices and systems.",
            },
          ],
          creative: [
            {
              title: "UX/UI Designer",
              description: "Create user-centered designs and experiences.",
            },
            {
              title: "Graphic Designer",
              description: "Create visual concepts to communicate ideas.",
            },
            {
              title: "Content Creator",
              description: "Develop engaging content for various platforms.",
            },
          ],
          analytical: [
            {
              title: "Data Analyst",
              description: "Interpret data to inform business decisions.",
            },
            {
              title: "Financial Analyst",
              description:
                "Assess financial data to guide investment decisions.",
            },
            {
              title: "Research Scientist",
              description: "Conduct experiments and analyze results.",
            },
          ],
          social: [
            {
              title: "Digital Marketer",
              description: "Promote brands through digital channels.",
            },
            {
              title: "HR Specialist",
              description: "Manage recruitment and employee relations.",
            },
            {
              title: "Sales Representative",
              description: "Sell products and build client relationships.",
            },
          ],
        };

        return (
          careerMap[category] || [
            {
              title: "Career Explorer",
              description:
                "Explore various career paths to find your perfect match.",
            },
          ]
        );
      }

      // Save quiz results
      function saveQuizResults() {
        // Get existing saved results or initialize empty array
        const savedResults = JSON.parse(
          localStorage.getItem("savedQuizResults") || "[]"
        );

        // Add new result with timestamp
        savedResults.push({
          date: new Date().toISOString(),
          scores: quizState.careerScores,
        });

        // Save back to localStorage
        localStorage.setItem(
          "savedQuizResults",
          JSON.stringify(savedResults)
        );

        alert("Quiz results saved to your journey!");

        // Update badge progress
        updateBadgeProgress("quizMaster", 1);
      }

      // Reset quiz
      function resetQuiz() {
        quizState.currentQuestion = 1;
        quizState.answers = {};

        for (let category in quizState.careerScores) {
          quizState.careerScores[category] = 0;
        }

        // Reset UI
        document.querySelector(".quiz-content").style.display = "block";
        quizResults.style.display = "none";
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";

        // Clear selections
        document.querySelectorAll(".quiz-option").forEach((option) => {
          option.classList.remove("selected");
        });

        updateProgress();
        showQuestion(quizState.currentQuestion);
      }

      // Update badge progress
      function updateBadgeProgress(badgeName, progress) {
        // In a real application, this would update the badge progress in localStorage
        // and visually update the progress bars
        console.log(`Updating ${badgeName} badge progress: ${progress}`);

        // Example: Update progress bars visually
        const badgeElements = document.querySelectorAll(
          ".badge-progress-fill"
        );
        badgeElements.forEach((element) => {
          const badge = element.closest(".badge");
          const badgeTitle = badge.querySelector("h4").textContent;

          if (badgeTitle === "Explorer" && badgeName === "explorer") {
            element.style.width = `${Math.min(progress * 33, 100)}%`;
          } else if (
            badgeTitle === "Researcher" &&
            badgeName === "researcher"
          ) {
            element.style.width = `${Math.min(progress * 33, 100)}%`;
          } else if (
            badgeTitle === "Quiz Master" &&
            badgeName === "quizMaster"
          ) {
            element.style.width = `${progress * 100}%`;
            if (progress >= 1) {
              badge.classList.remove("locked");
            }
          }
        });
      }

      // Load saved paths for My Journey page
      function loadSavedPaths() {
        const savedPathsContainer = document.getElementById("saved-paths");
        const noJourneyElement = document.getElementById("no-journey");

        // Get saved paths from localStorage
        const savedPaths = JSON.parse(
          localStorage.getItem("savedPaths") || "[]"
        );

        // Clear container
        savedPathsContainer.innerHTML = "";

        if (savedPaths.length === 0) {
          noJourneyElement.style.display = "block";
          return;
        }

        noJourneyElement.style.display = "none";

        // Add each saved path
        savedPaths.forEach((path, index) => {
          const roadmap = roadmaps[path.career];
          const savedDate = new Date(path.savedAt).toLocaleDateString();

          const pathElement = document.createElement("div");
          pathElement.className = "saved-path";
          pathElement.innerHTML = `
                        <div class="saved-path-header">
                            <h3 class="saved-path-title"><i class="fas fa-${getCareerIcon(
            path.career
          )}"></i> ${path.name}</h3>
                            <button class="delete-btn" data-index="${index}">Remove</button>
                        </div>
                        <div class="step-cards">
                            ${roadmap.steps
              .map(
                (step, i) => `
                                <div class="step-card show">
                                    <span class="step-number">${i + 1}</span>
                                    <h3>${step.title}</h3>
                                    <p>${step.description}</p>
                                </div>
                            `
              )
              .join("")}
                        </div>
                        <p style="margin-top: 15px; color: #777;">Saved on: ${savedDate}</p>
                    `;

          savedPathsContainer.appendChild(pathElement);
        });

        // Add event listeners to delete buttons
        const deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            deleteSavedPath(index);
          });
        });

        // Update badge progress
        updateBadgeProgress("explorer", savedPaths.length);
      }

      function getCareerIcon(career) {
        const icons = {
          developer: "code",
          designer: "paint-brush",
          "data-scientist": "chart-line",
          marketer: "bullhorn",
          healthcare: "heartbeat",
          education: "graduation-cap",
          engineer: "cogs",
          finance: "chart-pie",
        };

        return icons[career] || "briefcase";
      }

      function deleteSavedPath(index) {
        const savedPaths = JSON.parse(
          localStorage.getItem("savedPaths") || "[]"
        );

        if (index >= 0 && index < savedPaths.length) {
          savedPaths.splice(index, 1);
          localStorage.setItem("savedPaths", JSON.stringify(savedPaths));
          loadSavedPaths(); // Reload the displayed paths
        }
      }

      // Initialize the quiz
      initQuiz();

      // Initialize saved resources
      const savedResources = JSON.parse(
        localStorage.getItem("savedResources") || "{}"
      );
      document.querySelectorAll(".save-resource").forEach((button, index) => {
        if (savedResources[index]) {
          button.classList.add("saved");
          button.innerHTML = '<i class="fas fa-bookmark"></i>';
        }
      });

      // Update badge progress for resources
      const savedResourcesCount = Object.keys(savedResources).length;
      updateBadgeProgress("researcher", savedResourcesCount);
    });