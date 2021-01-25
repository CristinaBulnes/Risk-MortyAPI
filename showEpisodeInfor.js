function showEpisodeInfor(epId) {
    var config = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/episode/' + epId,
        headers: { }
      };
    axios(config)
    .then(function (response) {
        $(".title_EpisodeName").text(response.data.name);
        $(".subtitle_EpisodeNameCode").text(response.data.episode);
        $(".info_EpisodeAirDate").text(response.data.air_date).prepend(`<i class='fas fa-satellite-dish icon_EpisodeAirDate'></i>`);
        //closeEpisodesMenu();
    })
}