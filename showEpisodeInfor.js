async function showEpisodeInfor(epId) {
    var config = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/episode/' + epId,
        headers: { }
      };
    axios(config)
    .then(function (response) {
        console.log(response)
        $(".characterContainer").remove();
        $(".title_EpisodeName").text(response.data.name);
        $(".subtitle_EpisodeNameCode").text(response.data.episode);
        $(".info_EpisodeAirDate").text(response.data.air_date).prepend(`<i class='fas fa-satellite-dish icon_EpisodeAirDate'></i>`);
        for (let index = 0; index < response.data.characters.length; index++) {
            // Using promise
            /* let getCharacterData = new Promise(function(myResolve, myReject) {
                myResolve(showCharacterInfo(response.data.characters[index]));
              });
              getCharacterData.then(function(value) {
                console.log(value); //undefined
              }); */
            //
            getCharacterInfo(response.data.characters[index])

        }
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
    $(".episodeData__charactersCont").append(characterContainer)
}


async function getCharacterInfo (characterURL) {
    var config = {
        method: 'get',
        url: characterURL,
        headers: { }
      };
    await axios(config)
    .then(function (response) {
        console.log(response.data)
        showCharacterInfo (response);
    });
}