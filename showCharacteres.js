//$(".episodeData__character").on("click", displayCharacterInfor($(this).data("characterId")));
function displayCharacterInfor () {
    axios.get(`https://rickandmortyapi.com/api/character/`+$(this).data("characterId"))
    .then(function(value) {
        console.log(value.data.name)
        $(".sectionEpisodes").hide(1000);
        let myCharacterCont = $(`<section class="sectionContainer__section sectionCharacters">
        <div class="characterData characterData__imgCont"><img src="`+ value.data.image + `" class="characterData characterData__img" alt=""></div>
        <div class="characterData characterData__infoCont">
            <h4 class="characterData characterData__name">`+  value.data.name +`</h4>
            <div class="containerData">
                <p class="characterData characterData__specie">`+  value.data.species +` </p>
                <span>|</span>
                <p class="characterData characterData__status"> `+  value.data.status +` </p>
                <span>|</span>
                <p class="characterData characterData__gender"> `+  value.data.gender +`</p>
            </div>
        </div>
        `);
        let charLocation = $(`<section class="characterData characterData__origenCont">
        `+  value.data.location.name +`
        </section>`);
        $(charLocation).data("locationURL", value.data.location.url);
        console.log($(charLocation));
        $(".sectionContainer").append(myCharacterCont);
        $(".sectionCharacters").append(charLocation);
        //$(myCharacterCont).toggle();
    }
    )
    console.log($(this).data("characterId"));
}