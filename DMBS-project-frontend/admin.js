// admin.js

// Dummy data (replace with actual API calls)
const patientsData = [
    { "id": 1, "name": "Patient A", "age": 25 },
    { "id": 2, "name": "Patient B", "age": 30 },
    { "id": 2, "name": "Patient B", "age": 30 },
    { "id": 2, "name": "Patient B", "age": 30 },
    { "id": 2, "name": "Patient B", "age": 30 },
    { "id": 2, "name": "Patient B", "age": 30 },
    { "id": 2, "name": "Patient B", "age": 30 },

    // More dummy data...
];

const doctorsData = [
    { "id": 101, "name": "Dr. Smith", "specialization": "Cardiologist" },
    { "id": 102, "name": "Dr. Johnson", "specialization": "Dermatologist" },
    { "id": 102, "name": "Dr. Johnson", "specialization": "Dermatologist" },
    { "id": 102, "name": "Dr. Johnson", "specialization": "Dermatologist" },
    { "id": 102, "name": "Dr. Johnson", "specialization": "Dermatologist" },

    // More dummy data...
];

// Function to render patients
function renderPatients() {
    const patientList = document.getElementById('patientList');

    patientsData.forEach(patient => {
        const patientItem = document.createElement('li');
        patientItem.classList.add('patient');

        patientItem.innerHTML = `
            <p><strong>ID:</strong> ${patient.id}</p>
            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Age:</strong> ${patient.age}</p>
            <span class="deleteBtn" onclick="deletePatient(${patient.id})">Delete</span>
        `;

        patientList.appendChild(patientItem);
    });
}

// Function to render doctors
function renderDoctors() {
    const doctorList = document.getElementById('doctorList');

    doctorsData.forEach(doctor => {
        const doctorItem = document.createElement('li');
        doctorItem.classList.add('doctor');

        doctorItem.innerHTML = `
            <p><strong>ID:</strong> ${doctor.id}</p>
            <p><strong>Name:</strong> ${doctor.name}</p>
            <p><strong>Specialization:</strong> ${doctor.specialization}</p>
            <span class="deleteBtn" onclick="deleteDoctor(${doctor.id})">Delete</span>
        `;

        doctorList.appendChild(doctorItem);
    });
}

// Function to delete a patient
function deletePatient(patientId) {
    // Replace this with actual API call to delete a patient
    console.log(`Deleting patient with ID ${patientId}`);
}

// Function to delete a doctor
function deleteDoctor(doctorId) {
    // Replace this with actual API call to delete a doctor
    console.log(`Deleting doctor with ID ${doctorId}`);
}

// Render data on page load
renderPatients();
renderDoctors();
