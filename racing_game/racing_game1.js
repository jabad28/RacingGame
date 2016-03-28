// wait for the DOM to finish loading
$(document).ready(function() {

});

var player1;

function move(event) {
    var k = event.keyCode,
        boxId = document.getElementById('blueBox'),
        box = {
            moveRight: function() {
                var x = parseInt(getComputedStyle(boxId).left);
                if (k == 76) {
                    ++x;
                } else if (k == 76) {
                    ++x;
                }
                return x;
            }
        };
    boxId.style.left = (box.moveRight()) + "px";
}
document.addEventListener('keydown', move);


var player2;

function moveAgain(event) {
    var s = event.keyCode,
        boxId = document.getElementById('yellowBox'),
        box = {
            moveRightAgain: function() {
                var y = parseInt(getComputedStyle(boxId).left);
                if (s == 65) {
                    ++y;
                } else if (s == 65) {
                    ++y;
                }
                return y;
            }
        };
    boxId.style.left = (box.moveRightAgain()) + "px";
}
document.addEventListener('keydown', moveAgain);
