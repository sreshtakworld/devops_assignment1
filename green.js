const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // 1. Username validation (at least 5 characters)
    if (username.length < 5) {
        alert("Error: Username must be at least 5 characters long.");
        return;
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Error: Please enter a valid email address (e.g., abc@domain.com).");
        return;
    }

    // 3. Password validation (more than 12 characters and at least one special symbol)
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length <= 12) {
        alert("Error: Password must be longer than 12 characters.");
        return;
    }

    if (!specialCharRegex.test(password)) {
        alert("Error: Password must contain at least one special symbol.");
        return;
    }

    // Success alert when all validations pass
    alert("Success: All validations passed! Registration successful.");
    form.reset();
});