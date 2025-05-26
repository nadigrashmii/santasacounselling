const testimonials = [
    {
        text: "Working in marketing, I’m constantly on the go, and I was missing out on my kids' emotional needs. The parent-child counselling at Santasa helped me understand how to communicate better with my children. The counsellor provided us with tools to navigate misunderstandings and resolve conflicts. I now feel more in tune with my family, which has strengthened our bond significantly.",
        author: "Arjun Patel",
        info: "Marketing Manager"
    },
    {
        text: "As a businesswoman managing a start-up, balancing my personal and professional life became overwhelming. Santasa's parent counselling helped me not just become a better parent but also manage stress and work-life balance effectively. The sessions were insightful, and I could immediately see the positive impact on my child’s behavior and our bond.",
        author: "Priya Desai",
        info: "Entrepreneur"
    },
    {
        text: "Juggling work and family was leaving me exhausted, and I was concerned about the impact it had on my relationship with my teenage daughter. Santasa’s parent counselling helped me reconnect with her. The counsellor offered great advice, and now our communication is much healthier. It’s been a positive shift for both of us.",
        author: "Meera Iyer",
        info: "Accountant"
    },
    {
        text: "Being in a high-pressure job like software development, I never had time to focus on family dynamics. Santasa's family counselling sessions made me realize how small efforts can improve communication and understanding. The counsellor guided us step-by-step, and now, my wife and I can handle issues without heated arguments. It's been a life-changing experience!",
        author: "Vinod Menon",
        info: "Software Engineer"
    }
];

let currentTestimonial = 0;
let interval;

function updateTestimonial() {
    const card = document.querySelector(".testimonial-card .testimonial-text");
    const author = document.querySelector(".testimonial-card .author");
    const info = document.querySelector(".testimonial-card .info");

    card.textContent = testimonials[currentTestimonial].text;
    author.textContent = testimonials[currentTestimonial].author;
    info.textContent = testimonials[currentTestimonial].info;

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentTestimonial);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function startAutoSwitching() {
    interval = setInterval(nextTestimonial, 5000);
}

function resetAutoSwitching() {
    clearInterval(interval);
    startAutoSwitching();
}

document.addEventListener("DOMContentLoaded", function () {
    // Testimonials
    document.querySelector(".prev").addEventListener("click", () => {
        prevTestimonial();
        resetAutoSwitching();
    });

    document.querySelector(".next").addEventListener("click", () => {
        nextTestimonial();
        resetAutoSwitching();
    });

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentTestimonial = index;
            updateTestimonial();
            resetAutoSwitching();
        });
    });

    updateTestimonial();
    startAutoSwitching();

    // Popup
    const popup = document.getElementById("contactPopup");
    const closeBtn = document.getElementById("closePopup");
    const contactBtn = document.getElementById("contactUsBtn");

    setTimeout(function () {
        popup.classList.add("active");
    }, 1000);

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    contactBtn.addEventListener("click", function () {
        popup.classList.remove("active");
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });

    // Mobile nav toggle
    const toggleButton = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (navMenu) {
                navMenu.classList.toggle("active");
                console.log("Mobile menu toggled");
            } else {
                console.error("Navigation menu element not found");
            }
        });
    } else {
        console.error("Toggle button not found");
    }

    // Dropdowns for mobile view
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        const link = dropdown.querySelector("a");
        if (link) {
            link.addEventListener("click", function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle("active");
                }
            });
        }
    });

    // Read More buttons
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    readMoreBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const shortText = this.parentElement.querySelector(".short-text");
            const fullText = this.parentElement.querySelector(".full-text");

            shortText.classList.toggle("hidden");
            fullText.classList.toggle("hidden");

            this.textContent = this.textContent === "Read More" ? "Read Less" : "Read More";
        });
    });
});
