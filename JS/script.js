

var finalDate = new Date("Jul 07, 2022 15:00:00").getTime();

var x = setInterval(function () {

    var time = new Date().getTime();
    var distance = finalDate - time;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    var displayed = "<span class='card'>" + d + " <a>days</a> </span><span class='card'>" + h + " <a>hours</a> </span>";
    displayed += "<span class='card'>" + m + " <a>minutes</a> </span><span class='card'>" + s + " <a>seconds</a> </span>";

    $(".counter").html(displayed);

    if (distance < 0) {
        clearInterval(x);
        $(".display").html("<h1>EXPIRED</h1>");
    }

},);