// Handle account creation
document.getElementById('create-account-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Account created with details:', { name, email, username, password });

    document.getElementById('create-account-message').textContent = 'Account created successfully!';
});

// Handle login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('User logged in:', { username, password });

    document.getElementById('login-message').textContent = `Welcome back, ${username}!`;
    
    // Redirect to donate-food page
    window.location.href = 'donate-food.html';
});

// Handle food donation
document.getElementById('donate-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const foodName = document.getElementById('food-name').value;
    const foodQuantity = document.getElementById('food-quantity').value;

    console.log('Food donated:', { foodName, foodQuantity });

    document.getElementById('donation-message').textContent = `Thank you for donating ${foodQuantity} of ${foodName}!`;
});

// Populate country dropdown
async function fetchCountries() {
        try {
            let response = await fetch("https://restcountries.com/v3.1/all");
            let data = await response.json();
            
            // Sort countries alphabetically
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            const countryDropdown = document.getElementById("country");

            data.forEach(country => {
                let option = document.createElement("option");
                option.value = country.name.common;
                option.textContent = country.name.common;
                countryDropdown.appendChild(option);
            });
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    }

    fetchCountries();

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".form-step");
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((fieldset, index) => {
            fieldset.classList.toggle("active", index === step);
        });
    }

    document.querySelectorAll(".next-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            const inputs = steps[currentStep].querySelectorAll("input[required], select[required]");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "2px solid red";
                    valid = false;
                } else {
                    input.style.border = "";
                }
            });

            if (valid && currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll(".prev-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);
});

// Intro lines to cycle through
const texts = [
    "With <span style='color: red;'>EasyEats,</span> you order, we deliver, and we share!",
    "Groceries, hot meals, and food donations—we truly care.",
    "Join us today for a service beyond compare!"
];
const images = document.querySelectorAll(".slider-img");
const textContainer = document.getElementById("text-container");
let index = 0;

function changeSlide() {
    textContainer.classList.remove("visible");
    images[index].classList.remove("active");
    setTimeout(() => {
        index = (index + 1) % texts.length;
        textContainer.innerHTML = `<h1>${texts[index]}</h1>`;
        textContainer.classList.add("visible");
        images[index].classList.add("active");
    }, 1000);
}
setInterval(changeSlide, 4000);

function searchFunction() {
    let query = document.getElementById("searchInput").value;
    alert("You searched for: " + query);
}

