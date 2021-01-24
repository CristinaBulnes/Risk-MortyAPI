//var x = window.matchMedia("(max-width: 700px)")
$("document").ready(function () {
    var deviceType;
ajustarMedias(window.innerWidth)
$(window).on("resize", ajustarMedias(this.innerWidth))
$(".navbar").on("click", openEpisodesMenu(deviceType));
$(".navbar").on("dblclick", closeEpisodesMenu(deviceType));

function openEpisodesMenu (deviceType) {
    console.log(deviceType)
    switch (deviceType) {
        case "smallType":
            $(".navbar").css("width","100%");
            $(".navbar__title").css("width","20%");
            $(".navbar__title").css("padding","25%");
            $(".mainContainer__section").css("display","none");
            $(".navbar__elementsCont").css("display","block");
            break;
        case "regularType":
            
            break;
        case "largeType":
            $(".navbar").css("width","100%");
            $(".navbar__title").css("width","20%");
            $(".navbar__title").css("padding","5%");
            $(".mainContainer__section").css("display","none");
            $(".navbar__elementsCont").css("width","80%");
            $(".navbar__elementsCont").css("display","block");
            break;
        default:
            break;
    }
}

function closeEpisodesMenu (deviceType) {
    switch (deviceType) {
        case "smallType":
            $(".navbar").css("width","20%");
            $(".navbar__title").css("width","100%");
            $(".navbar__title").css("padding","25%");
            $(".mainContainer__section").css("display","block");
            $(".navbar__elementsCont").css("display","none");
            break;
        case "regularType":
            
            break;
        case "largeType":
            $(".navbar").css("width","5%");
            $(".navbar__elementsCont").css("display","none");
            $(".navbar__title").css("width","100%");
            $(".navbar__title").css("padding","25%");
            $(".mainContainer__section").css("display","block");
            $(".mainContainer__section").css("width","95%");
                    break;
        default:
            break;
    }
}

function ajustarMedias(x) {
    console.log("ajuste media")
    console.log(x)
    if (x.matches) { // If media query matches
        deviceType = "smallType";
    } else {
        deviceType = "largeType";
    }
}

})