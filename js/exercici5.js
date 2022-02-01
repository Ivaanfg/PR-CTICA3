function pintarParag() {
  document.getElementsByClassName('parag')[0].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[1].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[2].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[3].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[4].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[5].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[6].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[7].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[8].style.backgroundColor='blue';
  document.getElementsByClassName('parag')[9].style.backgroundColor='blue';
}

function calcula(val){

if (val == '=') {
	document.getElementById('inputCal').value=eval(document.getElementById('inputCal').value);
}
else if (val == 'C') {
	document.getElementById('inputCal').value= ('')
}
else {
	document.getElementById('inputCal').value = document.getElementById('inputCal').value+val;
}
}
/*
// Versión 1
function pintarParag1() {
  var array=document.getElementsByClassName('parag');
  for (var i = 0; i < array.length; i++) {
    array[i].style.color='red';
  }
}

// Versión 2
function pintarParag2() {
  var array=document.getElementsByClassName('parag');
  var aux=0;
  while (aux<array.length) {
    //array[aux].style.fontsize('40px');
    array[aux].style.display='none';
    // visibility='hidden'
    aux++; // aux = aux + 1;
  }
}

//
function clicaperpostejar(){
  var v=document.getElementsByTagName('inputCal')[0].value;
  console.log(v);
  document.getElementById('PA').innerHTML = v;
*/
