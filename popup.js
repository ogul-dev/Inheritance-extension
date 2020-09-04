//Popup.js
//Global Variables
var killInfo = 0;
var killLobby = 0;
var killChooser = 0;
var popupLoaded = 0;
//Function to display black hole/quick join
function blackHole(src, alt, width, height) {
  //if (killChooser === 1){
  console.log("working")
  var img = document.createElement("img");
  img.width = 560
  img.height = 580
  img.src = "black_hole.png";
  img.alt = 'Black hole/Quick Start (join)';
  //};
}
//Function to diplay the various planets (commented until we decide to use js or html for this)
//function planets(){
  //if (killChooser === 1){
  //console.log("yay2")
  //var img = document.createElement("img");
  //img.width = 560
  //img.height = 580
  //img.src = "Planet_lucrous.png";
  //img.alt = 'Planet Lucrous';

  //img.width = 560
  //img.height = 580
  //img.src = "Planet_magnus.png";
  //img.alt = 'Planet Magnus';

  //img.width = 560
  //img.height = 580
  //img.src = "Planet_XonQ.png";
  //img.alt = 'Planet XonQ';

  //For Venom Planet When it's done
  //img.width = 560
  //img.height = 580
  //img.src = "Planet_lucrous.png";
  //img.alt = 'Planet Lucrous';
  //};
//}
//Function for triggering multiplayer
function multiplayerTrigger() {
  if (popupLoaded === 1) {
  console.log("working")
  };
}
//Shows the Opening Lobby
function planetChooser(src, alt, width, height, background, id, style, zIndex, index  ) {
  if (killLobby === 0){
  var img = document.createElement("img");
  img.width = 560
  img.height = 580
  img.src = "planet_chooser.png";
  img.alt = 'Screen to choose your planet';
  img.style["z-index"] = -1
  document.body.appendChild(img);
  killChooser = 1
  killLobby = 1
  blackHole()
  //planets()
};
}
//Output for startGame button
function startGame(){
  //document.getElementsByTagName('body')[0].innerHTML = '';
  planetChooser();
  popupLoaded = 1
  multiplayerTrigger()
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
