let editIndex 
function refreshPage() {
  location.reload();
}
function savePeriodData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const bloodColor = document.getElementById("bloodColor").value;
  if (!name || !email || !startDate || !endDate || !bloodColor)
    return alert("Please fill in all fields.");
  const periodData = {
    name: name,
    email: email,
    data: [
      {
        startDate: startDate,
        endDate: endDate,
        bloodColor: bloodColor,
      },
    ],
  };

  let savedData = JSON.parse(localStorage.getItem("periodData")) || [];
  savedData.push(periodData);
  localStorage.setItem("periodData", JSON.stringify(savedData));

  displaySavedData();
  refreshPage();
}

function displaySavedData() {
  const savedData = JSON.parse(localStorage.getItem("periodData")) || [];
  const savedDataContainer = document.getElementById("savedData");
console.log(savedData);
  savedDataContainer.innerHTML = "<h3>Saved Period Data:</h3>";

  savedData.forEach((data, i) => {
    data.data.forEach((res) => {
    savedDataContainer.innerHTML += `
    <p>
<strong>Name: ${data.name}</strong><br>
      Email: ${data.email}<br>
      Start Date: ${res.startDate}<br>
      End Date: ${res.endDate}<br>
      Blood Color: ${res.bloodColor}<br>
      <button id ="deleteButton" onclick="deleteData(${i})">Delete</button>
      <button id = "editButton" onclick="editData(${i})">Edit</button>
    </p>`;
    })
  });
}

function deleteAllData() {
localStorage.removeItem("periodData");
  displaySavedData();
}

function deleteData(index) {
  let savedData = JSON.parse(localStorage.getItem("periodData")) || [];
  savedData.splice(index, 1); // Remove the element at the specified index
  localStorage.setItem("periodData", JSON.stringify(savedData));
  displaySavedData();
}

function searchData() {
  // Implement search functionality as needed
  alert("Search functionality will be implemented here.");
}
function editData(index) {
      // Populate the form with data for editing
  let periodData = JSON.parse(localStorage.getItem("periodData")) || [];
      const data = periodData[index];
      document.getElementById('name').value = data.name;
      document.getElementById('email').value = data.email;
      document.getElementById('startDate').value = data.data[0].startDate;
      document.getElementById('endDate').value = data.data[0].endDate;
      document.getElementById('bloodColor').value = data.data[0].bloodColor;

      // Set the editIndex to the index of the entry being edited
      let savedData = JSON.parse(localStorage.getItem("periodData")) || [];
  savedData.splice(index, 1); // Remove the element at the specified index
  localStorage.setItem("periodData", JSON.stringify(savedData));
      // show save and cancel buttons after clicking edit button instead of edit and delete button 
      
  displaySavedData()
    }

    
// Display initial saved data
displaySavedData();
