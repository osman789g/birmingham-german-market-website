// Function to validate login credentials
function validateLogin(username, password) {
    return username === 'user' && password === 'password';
}

// Sign-up form event listener
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const signupMessage = document.getElementById('signupMessage');

    // Validation check: Passwords must match
    if (newPassword !== confirmPassword) {
        signupMessage.className = 'alert alert-danger';
        signupMessage.textContent = 'Passwords do not match!';
        signupMessage.style.display = 'block';
    } else {
        signupMessage.className = 'alert alert-success';
        signupMessage.textContent = 'Account created successfully! Redirecting to login...';
        signupMessage.style.display = 'block';
        // Redirect to dashboard after a short delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
});

// Login form event listener
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Test data for login
    if (validateLogin(username, password)) {
        message.className = 'alert alert-success';
        message.textContent = 'Login successful! Redirecting...';
        message.style.display = 'block';
        // Redirect to dashboard after a short delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        message.className = 'alert alert-danger';
        message.textContent = 'Invalid username or password!';
        message.style.display = 'block';
    }
});
