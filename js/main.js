var count=1;
var xp, yp;


var mouseLoc={'x':0,'y':0};
var pageSent=false;

if(document.URL != 'http://localhost/overtheshoulder/showposition.php'){
$(document).ready(function(){
	console.log('entered');
	if(pageSent == false){
		$.ajax({
			type: 'POST',
			url: 'real-time.php',
			data: {
				url : document.URL
			},
			success: function(response){
				console.log(response);
			}
		});
		console.log(document.URL);
		pageSent = true;
		
	$('html').on('mousemove', function(e){
		if(Math.abs(e.pageX -(mouseLoc.x)) > 30 || Math.abs(e.pageY - (mouseLoc.y)) > 30){
			mouseLoc={'x':e.pageX, 'y':e.pageY};
			count++;
			$('.counter').html(count);
			$.ajax({
				type: 'POST',
				url: 'real-time.php',
				data: {
					x : e.pageX,
					y : e.pageY,
				}
			});
		}
	});
}

});
}