let userName = "vasia";
function showMessage() {
   userName = "Petia";
   let message = "Privet" + userName;
   alert (message);
}
alert (userName);
showMessage();
alert (userName);