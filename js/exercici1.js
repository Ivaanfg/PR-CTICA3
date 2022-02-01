function RevertirNumeros() {
  var str = document.getElementById('alertado').value;
  var lista = "";
  for (var i = str.length - 1; i >=0;i--) {
    lista += str[i];
  }
  window.alert(lista);

}
