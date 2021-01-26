async function showEpisodeInfor(epId) {
    var config = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/episode/' + epId,
        headers: { }
      };
    axios(config)
    .then(function (response) {
        console.log(response);
        $(".sectionEpisodes").show(1000);
        $(".sectionCharacters").hide(1000);
        $(".characterContainer").remove();
        $(".title_EpisodeName").text(response.data.name);
        $(".subtitle_EpisodeNameCode").text(response.data.episode);
        $(".info_EpisodeAirDate").text(response.data.air_date).prepend(`<i class='fas fa-satellite-dish icon_EpisodeAirDate'></i>`);
        const myCharacters = [];
        response.data.characters.forEach(element => {
            myCharacters.push(axios.get(element));
        });
        axios.all(myCharacters).then(function(value) {
            console.log(value)
            value.forEach(element => {
                showCharacterInfo(element);
            });
        })
    })
}

function showCharacterInfo(characterInfo) {
    console.log(characterInfo.data)
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
    console.log($(characterContainer).data("characterId"));
    $(".episodeData__charactersCont").append(characterContainer);
}