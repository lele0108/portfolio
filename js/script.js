$(document).ready(function() {


    var _config = {
        username: 'lele0108',
        count: 9,
        period: 'recenttracks',
        defaultthumb: 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_album_large.png'
    };

   lastFmRecords.init(_config);




   $.jribbble.getShotsByPlayerId('jimmyliu', function (playerShots) {
      var html = [];
  
      $.each(playerShots.shots, function (i, shot) {
          html.push('<li><a href="' + shot.url + '">');
          html.push('<img src="' + shot.image_teaser_url + '" ');
          html.push('alt="' + shot.title + '"></a></li>');
      });
  
      $('#dribbble').html(html.join(''));
  }, {page: 1, per_page: 1});

});

