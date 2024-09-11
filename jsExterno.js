var idCajero = document.getElementById("idCajero");
var mac = document.getElementById("mac");
var banelco = document.getElementById("banelco");
var link = document.getElementById("link");

banelco.addEventListener("click", function () {
 if (idCajero.value.length == 8) {
    var textoID = idCajero.value;
    var terceraLetra = textoID.charAt(2);
    var terceraLetraMayuscula = terceraLetra.toUpperCase();
    var primeraParte;
    var numeros = textoID.substring(5, 8);

    switch (terceraLetraMayuscula) {
      case "A":
        primeraParte = "000";
        break;
      case "B":
        primeraParte = "001";
        break;
      case "C":
        primeraParte = "003";
        break;
      case "D":
        primeraParte = "002";
        break;
      case "E":
        primeraParte = "004";
        break;
      case "F":
        primeraParte = "005";
        break;
      case "G":
        primeraParte = "006";
        break;
      case "H":
        primeraParte = "007";
        break;
      case "I":
        primeraParte = "008";
        break;
      case "J":
        primeraParte = "009";
        break;
      case "K":
        primeraParte = "010";
        break;
      case "L":
        primeraParte = "011";
        break;
      case "M":
        primeraParte = "012";
        break;
      case "N":
        primeraParte = "013";
        break;
      case "O":
        primeraParte = "014";
        break;
      case "P":
        primeraParte = "015";
        break;
    }
    mac.textContent = "La mac es: " + primeraParte + numeros + " 1100000100"; 
 } 
   else mac.textContent = "Los caracteres son insuficientes";
});

link.addEventListener("click", function () {

  if( /[a-zA-Z]/.test(idCajero.value))
    {
      mac.textContent = "Solo numeros en LINK";

  }
  else{

    if(idCajero.value.length <= 6){
      
      while(idCajero.value.length != 6){
        idCajero.value = "0" + idCajero.value;
      }
      mac.textContent = "La mac es: " + idCajero.value + "1100000010";
    }
    else
    {
      
      mac.textContent = "Hasta 6 digitos"
    }
  }
  });
  

  // Desarrollado por Franco Donato Gonzalez
  