function addname(){

    var nameInput = document.getElementById("cname");
    var name = nameInput.ariaValueMax;

    if (name.trim() !==""){
        var table document.getElementById(maintable);

        var row = table.insertRow();
        var cell = row.insertCell(0);
        var text = document.createTextnode(name);
        cell.appendChild(text);

        nameInput.value ="";
    }else {
        alert("Please enter a name")
    }

}
/////////////////////

  // Load data from local storage
  window.addEventListener('load', function() {
    var savedData = localStorage.getItem('userData');
    if (savedData) {
      document.getElementById('userTableBody').innerHTML = savedData;
    }
  });

  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function deleteUser(row) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    document.getElementById("userTable").deleteRow(rowIndex);
    saveData();
  }

  function toggleColor(cell) {
    if (cell.style.backgroundColor === "darkred") {
      cell.style.backgroundColor = "darkgreen";
    } else {
      cell.style.backgroundColor = "darkred";
    }
    saveData();
  }

  function resetColors() {
    var cells = document.querySelectorAll("#userTable tbody td:nth-child(n+5)");
    cells.forEach(function(cell) {
      cell.style.backgroundColor = "darkred";
    });
    saveData();
  }

  function saveData() {
    var userData = document.getElementById('userTableBody').innerHTML;
    localStorage.setItem('userData', userData);
  }

  document.getElementById("popupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  // Retrieve the class information
  var classInfo = document.getElementById("class").value;
  var companions = document.getElementById("companions").value;

  // Map class values to specific HTML filenames
  var classToFilename = {
    "Bounty Hunter": "./bountyhunter.html",
    "Imperial Agent": "./imperialagent.html",
    "Jedi Consular": "./jedic.html",
    "Jedi Knight": "./jedik.html",
    "Sith Inquisitor": "./Sithinq.html",
    "Sith Warrior": "./sithwarr.html",
    "Smuggler": "./smuggler.html",
    "Trooper": "./trooper.html"
  };
  

  // Determine the filename based on the selected class
  var filename = classToFilename[classInfo];

  // Add user details to table
  var tableBody = document.getElementById("userTableBody");
  var newRow = tableBody.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  cell1.innerHTML = name;
  // Update this line to create a hyperlink with the specific HTML file for the class
  cell2.innerHTML = `<a href="${filename}" target="_blank">${classInfo}</a>`;
  cell3.innerHTML = companions;
  cell4.innerHTML = "<button onclick='deleteUser(this)'class='intable'><div class='text'>Delete</div></button>";
  cell5.innerHTML = "<button onclick='toggleColor(this.parentNode)'class='intable'><div class='text'>Check/uncheck</div></button>";
  cell6.innerHTML = "<button onclick='toggleColor(this.parentNode)'class='intable'><div class='text'>Check/uncheck</div></button>";
  cell7.innerHTML = "<button onclick='toggleColor(this.parentNode)'class='intable'><div class='text'>Check/uncheck</div></button>";

  // Set default color for Nefra, Dash, and Conquest cells to red
  toggleColor(cell5);
  toggleColor(cell6);
  toggleColor(cell7);

  // Close the popup
  document.getElementById("popup").style.display = "none";

  // Reset form fields
  document.getElementById("popupForm").reset();

  // Save data to local storage
  saveData();
});
