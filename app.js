$(function(){
	var results;
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#search-input').val();
    getRequest(searchTerm);
    showResults(results);
  });
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
      });
}

function showResults(results){
  var html = "";
  for (var i in data.items) {
  	var item = data.items[i];
    html += '<img src="' + item.snippet.thumbnails.medium.url + '">';

  };
  $('#search-results').html(html);
}
