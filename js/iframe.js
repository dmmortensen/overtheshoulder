
if(document.URL != 'http://172.16.81.146/overtheshoulder/showposition.php' && document.URL != 'http://localhost/overtheshoulder/showposition.php'){
window.onmousemove=getPos;
}
var mouseLoc={'x':0,'y':0};
function getPos(e){
	// if(Math.abs(e.clientX -(mouseLoc.x)) > (window.outerWidth*.02) || Math.abs(e.clientY - (mouseLoc.y)) > (window.outerHeight*.02)){
		mouseLoc= {'x' : e.clientX, 'y' : e.clientY};
		console.log('x='+mouseLoc.x+'y='+mouseLoc.y);
		createIframe();
	// }
}

var gif;
var div;
var createdDiv =false;
function createIframe(){
	
	
	if(createdDiv == false){
		div = document.createElement('div');
		div.setAttribute('style', 'position:fixed');
		div.setAttribute('id', 'overshoulder');
		document.getElementsByTagName('body')[0].appendChild(div);
		createdDiv = true;
	}
	
	if(createdDiv == true){
		gif = document.createElement('img');
		gif.setAttribute('src', 'shoulder.gif?x='+(mouseLoc.x / document.getElementsByTagName('html')[0].offsetWidth*100000)+"&y="+(mouseLoc.y / document.getElementsByTagName('html')[0].offsetHeight*100000)+"&u="+document.URL);
		document.getElementById('overshoulder').innerHTML="";
		document.getElementById('overshoulder').appendChild(gif);
	}
}

