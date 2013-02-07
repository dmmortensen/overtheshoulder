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


var gif;
function createIframe(){

	gif = document.createElement('img');
	gif.setAttribute('src', 'shoulder.gif?x='+mouseLoc.x+"&y="+mouseLoc.y);
	console.log(gif);
	document.getElementById('overshoulder').innerHTML="";
	document.getElementById('overshoulder').appendChild(gif);
}


$(document).ready(function(){
// document.body.onmousemove=getPos();
	// var pos = getPos();
	// console.log(pos.x);
});