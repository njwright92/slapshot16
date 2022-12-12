$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton2").click(function () {
        if ($("#carouselButton2").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton2").children("i").removeClass("fa-pause");
            $("#carouselButton2").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton2").children("i").removeClass("fa-play");
            $("#carouselButton2").children("i").addClass("fa-pause");
        }
    });
});

$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton3").click(function () {
        if ($("#carouselButton3").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton3").children("i").removeClass("fa-pause");
            $("#carouselButton3").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton3").children("i").removeClass("fa-play");
            $("#carouselButton3").children("i").addClass("fa-pause");
        }
    });
});