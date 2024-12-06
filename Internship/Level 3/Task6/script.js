document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Function to show error message
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        input.style.borderColor = "red";
    };

    // Function to show success
    const showSuccess = (input) => {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
        input.style.borderColor = "green";
    };

    // Validate username
    const validateUsername = () => {
        const username = usernameInput.value.trim();
        if (username === "") {
            showError(usernameInput, "Username is required.");
            return false;
        } else {
            showSuccess(usernameInput);
            return true;
        }
    };

    // Validate email
    const validateEmail = () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            showError(emailInput, "Email is required.");
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, "Please enter a valid email address.");
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    };

    // Validate password
    const validatePassword = () => {
        const password = passwordInput.value.trim();
        if (password === "") {
            showError(passwordInput, "Password is required.");
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters.");
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    };

    // Add event listeners
    usernameInput.addEventListener("input", validateUsername);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            alert("Form submitted successfully!");
            form.reset(); // Clear form fields
        }
    });
});