function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    // Mock authentication logic (replace with real authentication)
    if (username && password && role) {
        alert("Login successful! Role: " + role);
        // You can redirect or perform other actions based on the selected role
    } else {
        alert("Please fill in all fields.");
    }
}