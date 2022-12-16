$(document).ready(function () {
  var current = 0;
  var setIntervalId;

  $(".btn li").click(function () {
    var tg = $(this);
    var i = tg.index();
    move(i);
  });

  $("#main").hover(
    function () {
      clearInterval(setIntervalId);
    },
    function () {
      timer();
    }
  );

  timer();
  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 3) {
        n = 0;
      }
      move(n);
    }, 3000);
  }

  function move(n) {
    var currentEl = $(".imgs li").eq(current);
    var nextEl = $(".imgs li").eq(n);

    currentEl.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl.css({ left: "100%" }).animate({ left: "0%" });

    current = n;
  }
});
