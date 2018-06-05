// getting info from the boxes
document.getElementById("submit").addEventListener("click", function() {
let yourUser = document.getElementById("userBox").value;
document.getElementById("userBox").value = "";
let yourPassword = document.getElementById("passwordBox").value;
document.getElementById("passwordBox").value = "";
console.log(yourPassword)
console.log(yourUser)
});
// allow enter to submit form
document.getElementById('userBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
document.getElementById('passwordBox').addEventListener("keyup", function() {
  if (event.keyCode === 13)
  document.getElementById("submit").click();
});
