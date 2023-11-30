// Function to validate Firstname and Lastname
let Myears;
function validateName() {
  const fullnameInput = document.getElementById("fullname");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");
  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    fullnameInput.classList.add("highlight");
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
    fullnameInput.classList.remove("highlight");
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
  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    studentIDInput.classList.add("highlight");
    document.getElementById("Myear").innerHTML="";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
    document.getElementById("Myear").innerHTML="25"+Myears;
    studentIDInput.classList.remove("highlight");
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
      emailInput.classList.add("highlight");
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
    emailInput.classList.remove("highlight");
  }
  return true;
}

function TitleCheck(){
  const Input = document.getElementById("workTitle");
  const TitlePattern = /^[a-zA-Z ]{3,}$/;
  const errorElement = document.getElementById("workTitleerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else if(!TitlePattern.test(Input.value)){
      errorElement.innerHTML = "Title must have more than 2 letter";
      Input.classList.add("highlight");
  }
      else {
        Input.classList.remove("highlight");
      errorElement.innerHTML = "";
  }
  return true;
}

function ActivityCheck(){
  const Input = document.getElementById("activityType");
  const errorElement = document.getElementById("activityTypeerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
  }
  return true;
}

function AcademicYearCheck(){
  const Input = document.getElementById("academicYear");
  const errorElement = document.getElementById("academicYearerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
  }
  return true;
}

function semesterCheck(){
  const Input = document.getElementById("semester");
  const errorElement = document.getElementById("semestererror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
  }
  return true;
}

function startDateCheck(){
  const Input = document.getElementById("startDate");
  const errorElement = document.getElementById("startDateerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
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
  const startDateInput = document.getElementById("startDate").value;
  const endDateInput = document.getElementById("endDate").value;
  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  if (endDate <= startDate){
        errorElement.innerHTML = "End datetime should be after the start datetime.";
        return false;
  }else {
        errorElement.innerHTML = "";
  }

  return true;
}

function locationCheck(){
  const Input = document.getElementById("location");
  const errorElement = document.getElementById("locationerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
  }
  return true;
}
function descriptionCheck(){
  const Input = document.getElementById("description");
  const errorElement = document.getElementById("descriptionerror");
  if (Input.value == "") {
      errorElement.innerHTML = "Required.";
      Input.classList.add("highlight");
      return false;
  } else {
      errorElement.innerHTML = "";
      Input.classList.remove("highlight");
  }
  return true;
} 

function Output(){
  const myDiv = document.createElement("div");
  const Name = document.createElement("p");
  const Acti = document.createElement("p");
  const ID = document.createElement("p");
  const Email = document.createElement("p");
  const Actyp = document.createElement("p");
  const Acad = document.createElement("p");
  const Semis = document.createElement("p");
  const DataS = document.createElement("p");
  const DateE = document.createElement("p");
  const Loca = document.createElement("p");
  const Des = document.createElement("p");

  const fullnameInput = document.getElementById("fullname").value;
  const ActiInput = document.getElementById("workTitle").value;
  const IDInput = document.getElementById("studentID").value;
  const EmailInput = document.getElementById("email").value;
  const ActypInput = document.getElementById("activityType").value;
  const AcadInput = document.getElementById("academicYear").value;
  const SemisInput = document.getElementById("semester").value;
  const DataSInput = document.getElementById("startDate").value;
  const DateEInput = document.getElementById("endDate").value;
  const LocaInput = document.getElementById("location").value;
  const DesInput = document.getElementById("description").value;

  Acti.textContent=ActiInput;
  Acti.className="rechead";

  Name.textContent = "Name : " + fullnameInput;
  ID.textContent = "Student ID : " + IDInput;
  Email.textContent = "Email : " + EmailInput;
  Actyp.textContent = "Activity Type : " +ActypInput;
  Acad.textContent = "Academic Year : " +AcadInput;
  Semis.textContent = "Semeter : " +SemisInput;
  DataS.textContent = "Start date and time : " +DataSInput;
  DateE.textContent = "End date and time : " +DateEInput;
  Loca.textContent = "Location : " +LocaInput;
  Des.textContent = "Description : " +DesInput;

  myDiv.className="TestRec01";
  myDiv.appendChild(Acti);
  myDiv.appendChild(Name);
  myDiv.appendChild(ID);
  myDiv.appendChild(Email);
  myDiv.appendChild(Actyp);
  myDiv.appendChild(Acad);
  myDiv.appendChild(Semis);
  myDiv.appendChild(DataS);
  myDiv.appendChild(DateE);
  myDiv.appendChild(Loca);
  myDiv.appendChild(Des);
  document.getElementById("outputContainer").appendChild(myDiv);
	clearForm();
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
  } 
  
async function submitForm(event) {
  event.preventDefault();

    // Validate form inputs before submission
    if (!validateName() || !validateStudentID() || !validateEmail() || !TitleCheck() || !ActivityCheck() || !AcademicYearCheck() ||
!semesterCheck() || !startDateCheck() || !endDateCheck()|| !locationCheck()|| !descriptionCheck()) {
      showCustomAlert();
      return;
    }
  /*const startDateInput = document.getElementById("startDate").value;
  const endDateInput = document.getElementById("endDate").value;
  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);*/

  /*if (endDate <= startDate) {
    alert("End datetime should be after the start datetime.");
    return;
  }*/
  
    //console.log(data);
    //alert(JSON.stringify(data));
    //showConfirmation();
	showConfirm();
    
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
  //document.getElementById("nameTitle").addEventListener("input", nameTitleCheck);