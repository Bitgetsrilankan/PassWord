function generatePassword() {
    const length = document.getElementById("length").value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password-output").textContent = password;
    document.getElementById("copy-btn").style.display = "block"; // Show copy button
}

function copyPassword() {
    const password = document.getElementById("password-output").textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(() => {
        alert("Failed to copy password. Please try again.");
    });
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
}

function resetPassword() {
    document.getElementById("password-output").textContent = "";
    document.getElementById("copy-btn").style.display = "none"; // Hide copy button
    document.getElementById("length").value = 12; // Reset password length to default
}
