// pd.js

// Dummy data (replace with actual API calls)
const appointmentsData = [
    { id: 1, time: '2023-12-10 10:00 AM', doctorId: 101, doctorName: 'Dr. Smith', status: 'Confirmed' },
    { id: 2, time: '2023-12-15 02:30 PM', doctorId: 102, doctorName: 'Dr. Johnson', status: 'Pending' },
    { id: 3, time: '2023-12-20 09:00 AM', doctorId: 103, doctorName: 'Dr. Brown', status: 'Cancelled' }, // New dummy data
];

const prescriptionsData = [
    { id: 1, medication: 'Medicine A', dosage: '1 tablet daily' },
    { id: 2, medication: 'Medicine B', dosage: '2 tablets after meals' },
    { id: 3, medication: 'Medicine C', dosage: '3 tablets at bedtime' }, // New dummy data
];

// Function to render appointments
function renderAppointments() {
    const recentAppointmentsContainer = document.getElementById('recentAppointments');
    const allAppointmentsContainer = document.getElementById('allAppointments');

    // Render only the most recent appointment by default
    const mostRecentAppointment = appointmentsData[appointmentsData.length - 1];
    const appointmentDiv = document.createElement('div');
    appointmentDiv.classList.add('appointment');

    appointmentDiv.innerHTML = `
        <p><strong>Time:</strong> ${mostRecentAppointment.time}</p>
        <p><strong>Doctor:</strong> ${mostRecentAppointment.doctorName} (ID: ${mostRecentAppointment.doctorId})</p>
        <p><strong>Status:</strong> ${mostRecentAppointment.status}</p>
    `;

    recentAppointmentsContainer.appendChild(appointmentDiv);

    // Clone and render all appointments
    appointmentsData.forEach(appointment => {
        const allAppointmentDiv = document.createElement('div');
        allAppointmentDiv.classList.add('appointment');

        allAppointmentDiv.innerHTML = `
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Doctor:</strong> ${appointment.doctorName} (ID: ${appointment.doctorId})</p>
            <p><strong>Status:</strong> ${appointment.status}</p>
        `;

        allAppointmentsContainer.appendChild(allAppointmentDiv);
    });

    // Initially hide the "all" appointments container
    allAppointmentsContainer.style.display = 'none';
}

// Function to render prescriptions
function renderPrescriptions() {
    const recentPrescriptionsContainer = document.getElementById('recentPrescriptions');
    const allPrescriptionsContainer = document.getElementById('allPrescriptions');

    // Render only the most recent prescription by default
    const mostRecentPrescription = prescriptionsData[prescriptionsData.length - 1];
    const prescriptionDiv = document.createElement('div');
    prescriptionDiv.classList.add('prescription');

    prescriptionDiv.innerHTML = `
        <p><strong>Medication:</strong> ${mostRecentPrescription.medication}</p>
        <p><strong>Dosage:</strong> ${mostRecentPrescription.dosage}</p>
    `;

    recentPrescriptionsContainer.appendChild(prescriptionDiv);

    // Clone and render all prescriptions
    prescriptionsData.forEach(prescription => {
        const allPrescriptionDiv = document.createElement('div');
        allPrescriptionDiv.classList.add('prescription');

        allPrescriptionDiv.innerHTML = `
            <p><strong>Medication:</strong> ${prescription.medication}</p>
            <p><strong>Dosage:</strong> ${prescription.dosage}</p>
        `;

        allPrescriptionsContainer.appendChild(allPrescriptionDiv);
    });

    // Initially hide the "all" prescriptions container
    allPrescriptionsContainer.style.display = 'none';
}

// Function to toggle between recent and all appointments
function toggleAppointmentsView() {
    const recentAppointmentsContainer = document.getElementById('recentAppointments');
    const allAppointmentsContainer = document.getElementById('allAppointments');

    if (recentAppointmentsContainer.style.display === 'none') {
        recentAppointmentsContainer.style.display = 'block';
        allAppointmentsContainer.style.display = 'none';
    } else {
        recentAppointmentsContainer.style.display = 'none';
        allAppointmentsContainer.style.display = 'block';
    }
}

// Function to toggle between recent and all prescriptions
function togglePrescriptionsView() {
    const recentPrescriptionsContainer = document.getElementById('recentPrescriptions');
    const allPrescriptionsContainer = document.getElementById('allPrescriptions');

    if (recentPrescriptionsContainer.style.display === 'none') {
        recentPrescriptionsContainer.style.display = 'block';
        allPrescriptionsContainer.style.display = 'none';
    } else {
        recentPrescriptionsContainer.style.display = 'none';
        allPrescriptionsContainer.style.display = 'block';
    }
}

// Render data on page load
renderAppointments();
renderPrescriptions();
