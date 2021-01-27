async function showEpisodeInfor(epId) {
    var config = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/episode/' + epId,
        headers: { }
    };
    $(".characterContainer").remove();
    $(".episodeData__header").remove();
    axios(config)
    .then(function (response) {
        let myEpisodeCont = $(`<header class="section__header episodeData episodeData__header">
        <h3 class="title title_EpisodeName">`+response.data.name+`</h3>
        <h4 class="subtitle subtitle_EpisodeNameCode">`+response.data.episode +`</h4>
        <p class="info info_EpisodeAirDate"><i class='fas fa-satellite-dish icon_EpisodeAirDate'></i>AirDate`+response.data.air_date+`</p>
    </header>`);
        $(".sectionEpisodes").append(myEpisodeCont);
        $(".sectionWelcome").fadeOut(1000, function () {
            $(".sectionEpisodes").fadeIn(1000);
        });
        $(".sectionCharacters").fadeOut(1000, function () {
            $(".sectionEpisodes").fadeIn(1000);
        });
        const myCharacters = [];
        response.data.characters.forEach(element => {
            myCharacters.push(axios.get(element));
        });
        axios.all(myCharacters).then(function(value) {
            value.forEach(element => {
                showCharacterInfo(element);
            });
        })
    })
}

function showCharacterInfo(characterInfo) {
    let characterContainer = $(`<article class="episodeData episodeData__character characterContainer">
        <div class="characterData characterData__imgCont"><img src="`+ characterInfo.data.image+`" class="characterData characterData__img" alt=""></div>
        <div class="characterData characterData__infoCont">
            <h4 class="characterData characterData__name">`+ characterInfo.data.name +`</h4>
            <div class="containerData">
                <p class="characterData characterData__specie">`+ characterInfo.data.species +`</p>
                <span>|</span>
                <p class="characterData characterData__status">`+ characterInfo.data.status +`</p>
            </div>
        </div>
    </article>`);
    $(characterContainer).data("characterId", characterInfo.data.id);
    $(characterContainer).on("click", displayCharacterInfor);
    $(".episodeData__charactersCont").append(characterContainer);
    $(".sectionEpisodes").append($(".episodeData__charactersCont"));
}