//Popup.js
//Output for startGame button
function startGame(){
  document.getElementsByTagName('body')[0].innerHTML = '';
}
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
  document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#startButtonImage").addEventListener('click', startGame);
  document.querySelector("#infoButtonImage").addEventListener('click', openInfo);
});

//Output for openInfo button
function openInfo(){
  document.getElementsByTagName('body')[0].innerHTML = '';
  function show_image(src, alt) {
    var img = document.createElement("img");
    img.src = "info_screen.png";
  }
}
