

/* fa el canvi del nav*/
function canvinav(nav){
	document.getElementsByClassName('row')[0].style.display='none';
	document.getElementsByClassName('row')[1].style.display='none';
	document.getElementsByClassName('row')[2].style.display='none';
	document.getElementsByClassName('row')[3].style.display='none';
	document.getElementsByClassName('row')[4].style.display='none';
	document.getElementsByClassName('row')[5].style.display='none';
	document.getElementsByClassName('row')[nav].style.display='flex';	
}

/*
Versió 2
-----------------------------------------------------------------
var array = document.getElementByClassName('row');
for (var i = 0; i < array.length; i++) {
	array[i].style.display='none';
}
document.getElementsByClassName('row')[nav].style.display='flex';		

Versió3
-----------------------------------------------------------------
var array = document.getElementsByClassName('row');
var i = 0;
while (i<array.length) {
	array[i].style.display='none';
	i++;
}
document.getElementsByClassName('row')[nav].style.display='flex';	

Versió4
-----------------------------------------------------------------
if (nav != window.navactual) {

	document.getElementsByClassName('row')[window.navactual].style.display='none';
	document.getElementsByClassName('row')[nav].style.display='flex';
	window.navactual=nav;
}
*/
