// doctor.js

// Dummy data (replace with actual API calls)
const doctorData = {
    id: 101,
    name: 'Dr. Smith',
    specialization: 'Cardiologist',
};

const patientsData = [
    { id: 1, name: 'John Doe', gender: 'male' },
    { id: 2, name: 'Jane Doe', gender: 'female' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' },
    { id: 3, name: 'Bob Johnson', gender: 'male' }

    // Add more patient data as needed
];
const appointmentsData = [
    { id: 1, patientId: 101, date: '2023-12-10', time: '10:00 AM' },
    { id: 2, patientId: 102, date: '2023-12-12', time: '02:30 PM' },
    { id: 3, patientId: 103, date: '2023-12-15', time: '11:45 AM' },
    // Add more appointment data as needed
  ];

// Function to render doctor information
function renderDoctorInfo() {
    document.getElementById('doctorId').textContent = doctorData.id;
    document.getElementById('doctorName').textContent = doctorData.name;
    document.getElementById('specialization').textContent = doctorData.specialization;
}
// Function to render appointments
function renderAppointments() {
    const appointmentList = document.getElementById('appointmentList');

    appointmentsData.forEach(appointment => {
        const appointmentItem = document.createElement('li');
        appointmentItem.classList.add('appointment');

        appointmentItem.innerHTML = `
            <p><strong>ID:</strong> ${appointment.id}</p>
            <p><strong>Patient ID:</strong> ${appointment.patientId}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <span class="deleteBtn" onclick="deleteAppointment(${appointment.id})">Delete</span>
        `;

        appointmentList.appendChild(appointmentItem);
    });
}

// Dummy function for deleting an appointment
function deleteAppointment(appointmentId) {
    // Implement the logic to delete the appointment with the given ID
    console.log(`Deleting appointment with ID ${appointmentId}`);
}

function renderPatients() {
    const patientsContainer = document.getElementById('patientList');
    const viewAllButton = document.getElementById('viewAllPatients');

    // Render only a limited number of patients by default
    const limitedPatients = patientsData;

    limitedPatients.forEach(patient => {
        const patientItem = document.createElement('li');
        patientItem.textContent = `${patient.id}: ${patient.name}: ${patient.gender}`;

        // Add a space
        patientItem.appendChild(document.createTextNode('  '));

        // Add "View Prescriptions" link
        const prescriptionsLink = document.createElement('a');
        prescriptionsLink.href = `doctorviewPrescriptions.html?patientId=${patient.id},?doctorId=${doctorData.id}`;
        prescriptionsLink.textContent = 'View Prescriptions';
        prescriptionsLink.target = '_blank'; // Open link in a new tab
        patientItem.appendChild(prescriptionsLink);

        // Add a space
        patientItem.appendChild(document.createTextNode(' '));

        // Add "View Appointments" link
        const appointmentsLink = document.createElement('a');
        appointmentsLink.href = `doctorviewAppointments.html?patientId=${patient.id},?doctorId=${doctorData.id}`;
        appointmentsLink.textContent = 'View Appointments';
        appointmentsLink.target = '_blank'; // Open link in a new tab
        patientItem.appendChild(appointmentsLink);

        // Add line breaks for spacing
        patientItem.appendChild(document.createElement('br'));
        patientItem.appendChild(document.createElement('br'));

        patientsContainer.appendChild(patientItem);
    });

    // Initially hide the "all" patients list
    patientsContainer.style.display = 'none';

    try{// Add an event listener to the "View All" button
viewAllButton.addEventListener('click', function () {
    console.log('Button clicked!'); // Check if the click event is being captured

    // Toggle visibility of the "all" patients list
    if (patientsContainer.style.display === 'none' || patientsContainer.style.display === '') {
        patientsContainer.style.display = 'block';
    } else {
        patientsContainer.style.display = 'none';
    }
})}
catch(error){};

}




// Function to toggle between partial and all patients view
function togglePatientsView() {
    const patientsContainer = document.getElementById('patientList');

    if (patientsContainer.style.display === 'none') {
        patientsContainer.style.display = 'block';
    } else {
        patientsContainer.style.display = 'none';
    }
}


// Render data on page load
renderDoctorInfo();
renderPatients();
renderAppointments();