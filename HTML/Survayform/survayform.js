function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    profession === "" ||
    email === "" ||
    mobile === ""
  ) {
    alert("Please fill in all the required fields.");
  } else {
    displayPopup();
  }
}

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  var popupContent = `
        <h2>Survey Form Submission</h2>
        <span id="popupClose" onclick="closePopup()" style="position: absolute; top: 5px; right: 5px; cursor: pointer;">X</span>
        <p><strong>First Name:</strong> ${firstName}</p>
        <!-- Display other form values in the same manner -->
    `;

  popup.innerHTML = popupContent;
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function resetForm() {
  var form = document.getElementById("surveyForm");
  form.reset();

  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.getElementById("submitBtn").addEventListener("click", submitForm);
document.getElementById("resetBtn").addEventListener("click", resetForm);
