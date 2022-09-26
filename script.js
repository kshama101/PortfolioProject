// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsibleNavbar')

// Collapse Javasript plgin is used to show and hide the content
navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


// addEventListner() method execute a function (validate) when user clicks on the submit 
const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const textField = document.getElementById("comment");
  let valid = true;

  // if field is empty then making the span visible showing the error messege, also adding invalid class to 
  // the field's classList which adds red border.
  // Or if field has value then removing the span's visible class, which shows the error msg, also removing the 
  // field's invalid class which removes the red border

  if (!nameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    nameField.classList.add("invalid");
 
  }else if (nameField.value) 
  {
    const nameError = document.getElementById("nameError");
    nameError.classList.remove("visible");
    nameField.classList.remove("invalid");
    console.log(nameField.value);  
   
  }
  
  if(!emailField.value){
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
 

  }
  else if (emailField.value)
  {
    const emailError = document.getElementById("emailError");
    emailError.classList.remove("visible");
    emailError.classList.remove("invalid");
    console.log(emailField.value);  
  }

  if(subjectField.value){
    console.log(subjectField.value)
  }

  if(textField.value){
    console.log(textField.value)
}

  return valid;
}

