window.onmousemove=getPos;
var mouseLoc={'x':0,'y':0};
function getPos(){
	var e = window.event;
	if(Math.abs(e.clientX -(mouseLoc.x)) > 30 || Math.abs(e.clientY - (mouseLoc.y)) > 30){
		mouseLoc= {'x' : e.clientX, 'y' : e.clientY};
		console.log('x='+mouseLoc.x+'y='+mouseLoc.y);
		createIframe();
	}
}
/*

if(window.attachEvent) {
    window.attachEvent('onload', createIframe);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            createIframe();
        };
        window.onload = newonload;
    } else {
        window.onload = createIframe;
    }
}*/


var iframe;
function createIframe(){

	iframe = document.createElement('iframe');
	iframe.setAttribute('src', 'scripts/iframe.php?x='+mouseLoc.x+"&y="+mouseLoc.y);
	console.log(iframe);
	document.getElementById('overshoulderiframe').innerHTML="";
	document.getElementById('overshoulderiframe').appendChild(iframe);
}


$(document).ready(function(){
// document.body.onmousemove=getPos();
	// var pos = getPos();
	// console.log(pos.x);
});