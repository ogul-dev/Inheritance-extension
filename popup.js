//Popup.js
//Global Variables
var killInfo = 0;
//Shows the Opening Lobby
function planetChooser(src, alt, width, height) {
  var img = document.createElement("img");
  img.width = 560
  img.height = 560
  img.src = "planet_chooser.png";
  img.alt = 'Opening Lobby';

  document.body.appendChild(img);
}
//Output for startGame button
function startGame(){
  document.getElementsByTagName('body')[0].innerHTML = '';
  planetChooser();
}
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
  document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#startButtonImage").addEventListener('click', startGame);
  document.querySelector("#infoButtonImage").addEventListener('click', openInfo);
});
//Shows Info Screen Image
function openInfo(src, alt) {
  if (killInfo === 0){
    var img = document.createElement("img");
    img.src = "info_screen.png";
    img.alt = 'Information Screen';
    document.body.appendChild(img);
    killInfo = 1;
};
}
//Output for openInfo button
function openWindow(src, alt, width, height) {
  console.log("b r o")
  var img = document.createElement("img");
  img.width = 560;
  img.height = 560;
  img.src = "planet_chooser.png";
  img.alt = 'Screen to choose your planet/server';
}
