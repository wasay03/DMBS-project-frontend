function bookAppointment() {
    // Get selected doctor and time slot
    const selectedDoctor = document.getElementById('Doctor Name').value;
    const selectedTimeSlot = document.getElementById('time slot').value;

    // Create a data object to send to the backend
    const data = {
        doctorId: selectedDoctor,
        timeSlot: selectedTimeSlot
    };

    // Replace the URL with your backend API endpoint for checking availability
    const checkAvailabilityUrl = 'https://example.com/checkAvailability';

    // Send a POST request to the backend to check availability
    fetch(checkAvailabilityUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.available) {
            // The time slot is available
            alert('Appointment booked, sent for approval');
        } else {
            // The time slot is not available
            alert('Time slot isn\'t free, please pick another');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while checking availability. Please try again.');
    });
}
