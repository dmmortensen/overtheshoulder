var showInterval;

function findURL(){
	console.log('entered findURL');
	$.ajax({
		type: 'POST',
		url: 'scripts/dupsite.php',
		data: { url : document.URL },
		success: function(response){
			$('.showposition').html(response);
		}
	})
}

function showPosition(){
	$.ajax({
		type: 'POST',
		url: 'scripts/position.php',
		dataType: 'json',
		data: {
			u : 'mouseposition'
		},
		success: function(response){
			$('img.cursor').animate({
				top: response.mouse_y+'px',
				left: response.mouse_x+'px'
			},10);
		}
	});
}



$(document).ready(function(){
	
	$('button.start').click(function(){
		findURL();
		$('body').append('<img class="cursor" src="img/Cursor.png">');
		showInterval = self.setInterval(showPosition, 100);
		urlInterval = self.setInterval(findURL, 10000);
	});
	$('button.stop').click(function(){
		showInterval = window.clearInterval(showInterval);
		urlInterval = window.clearInterval(findURL);
	});
	$('button.iframe').click(function(){
		$('body').append('<div class="iframe-wrapper">etest</h1>');
		$('.iframe-wrapper').append('<iframe src="http://susanmturley.org"></iframe>');
	})
});