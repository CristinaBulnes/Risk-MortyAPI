function displayLocationData (locationURL) {
    console.log(locationURL)
    axios.get(locationURL)
    .then(function(value) {
        $(".sectionEpisodes").show(1000);
        $(".sectionCharacters").hide(1000);
        $(".characterContainer").remove();
        $(".title").text(value.data.name);
        $(".subtitle").text(value.data.dimension);
        $(".info").text(value.data.type)
        const myCharactersAtLoc = [];
        value.data.residents.forEach(element => {
            myCharactersAtLoc.push(axios.get(element));
        });
        axios.all(myCharactersAtLoc).then(function(value) {
            value.forEach(element => {
                showCharacterInfo(element);
            });
        })
    })
}