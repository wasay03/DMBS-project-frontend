// add_doctor.js

function addDoctor() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const address = document.getElementById('address').value;
    const contact_no = document.getElementById('contact_no').value;
    const specialization = document.getElementById('specialization').value;

    // Perform validation if needed

    // Create a doctor object with the provided data
    const newDoctor = {
        first_name: first_name,
        last_name: last_name,
        address: address,
        contact_no: contact_no,
        specialization: specialization,
    };

    // Send the newDoctor object to your backend for processing and storage
    // You can use AJAX or fetch API to send the data to your server
    // Example:
    /*
    fetch('your_backend_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDoctor),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */

    // After successfully adding a doctor, you can redirect to the admin dashboard or perform other actions
    alert('Doctor added successfully!');
    // Redirect to the admin dashboard or any other page
    window.location.href = 'admin-dashboard.html';
}
