document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    
    alert("Login successful! Username: " + username);
    errorMessage.textContent = "";
    
    if (password.length < 7) {
        errorMessage.textContent = " ";
        return;
    } 
});

document.getElementById("signupButton").addEventListener("click", function() {
    window.location.href = "signup.html"; 
});