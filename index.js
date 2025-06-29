const form = document.getElementById('fitnessForm');
const summaryEl = document.getElementById('summary');
const section = document.getElementById('memberSection');
const baseUrl = 'http://localhost:3000/members';

// Fetch and display all members
fetch(baseUrl)
  .then(res => res.json())
  .then(data => {
    data.forEach(member => displayMember(member));
  })
  .catch(err => console.error('Error:', err));

function displayMember(member) {
  const div = document.createElement('div');
  div.className = 'member';
  div.innerHTML = `
    <h3>${member.first_name} ${member.last_name}</h3>
    <p><strong>Email:</strong> ${member.email}</p>
    <p><strong>Gender:</strong> ${member.gender}</p>
    <p><strong>Contact:</strong> ${member.contact}</p>
  `;
  section.appendChild(div);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nameParts = document.getElementById('fullName').value.trim().split(' ');
  const first_name = nameParts[0];
  const last_name = nameParts.slice(1).join(' ') || '';

  const newMember = {
    first_name: first_name,
    last_name: last_name,
    email: `${first_name.toLowerCase()}@fitclub.com`,
    gender: "Unspecified",
    contact: "000000000"
  };

  // POST to JSON server
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMember)
  })
  .then(res => res.json())
  .then(addedMember => {
    displayMember(addedMember);
  })
  .catch(err => console.error('Error adding member:', err));

  // Display fitness summary
  summaryEl.innerHTML = `
    <h2>Fitness Summary</h2>
    <p><strong>Name:</strong> ${document.getElementById('fullName').value}</p>
    <p><strong>Steps:</strong> ${document.getElementById('steps').value}</p>
    <p><strong>Calories:</strong> ${document.getElementById('calories').value}</p>
    <p><strong>Sleep:</strong> ${document.getElementById('sleep').value} hours</p>
    <p><strong>Date:</strong> ${document.getElementById('workoutDate').value}</p>
    <p><strong>Workout:</strong> ${document.getElementById('workoutType').value}</p>
  `;
  summaryEl.style.display = 'block';

  // Optionally reset form
  form.reset();
});
