$(function (){
	$.getJSON('http://www.reddit.com/r/aww.json', gotJSON);
	$('#logo').click(function(){
		$(this).fadeOut("slow").fadeIn("slow");
	});
});

var response1;
function gotJSON(response, status, jqXHR){
	response1 = response
	console.log(response);
	console.log(jqXHR);
	dataArray = response.data.children

	for(var i = 0; i < dataArray.length; i++) {
		var thumb = dataArray[i].data.thumbnail;
		if (thumb) {
			var thumbElement = '<div class="col-xs-2 pics">';
			thumbElement += '<img class="img-responsive" src="' + thumb + '">';
			thumbElement += '</div>'; 

			$('#main-container div.row').append(thumbElement);
			var current_div = $('#main-container div.row').find('div:last-child');
			current_div.hover(function(){
				$(this).animate({
					bottom: "20px"
				})
			});

			current_div.mouseleave(function(){
				$(this).animate({
					bottom: "0px"
				});
			});

		}


	}

}