// key sound mapping
const keys = [90, 88, 67, 86, 66, 78, 77, 65, 83, 68, 70, 71, 72, 74, 81, 87, 69, 82, 84, 89, 85];
const song = ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5'];


document.onkeydown = function(event) {
  var i = keys.indexOf(parseInt(event.keyCode))
  if (i !== -1) {
    document.querySelector(`.${song[i]}`).classList.add('piano-key-hover');
    audio = new Audio(`./piano/${song[i]}.mp3`);
    audio.play();
  }
}
document.onkeyup = function(event) {
  var i = keys.indexOf(parseInt(event.keyCode))
  if (i !== -1) {
    document.querySelector(`.${song[i]}`).classList.remove('piano-key-hover');
  }
}