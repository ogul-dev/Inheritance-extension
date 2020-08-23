//Popup.js
//Shows the Opening Lobby
function showLobby(src, alt) {
  var img = document.createElement("img");
  img.src = "opening_lobby.png";
  img.alt = 'Opening Lobby';

  document.body.appendChild(img);
}
//Output for startGame button
function startGame(){
  document.getElementsByTagName('body')[0].innerHTML = '';
  showLobby();
}
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
  document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#startButtonImage").addEventListener('click', startGame);
  document.querySelector("#infoButtonImage").addEventListener('click', openInfo);
});
//Shows Info Screen Image
function showImage(src, alt) {
  var img = document.createElement("img");
  img.src = "info_screen.png";
  img.alt = 'Information Screen';

  document.body.appendChild(img);
}
//Output for openInfo button
function openInfo() {
  document.getElementsByTagName('body')[0].innerHTML = '';
  showImage();
}
function openWindow() {
  console.log("looks right")
}
