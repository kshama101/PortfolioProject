// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsibleNavbar')

// Collapse Javasript plgin is used to show and hide the content
navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


// addEventListner() method execute a function (validate) when a user clicks on the submit 
 const submit = document.getElementById("submit");
 submit.addEventListener("click", validate);

 // Accessing the elements with specific id, and assigning to variables
 const nameField = document.getElementById("name");
 const emailField = document.getElementById("email");
 const subjectField = document.getElementById("subject");
 const commentField = document.getElementById("comment");
 
// addEventListner() method execute a function (updateValue) when a user provides an input
 nameField.addEventListener("input", updateValue);
 emailField.addEventListener("input", updateValue);
 subjectField.addEventListener("input", updateValue);
 commentField.addEventListener("input", updateValue);

 // function for email validation that uses  regular expressions
 const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// function to show or hide the error based on user input
 function updateValue(e) {
    const errorMsg = document.getElementById(e.target.id+"Error");
    hide_error(e.target, errorMsg)
    if (e.target.id==='email')
      {
        const emailError2 = document.getElementById("emailError2");
        if (!validateEmail(e.target.value))
          show_error(emailField, emailError2);
        else
          hide_error(emailField, emailError2);
        
      }
}

// Function to show the error
function show_error(elmField,elmError)
{
  elmError.classList.add("visible");
  elmField.classList.add("invalid");
  elmError.setAttribute("aria-hidden", false);
  elmError.setAttribute("aria-invalid", true);
}

// Function to hide the error
function hide_error(elmField,elmError)
{
  elmError.classList.remove("visible");
  elmField.classList.remove("invalid");
  elmError.setAttribute("aria-hidden", true);
  elmError.setAttribute("aria-invalid", false);
  console.log(elmField.value) 
}


// function for form validation
function validate(e) {
  e.preventDefault();
  
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const commentField = document.getElementById("comment");
  let valid = true;

  // if field is empty then making the span visible showing the error messege, also adding invalid class to 
  // the field's classList which adds red border.
  // Or if field has value then removing the span's visible class, which shows the error msg, also removing the 
  // field's invalid class which removes the red border

  const nameError = document.getElementById("nameError");
 
    if (!nameField.value) {
      show_error(nameField,nameError)
    } 
    else if (nameField.value) 
    {
    hide_error(nameField,nameError)
    }

  const emailError = document.getElementById("emailError");
    if(!emailField.value ){
      show_error(emailField,emailError)
    } 
    else if (emailField.value)
    { if (validateEmail( emailField.value))
        {  hide_error(emailField, emailError)
          const emailError2 = document.getElementById("emailError2");
          hide_error(emailField, emailError2)
        }
      else
        {const emailError = document.getElementById("emailError2");
          show_error(emailField, emailError);
        }
    }

  const subjectError = document.getElementById("subjectError");
    if(!subjectField.value){
      show_error(subjectField,subjectError)
    }
    else if (subjectField.value)
    {
      hide_error(subjectField,subjectError)
      
    }

  const commentError = document.getElementById("commentError");
    if(!commentField.value){
      show_error(commentField,commentError)
    }
    else if (commentField.value)
    {
      hide_error(commentField,commentError)
    }

  return valid;
}




