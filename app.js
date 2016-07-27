$(function(){
	var results;
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#search-input').val();
    getRequest(searchTerm);
  });

function getRequest(searchTerm){
  var params = {
  	part: 'snippet',
  	key: 'AIzaSyAq3_-NhYrktvJNwyrfcEZ6Ni5t-aYxdIc',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data.items[0]);

  var html = "";
  for (var i in data.items) {
    var item = data.items[i];
    html += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '" target="_blank"><img src="' + item.snippet.thumbnails.medium.url + '"></a>';
$('#search-results').html(html);
  };

      });
}

});


//https://www.youtube.com/watch?v=
