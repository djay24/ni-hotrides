// getting values from input boxes
document.getElementById("submit").addEventListener("click", function() {
  let yourName = document.getElementById("nameBox").value;
  document.getElementById("nameBox").value = "";
  let yourEmail = document.getElementById("emailBox").value;
  document.getElementById("emailBox").value = "";
  let yourPhone = document.getElementById("phoneBox").value;
  document.getElementById("phoneBox").value = "";
  let yourPassword = document.getElementById("passwordBox").value;
  document.getElementById("passwordBox").value = "";
  let yourAddress = document.getElementById("addressBox").value;
  document.getElementById("addressBox").value = "";
  let yourCity = document.getElementById("cityBox").value;
  document.getElementById("cityBox").value = "";
  let yourState = document.getElementById("stateBox").value;
  document.getElementById("stateBox").value = "";
  console.log(yourName);
  console.log(yourEmail);
  console.log(yourPhone);
  console.log(yourPassword);
  console.log(yourAddress);
  console.log(yourCity);
  console.log(yourState);


// getting input data and putting into json form
  let user = {
    name: yourName,
    email: yourEmail,
    phone_number: yourPhone,
    password: yourPassword,
    address: yourAddress,
    city: yourCity,
    state: yourState
  }
  person = JSON.stringify(user);
  console.log(user)
  // end of JSON
})




// submit values by hitting enter
document.getElementById('nameBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('emailBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('phoneBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('passwordBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('addressBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('cityBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('stateBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
