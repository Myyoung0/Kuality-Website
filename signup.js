document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return;
    }

    if (password.length < 7) {
        errorMessage.textContent = "Password must be at least 7 characters";
        return;
    }

    alert("Sign-up successful! Username: " + username);
    errorMessage.textContent = "";
});