var count=1;
var xp, yp;

function showPosition(){
	$.ajax({
		type: 'POST',
		url: 'scripts/position.php',
		data: {
			u : 'mouseposition'
		},
		success: function(response){
			console.log(response);
		}
	})
}

$(document).ready(function(){
$('.content').on('mousemove', function(e){
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
});

if($('.showposition').length > 0){
	setInterval(showPosition, 5000);
}
});