// Function to validate Firstname and Lastname
let Myears;
function validateName() {
  const fullnameInput = document.getElementById("fullname");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
  
}
// Function to validate Student ID
function validateStudentID() {
  const studentIDInput = document.getElementById("studentID");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");
  const B = document.getElementById("studentID").value;
  const A = parseInt(B, 10);
  let C = A/100000000;
  console.log(A);
  console.log(C);
  Myears = Math.floor(C);
  console.log(Myears);
  document.getElementById("Myear").innerHTML="25"+Myears;
  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}
// Function to validate University Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^[a-zA-Z]+\.[a-zA-Z]{3}@dome\.tu\.ac\.th$/;  
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent =
      "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}
function TitleCheck(){
  const Input = document.getElementById("workTitle");
  const TitlePattern = /^[a-zA-Z]{3,}$/;
  const errorElement = document.getElementById("workTitleerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else if(!TitlePattern.test(Input.value)){
      errorElement.innerHTML = "Title must have more than 2 letter";
  }
      else {
      errorElement.innerHTML = "";
  }
  return true;
}

function ActivityCheck(){
  const Input = document.getElementById("activityType");
  const errorElement = document.getElementById("activityTypeerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function AcademicYearCheck(){
  const Input = document.getElementById("academicYear");
  const errorElement = document.getElementById("academicYearerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function semesterCheck(){
  const Input = document.getElementById("semester");
  const errorElement = document.getElementById("semestererror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function startDateCheck(){
  const Input = document.getElementById("startDate");
  const errorElement = document.getElementById("startDateerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function endDateCheck(){
  const Input = document.getElementById("endDate");
  const errorElement = document.getElementById("endDateerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function locationCheck(){
  const Input = document.getElementById("location");
  const errorElement = document.getElementById("locationerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
}
function descriptionCheck(){
  const Input = document.getElementById("description");
  const errorElement = document.getElementById("descriptionerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
} 
function nameTitleCheck(){
  const Input = document.getElementById("nameTitle");
  const errorElement = document.getElementById("nameTitleError");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      return false;
  } else {
      errorElement.innerHTML = "";
  }
  return true;
} 
function Output(){

  const Name = document.createElement("p");
  const fullnameInput = document.getElementById("fullname").value;
  Name.textContent = fullnameInput;
  document.getElementById("outputContainer").appendChild(Name);
}
  // Function to validate form inputs on user input
  function validateFormOnInput() {
    validateName();
    validateStudentID();
    validateEmail();
    TitleCheck();
    ActivityCheck();
    AcademicYearCheck();
    semesterCheck();
    startDateCheck();
    endDateCheck();
    locationCheck();
    descriptionCheck();
    nameTitleCheck();
  }
  function showConfirmation() {
    // Display a confirmation dialog and store the result
    const userConfirmed = window.confirm("Do you want to proceed?");

    // Check the user's choice
    if (userConfirmed) {
        alert("You clicked OK! Proceeding...");
    } else {
        alert("You clicked Cancel! Action canceled.");
    }
}  
async function submitForm(event) {
  event.preventDefault();

    // Validate form inputs before submission
    if (!validateName() || !validateStudentID() || !validateEmail() || !TitleCheck() || !ActivityCheck() || !AcademicYearCheck() ||
!semesterCheck() || !startDateCheck() || !endDateCheck()|| !locationCheck()|| !descriptionCheck()||!nameTitleCheck) {
      return;
    }
  const startDateInput = document.getElementById("startDate").value;
  const endDateInput = document.getElementById("endDate").value;
  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  if (endDate <= startDate) {
    alert("End datetime should be after the start datetime.");
    return;
  }
  
    //console.log(data);
    //alert(JSON.stringify(data));
    const fullnameInput = document.getElementById("fullname");
    document.getElementById("nameOutput").innerHTML = "Name: " + fullnameInput.value;
    Output();
    showConfirmation();
    clearForm();
} 

  // Event listener for form submission
  document.getElementById("myForm").addEventListener("submit", submitForm);
  
  // Event listeners for input validation on user input
  document.getElementById("fullname").addEventListener("input", validateName);
  document.getElementById("studentID").addEventListener("input", validateStudentID);
  document.getElementById("email").addEventListener("input", validateEmail);
  document.getElementById("workTitle").addEventListener("input", TitleCheck);
  document.getElementById("activityType").addEventListener("input", ActivityCheck);
  document.getElementById("academicYear").addEventListener("input", AcademicYearCheck);
  document.getElementById("semester").addEventListener("input", semesterCheck);
  document.getElementById("startDate").addEventListener("input", startDateCheck);
  document.getElementById("endDate").addEventListener("input", endDateCheck);
  document.getElementById("location").addEventListener("input", locationCheck);
  document.getElementById("description").addEventListener("input", descriptionCheck);
  document.getElementById("nameTitle").addEventListener("input", nameTitleCheck);