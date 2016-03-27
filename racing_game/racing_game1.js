// // wait for the DOM to finish loading
$(document).ready(function(){
});

  $("td").on("mousemove", function () {
  console.log("you are on td");
  });

  $(function() {
    var box= '<td id="box"></td>';
    $("#racetrack".append(player));

    $(document).keydown(function(e){
      var position = $("#player").position();
      switch(e.keyCode)
    {
        case 65:
          $("#player").css('a', position.right - 20 + 'px');
          break;

        case 76:
          $("player").css('l', position.right - 20 + 'px');
          break;
        }
      }
    );
  });
