var count=1;
var xp, yp;

function showPosition(){
	console.log('entered showposition');
	$.ajax({
		type: 'POST',
		url: 'scripts/position.php',
		dataType: 'json',
		data: {
			u : 'mouseposition'
		},
		success: function(response){
			console.log(response);
			console.log(response.mouse_x);
			$('img.cursor').animate({
				top: response.mouse_y+'px',
				left: response.mouse_x+'px'
			},10);
		}
	});
	console.log('ended showposition');
}

var mouseLoc={'x':0,'y':0};

$(document).ready(function(){
$('.content').on('mousemove', function(e){
	if(Math.abs(e.pageX -(mouseLoc.x)) > 30 || Math.abs(e.pageY - (mouseLoc.y)) > 30){
		mouseLoc={'x':e.pageX, 'y':e.pageY};
		count++;
		$('.counter').html(count);
		$.ajax({
			type: 'POST',
			url: 'real-time.php',
			data: {
				x : e.pageX,
				y : e.pageY
			}
		});
	}
});

var showInterval;
if($('.showposition').length > 0){
	$('.showposition').append('<img class="cursor" src="img/Cursor.png">');
	showInterval = self.setInterval(showPosition, 100);
}

	
$('button.start').click(function(){
	showInterval = self.setInterval(showPosition, 70);
});
$('button.stop').click(function(){
	showInterval = window.clearInterval(showInterval);
});

});