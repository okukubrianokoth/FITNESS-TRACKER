const form = document.getElementById('fitnessForm');
const summaryEl = document.getElementById('summary');
const baseUrl = 'http://127.0.0.1:3000/members';


fetch(baseUrl)
  .then(response => response.json())
  .then(data => data.forEach(element => {
    console.log(element)
  }))
  .catch(error => console.error('Error fetching members:', error));


function displayMember(member){
  let name = member.fir


  let section = document.getElementById('memberSection');
  let div = document.createElement('div');
  div.className = 'member';
  div.innerHTML = `

  `;}

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload :contentReference[oaicite:1]{index=1}

  const data = {
    name: document.getElementById('fullName').value,
    steps: document.getElementById('steps').value,
    calories: document.getElementById('calories').value,
    sleep: document.getElementById('sleep').value,
    date: document.getElementById('workoutDate').value,
    type: document.getElementById('workoutType').value
  };

  summaryEl.innerHTML = `
    <h2>Fitness Summary</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Steps:</strong> ${data.steps}</p>
    <p><strong>Calories:</strong> ${data.calories}</p>
    <p><strong>Sleep:</strong> ${data.sleep} hours</p>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Workout:</strong> ${data.type}</p>
  `;
  summaryEl.style.display = 'block';
});
