const config = {
  backendUrl: "http://localhost:8000/", // Default backend URL
};
const port = 8000;

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
const facultyValues = [0,1, 2, 3, 4, 5, 3,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 26, 27, 64];
const facultyTexts = [
    "สำนักบัณฑิตอาสาสมัคร",
    "คณะนิติศาสตร์",
    "คณะพาณิชยศาสตร์และการบัญชี",
    "คณะรัฐศาสตร์",
    "คณะเศรษฐศาสตร์",
    "คณะสังคมสงเคราะห์ศาสตร์",
    "คณะศิลปศาสตร์",
    "คณะวารสารศาสตร์และสื่อสารมวลชน",
    "คณะสังคมวิทยาและมานุษยวิทยา",
    "คณะวิทยาศาสตร์และเทคโนโลยี",
    "คณะวิศวกรรมศาสตร์",
    "คณะแพทยศาสตร์",
    "คณะสหเวชศาสตร์",
    "คณะทันตแพทยศาสตร์",
    "คณะพยาบาลศาสตร์",
    "คณะศิลปกรรมศาสตร์",
    "คณะสถาปัตยกรรมศาสตร์และการผังเมือง",
    "คณะสาธารณสุขศาสตร์",
    "คณะเภสัชศาสตร์",
    "สถาบันภาษา",
    "สถาบันเทคโนโลยีนานาชาติสิรินธร",
    "วิทยาลัยนวัตกรรม",
    "วิทยาลัยสหวิทยาการ",
    "โครงการไทยศึกษา",
    "วิทยาลัยนานาชาติปรีดี พนมยงค์",
    "โครงการนิติเศรษฐศาสตร์การค้าระหว่างประเทศ"
];
let Facul;
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


  let tuFaci = (parseInt(studentIDInput.value[2]) * 10) + (parseInt(studentIDInput.value[3]) * 1);

  
  let Faci = ""; // Initialize Faci outside the loop
  
  for (let i = 0; i < facultyTexts.length; i++) {
      if (tuFaci === facultyValues[i]) {
          Faci = facultyTexts[i];
          break; // Exit the loop once a match is found
      }
      Faci ="Your ID is not correct"
  }
  Facul=Faci;

  if (!studentIDPattern.test(studentIDInput.value)) {
      errorElement.textContent = "Please enter a 10-digit Student ID.";
      studentIDInput.classList.add("highlight");
      document.getElementById("Myear").innerHTML = "";
      document.getElementById("MyFaci").innerHTML = "";
      return false;
  } else {
      errorElement.textContent = ""; 

      const tuFaci = (parseInt(studentIDInput.value[2]) * 10) + (parseInt(studentIDInput.value[3]) * 1);

      document.getElementById("Myear").innerHTML = "25" + Myears;
      document.getElementById("MyFaci").innerHTML = Faci;

      let isValidFaci = false;

      for (let i = 0; i < facultyTexts.length; i++) {
          if (tuFaci === facultyValues[i]) {
              isValidFaci = true;
              break; 
          }
      }

      if (isValidFaci) {
          studentIDInput.classList.remove("highlight");
          errorElement.textContent = "";
          return true;
      } else {
          studentIDInput.classList.add("highlight");
          errorElement.textContent = "Invalid student ID. Please correct.";
          return false;
      }
  }
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
  const TitlePattern = /^[a-zA-Zก-๙ ]{3,}$/;
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

// Function to fetch activity types from the backend
async function fetchActivityTypes() {
  try {
    const response = await fetch(`http://${window.location.hostname}:${port}/getActivityType`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch activity types.");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching activity types:", error);
    return [];
  }
}

// Function to populate activity types in the select element
function populateActivityTypes(activityTypes) {
  const activityTypeSelect = document.getElementById("activityType");

  for (const type of activityTypes) {
    const option = document.createElement("option");
    option.value = type.id;
    option.textContent = type.value;
    activityTypeSelect.appendChild(option);
  }
}
// Event listener when the page content has finished loading
document.addEventListener("DOMContentLoaded", async () => {
  const activityTypes = await fetchActivityTypes();
  populateActivityTypes(activityTypes);
});

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
      if(parseInt(Input.value)<(parseInt(Myears)+2500)){
        Input.classList.add("highlight");
        errorElement.innerHTML = "Scholastic tenure must extend beyond your academic calendar.";
        return false;
      }
      else{
        errorElement.innerHTML = "";
        Input.classList.remove("highlight");
      }
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
  const Year = document.createElement("p");
  const Facili = document.createElement("p");
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
  const DesInputIn = Facul;

  Acti.textContent=ActiInput;
  Acti.className="rechead";

  Name.textContent = "Name : " + fullnameInput;
  ID.textContent = "Student ID : " + IDInput;
  Year.textContent = "School year : "+"25" + Myears;
  Facili.textContent = "Faculty  : " + DesInputIn;
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
  myDiv.appendChild(Year);
  myDiv.appendChild(Facili);
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

    showConfirm();

  }


  async function senndatatobe(){
      const formData = new FormData(event.target);
      const data = {
      first_name: formData.get("fullname").split(" ")[0],
      last_name: formData.get("fullname").split(" ")[1],
      student_id: parseInt(formData.get("studentID")),
      email: formData.get("email"),
      title: formData.get("workTitle"),
      type_of_work_id: parseInt(formData.get("activityType")),
      academic_year: parseInt(formData.get("academicYear")) - 543,
      semester: parseInt(formData.get("semester")),
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      location: formData.get("location"),
      description: formData.get("description")
      };

      console.log(data);
      try {
    // Send data to the backend using POST request
    const response = await fetch(`http://${window.location.hostname}:${port}/record`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Form data submitted successfully!");

      // Format JSON data for display
      const formattedData = Object.entries(responseData.data)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join("\n");

      // Display success message with formatted data
      alert(responseData.message + "\n" + formattedData);

      document.getElementById("myForm").reset();
    } else {
      console.error("Failed to submit form data.");

      // Display error message
      alert("Failed to submit form data. Please try again.");
    }
  } catch (error) {
    console.error("An error occurred while submitting form data:", error);
  }  
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