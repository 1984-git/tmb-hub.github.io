function calculateName(emailAddress) {
  let firstName = "";
  let lastName = "";
  
  if (emailAddress.indexOf("@remygroup.com") > -1) {
    emailAddress = emailAddress.substring(0, emailAddress.indexOf("@"));

    firstName = emailAddress.substring(0, emailAddress.indexOf("."));
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = emailAddress.substring(emailAddress.indexOf(".") + 1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return (firstName + " " + lastName);
  }
  else {
    // If the email is not from REMYGROUP then just return the email address
    firstName = emailAddress;
    return (firstName);
  }
}

function removeEmail(buttonReference) {
  
  let name = calculateName(buttonReference.innerHTML);
  let pn = document.getElementById("passengerNames");

  pn.value = pn.value.replace(name,'');
  pn.value = pn.value.replace(", , ",", ");

  // If now the pn starts with a ", " then lets remove it
  if (pn.value.substring(0,2) == ", "){
    pn.value = pn.value.slice(2);
  }
  
  selectedEmails = document.getElementById("currentEmailList");
  selectedEmails.removeChild(buttonReference);
}

function addNewEmail(inputField) {
  // Create a new button and add it to the emaillist
  var emailAddress = document.getElementById("passengerEmails");
  newButton = document.createElement('button');
  newButton.innerHTML = emailAddress.value;
  newButton.id = emailAddress.value;
  newButton.className = "btn btn-info emailButton";

  // Here a new we create the onclick event for the new button which simply removes it
  newButton.onclick = function () {
    removeEmail(this);
  }

  selectedEmails = document.getElementById("currentEmailList");
  selectedEmails.appendChild(newButton);

  // If there is already something in the box then add a ", " separator
  let pn = document.getElementById("passengerNames");
  if (pn.value != 0) {
    pn.value += ", ";
  }

  pn.value += calculateName(emailAddress.value);

  // Delete the content of the dropdown
  emailAddress.value = "";
  
}