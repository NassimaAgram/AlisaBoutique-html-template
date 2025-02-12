// Form Validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("alert");
    const alertMessage = document.getElementById("alert-message");
    const alertCloseButton = document.getElementById("alert-close");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting by default

        // Reset error messages
        resetErrors();

        // Validate each field
        const isValid = validateForm();
        
        if (isValid) {
            showAlert("Success! Your form has been submitted.", "success");
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        // Name field (Ensure at least two parts, each part has at least 3 characters)
        const name = document.getElementById("name").value.trim();
        const nameParts = name.split(" ");
        const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;        
        if (nameParts.length < 2 || nameParts[0].length < 3 || nameParts[1].length < 3) {
            isValid = false;
            document.getElementById("name-error").classList.remove("hidden");
        }
        if (!nameRegex.test(name)) {
            isValid = false;
            document.getElementById("name-alphabet-error").classList.remove("hidden");
        }

        // Email field (Check for a valid email format)
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById("email-error").classList.remove("hidden");
        }

        // Validate Age field (Ensure age is a positive number and reasonable, between 18 and 100)
        const age = document.getElementById("age").value.trim();
        if (age === "" || isNaN(age) || age < 10 || age > 100) {
            isValid = false;
            document.getElementById("age-error").classList.remove("hidden");
        }

        // Message field (Ensure the message is not empty)
        const message = document.getElementById("message").value.trim();
        if (message === "") {
            isValid = false;
            document.getElementById("message-error").classList.remove("hidden");
        }

        return isValid;
    }

    // Function alert message
    function showAlert(message, type) {
        const alertBox = document.getElementById("alert");
        const alertMessage = document.getElementById("alert-message");
    
        alertMessage.textContent = message;
    
        // Reset alert style
        alertBox.classList.remove("bg-green-600", "bg-red-600", "opacity-0", "translate-y-[-50px]");
        
        if (type === "success") {
            alertBox.classList.add("bg-green-600");
        } else {
            alertBox.classList.add("bg-red-600");
        }
       
        alertBox.classList.remove("hidden");

        setTimeout(function () {
            alertBox.classList.add("opacity-100", "translate-y-0");
        }, 100);
        setTimeout(function () {
            alertBox.classList.remove("opacity-100", "translate-y-0");
            alertBox.classList.add("opacity-0", "translate-y-[-50px]");
    
            setTimeout(function () {
                alertBox.classList.add("hidden");
            }, 300); 
        }, 2000);
    }

    // Close the alert when button is clicked
    document.getElementById("alert-close").addEventListener("click", function () {
        const alertBox = document.getElementById("alert");
        alertBox.classList.remove("opacity-100", "translate-y-0");
        alertBox.classList.add("opacity-0", "translate-y-[-50px]");
        setTimeout(function () {
            alertBox.classList.add("hidden");
        }, 300);
    });


    // Function to reset error messages
    function resetErrors() {
        document.getElementById("name-error").classList.add("hidden");
        document.getElementById("name-alphabet-error").classList.add("hidden");
        document.getElementById("email-error").classList.add("hidden");
        document.getElementById("age-error").classList.add("hidden");
        document.getElementById("message-error").classList.add("hidden");
    }
});


