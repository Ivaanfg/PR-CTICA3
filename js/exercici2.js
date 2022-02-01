function exercici2() {
  var str = document.getElementById('exercici2').value;
  var lista = "";
  for (var i = str.length - 1; i >=0;i--) {
    lista += str[i];
  }
  window.alert(lista);

}
