$(function (){
	$.getJSON('http://www.reddit.com/r/aww.json', gotJSON);
});

var response1;
function gotJSON(response, status, jqXHR){
	response1 = response
	console.log(response);
	console.log(jqXHR)
	dataArray = response.data.children

	for(var i = 0; i < dataArray.length; i++) {
		var thumb = dataArray[i].data.thumbnail;

		var thumbElement = '<div class="col-xs-2 pics">';
		thumbElement += '<img class="img-responsive" src="' + thumb + '">';
		thumbElement += '</div>'; 

		$('#main-container div.row').append(thumbElement);

	}

}