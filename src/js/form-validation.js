// Form Validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const lang = document.documentElement.lang || 'en'; 

    // Input Fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const messageInput = document.getElementById("message");

    // Error Messages 
    const nameError = document.getElementById("name-error");
    const nameAlphabetError = document.getElementById("name-alphabet-error");
    const emailError = document.getElementById("email-error");
    const ageError = document.getElementById("age-error");
    const messageError = document.getElementById("message-error");

    // Regular Expressions
    const nameRegex = /^[A-Za-z\u0600-\u06FF]{3,} [A-Za-z\u0600-\u06FF]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Event Listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    ageInput.addEventListener("input", validateAge);
    messageInput.addEventListener("input", validateMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            showAlert("Success! Your form has been submitted.", "success");
            form.reset();
            resetBorders();
        }
    });

    // Close the alert when button is clicked
    document.getElementById("alert-close").addEventListener("click", function () {
        const alertBox = document.getElementById("alert");
        alertBox.classList.remove("opacity-100", "translate-y-0");
        alertBox.classList.add("opacity-0", "translate-y-[-50px]");
        setTimeout(function () {
            alertBox.classList.add("hidden");
        }, 300);
    });

    // Function alert message
    function showAlert(message, type) {
        console.log("showAlert called with message:", message); 

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
        alertBox.classList.add("flex");

        setTimeout(function () {
            alertBox.classList.add("opacity-100", "translate-y-0");
        }, 100);
        setTimeout(function () {
            alertBox.classList.remove("opacity-100", "translate-y-0");
            alertBox.classList.add("opacity-0", "translate-y-[-50px]");
    
            setTimeout(function () {
                alertBox.classList.add("hidden");
                alertBox.classList.remove("flex");
            }, 300); 
        }, 2000);
    }

    function validateName() {
        const name = nameInput.value.trim();
        const nameParts = name.split(" ");

        if (nameParts.length < 2 || nameParts[0].length < 3 || nameParts[1].length < 3) {
            showError(nameInput, nameError, lang === 'ar' ? "الاسم يجب أن يتكون من جزئين على الأقل وطول كل جزء يجب أن يكون 3 حروف أو أكثر." : "Name should consist of at least two parts, and each part should have a minimum of 3 characters.");
        } else {
            hideError(nameInput, nameError);
        }

        if (!nameRegex.test(name)) {
            showError(nameInput, nameAlphabetError, lang === 'ar' ? "الاسم يجب أن يحتوي على حروف فقط." : "Name should contain only letters.");
        } else {
            hideError(nameInput, nameAlphabetError);
        }
    }

    function validateEmail() {
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, emailError, lang === 'ar' ? "البريد الإلكتروني غير صالح." : "Invalid email.");
        } else {
            hideError(emailInput, emailError);
        }
    }

    function validateAge() {
        const age = ageInput.value.trim();
        if (age === "" || isNaN(age) || age < 10 || age > 100) {
            showError(ageInput, ageError, lang === 'ar' ? "العمر يجب أن يكون بين 10 و 100." : "Age must be between 10 and 100.");
        } else {
            hideError(ageInput, ageError);
        }
    }

    function validateMessage() {
        if (messageInput.value.trim() === "") {
            showError(messageInput, messageError, lang === 'ar' ? "يرجى إدخال رسالة." : "Please enter a message.");
        } else {
            hideError(messageInput, messageError);
        }
    }

    function validateForm() {
        validateName();
        validateEmail();
        validateAge();
        validateMessage();

        return (
            !nameError.classList.contains("block") &&
            !nameAlphabetError.classList.contains("block") &&
            !emailError.classList.contains("block") &&
            !ageError.classList.contains("block") &&
            !messageError.classList.contains("block")
        );
    }

    function showError(input, errorMessage, message) {
        errorMessage.classList.remove("hidden");
        errorMessage.classList.add("block");
        errorMessage.textContent = message;
        input.classList.remove("border-gray-300", "border-green-500");
        input.classList.add("border-red-500");
    }

    function hideError(input, errorMessage) {
        errorMessage.classList.add("hidden");
        errorMessage.classList.remove("block");
        input.classList.remove("border-gray-300", "border-red-500");
        input.classList.add("border-green-500");
    }

    function resetBorders() {
        nameInput.classList.remove("border-red-500", "border-green-500");
        emailInput.classList.remove("border-red-500", "border-green-500");
        ageInput.classList.remove("border-red-500", "border-green-500");
        messageInput.classList.remove("border-red-500", "border-green-500");
    }
});
