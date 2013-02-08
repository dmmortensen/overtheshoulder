
if(document.URL != 'http://10.0.1.7/overtheshoulder/showposition.php' && document.URL != 'http://localhost/overtheshoulder/showposition.php'){

window.onmousemove=getPos;
window.onscroll=scrollPos;
showInterval = self.setInterval(createIframe, 100);

}
var mouseLoc={'x':0,'y':0};
var lastScroll={'x':0,'y':0};
function getPos(e){
	if(Math.abs(e.clientX -(mouseLoc.x)) > (window.outerWidth*.005) || Math.abs(e.clientY - (mouseLoc.y)) > (window.outerHeight*.005)){
		lastScroll={'x':(window.pageXOffset),'y':(window.pageYOffset)};
		mouseLoc= {'x' : e.clientX, 'y' : e.clientY};
		console.log('x='+mouseLoc.x+'y='+mouseLoc.y);
		// createIframe();
	}
}


function scrollPos(e){
	lastScroll={'x':(window.pageXOffset),'y':(window.pageYOffset)};
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
		xQuery = ((mouseLoc.x+lastScroll.x) / document.getElementsByTagName('html')[0].offsetWidth*100000);
		yQuery = ((mouseLoc.y+lastScroll.y) / document.getElementsByTagName('html')[0].offsetHeight*100000);
		gif = document.createElement('img');
		gif.setAttribute('src', 'shoulder.gif?x='+xQuery+"&y="+yQuery+"&u="+document.URL);
		document.getElementById('overshoulder').innerHTML="";
		document.getElementById('overshoulder').appendChild(gif);
	}
}

