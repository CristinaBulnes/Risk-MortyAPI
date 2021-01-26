let infoToDisplayItems = {
    sectionURL: "",
    totalItems: 0,
    numberItemsShowing: 10,
    numberOfIterations: 0,
    totalItemsOnPage: 0,
    totalPages: 0,
    numberOfIterationPerPage: 0,
    iterationTime: 0,
    iterationOnPage: 0
}
let myPage = 1;
let allMyInfoToDisplayItems = [];

let urlEpisode = "https://rickandmortyapi.com/api/episode";
var havedMyDatas = $.Deferred();
$("document").ready(function () {
    // Main section to get information about:
    let urlCharacter = "https://rickandmortyapi.com/api/character";
    let urlLocation = "https://rickandmortyapi.com/api/location";
    calculateNumberOfItemsToShow(urlEpisode);
    //$.when(calculateNumberOfItemsToShow(urlEpisode)).done(getNextItems())

    /* let havedMyDatas = new Promise(function(myResolve, myReject) {
        let myDatas = ;
        console.log(myDatas)
        myResolve(myDatas);
        myReject("Error");
});
    havedMyDatas.then(
        function(myDatas) {console.log(myDatas); ;}
    ); */
    //calculateNumberOfItemsToShow(urlCharacter);
    //calculateNumberOfItemsToShow(urlLocation);
    /* getNextItems(iterationTime); */
    //getNextItems();
    $(".load").on("click", function(event) {
        event.stopPropagation();
        infoToDisplayItems.iterationTime ++;
        infoToDisplayItems.iterationOnPage ++;
        getNextItems();
    })
});

function calculateNumberOfItemsToShow(URLsection) {
    axios.get(URLsection).then((data) => {
        infoToDisplayItems.sectionURL = URLsection;
        infoToDisplayItems.totalItems = data.data.info.count;
        infoToDisplayItems.totalPages = data.data.info.pages;
        infoToDisplayItems.numberItemsShowing = 10;
        infoToDisplayItems.numberOfIterations = Math.ceil(infoToDisplayItems.totalItems/infoToDisplayItems.numberItemsShowing);
        infoToDisplayItems.totalItemsOnPage = data.data.results.length;
        infoToDisplayItems.numberOfIterationPerPage = infoToDisplayItems.totalItemsOnPage/infoToDisplayItems.numberItemsShowing;
        infoToDisplayItems.iterationTime = 1;
        infoToDisplayItems.iterationOnPage = 1;
        havedMyDatas.resolve();
        /* return infoToDisplayItems; */
        });
}

function resetList () {
    infoToDisplayItems.iterationTime = 1;
    infoToDisplayItems.iterationOnPage = 1;
    myPage = 1;
}

function pageToGetItems() {
    console.log(infoToDisplayItems.numberOfIterationPerPage, infoToDisplayItems.iterationOnPage, myPage)
    if (infoToDisplayItems.numberOfIterationPerPage / infoToDisplayItems.iterationOnPage >= 1) {
        myPage = myPage;
    } else if (infoToDisplayItems.numberOfIterationPerPage / infoToDisplayItems.iterationOnPage < 1) {
        myPage = myPage + 1;
    };

    if (myPage > infoToDisplayItems.totalPages) {
        myPage = 1;
    }
    if (infoToDisplayItems.iterationOnPage > infoToDisplayItems.numberOfIterationPerPage) {
        infoToDisplayItems.iterationOnPage = 1;
    }
    console.log(infoToDisplayItems.numberOfIterationPerPage, infoToDisplayItems.iterationOnPage, myPage)
    return myPage;
}
function getNextItems() {
    let page = pageToGetItems();
    let pageIteration = infoToDisplayItems.iterationOnPage;
    let firstItem = pageIteration * infoToDisplayItems.numberItemsShowing - 11;
    console.log(page);
    var config = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/episode?page=' + page,
        headers: { }
      };
    axios(config)
    .then(function (response) {
        console.log(firstItem)
        for (let index = 0; index < infoToDisplayItems.numberItemsShowing; index++) {
            console.log(firstItem)
            firstItem++;
            console.log(response.data.results[firstItem].name);
            let episodeContainer = $(`<li class="navbar__item">` + response.data.results[firstItem].name + `</li>`);
            episodeContainer.data("epId", response.data.results[firstItem].id);
            episodeContainer.on("click", function(event) {
                showEpisodeInfor($(this).data("epId"));
            })
            $(".load").before(episodeContainer);
        }
})
}