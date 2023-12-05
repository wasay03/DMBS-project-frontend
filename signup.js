function signup() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var maritalStatus = document.getElementById("maritalStatus").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var emergencyFname = document.getElementById("emergencyFname").value;
    var emergencyLname = document.getElementById("emergencyLname").value;
    var relationship = document.getElementById("relationship").value;
    var emergencyPhone = document.getElementById("emergencyPhone").value;

 

    // Mock signup logic (replace with real signup logic)
    if (fname && lname && gender && dob && phone && address && city && state && maritalStatus &&
        password && confirmPassword && password === confirmPassword &&
        emergencyFname && emergencyLname && relationship && emergencyPhone) {
        alert("Signup successful!");
        // You can redirect or perform other actions after successful signup
    } else {
        alert("Please fill in all fields and ensure passwords match.");
    }
    // Make a POST request to the backend
    //Replace 'http://localhost:8080' with 
    //the actual URL of your Spring Boot backend
    fetch('http://localhost:8080/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}