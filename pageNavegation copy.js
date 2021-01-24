//var x = window.matchMedia("(max-width: 700px)")
$("document").ready(function () {
    var deviceType;
    var navStatus = "close";
    $(".navbar").on("click", navEvaluation)
function navEvaluation() {
    if (navStatus == "close") {
        openEpisodesMenu();
    } else if (navStatus == "open") {
        closeEpisodesMenu();
    }
}
function openEpisodesMenu () {
    deviceType = window.innerWidth;
    navStatus = "open";
    if (deviceType<=700) {
        $(".mainContainer__section").fadeOut(1000);
        $(".navbar__elementsCont").fadeIn(1000);
        $(".navbar").css("width","100%");
        $(".navbar__title").css("width","15%");
        $(".navbar__title, .navbar").css("transition", "1s");
        ////$(".navbar__elementsCont").slideToggle("slow");
    } else if (deviceType>=700) {
        $(".navbar__elementsCont").fadeIn(1000);
        $(".navbar").css("width","50%");
        $(".navbar__title").css("width","10%");
        $(".navbar__title, .navbar").css("transition", "1s");
    }
}

function closeEpisodesMenu () {
    navStatus = "close";
    if (deviceType<=700) {
        $(".navbar__elementsCont").fadeOut(1000);
        $(".mainContainer__section").fadeIn(1000);
        $(".navbar").css("width","15%");
        $(".navbar__title").css("width","100%");
    } else if (deviceType>=700) {
        $(".navbar__elementsCont").fadeOut(1000);
        $(".navbar").css("width","5%");
        $(".navbar__title").css("width","100%");
    }
}

})