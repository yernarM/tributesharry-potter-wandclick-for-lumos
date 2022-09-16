var wand = document.getElementById("wand");
var glow = document.getElementById("glow");
var text = document.getElementById("text");

wand.addEventListener("click", function (event) {
  wand.classList.add('wand--animate');
  glow.classList.add('glow--animate');
  text.classList.add('text--animate');

  setTimeout(function () {
    wand.classList.remove('wand--animate');
    glow.classList.remove('glow--animate');
    text.classList.remove('text--animate');
  }, (5000));

}, false);

let soundButton = document.querySelector('.soundbutton'),
  audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
  soundButton.classList.toggle('paused')
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
  audio.pause()
}
