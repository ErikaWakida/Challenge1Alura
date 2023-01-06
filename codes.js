
  function encriptar() {
    var texto = document.getElementById("texto-in").value.toLowerCase();
    var textoEnc = texto.replace (/a/igm,"ai");
    var textoEnc = textoEnc.replace (/e/igm,"enter");
    var textoEnc = textoEnc.replace (/i/igm,"imes");
    var textoEnc = textoEnc.replace (/o/igm,"ober");
    var textoEnc = textoEnc.replace (/u/igm,"ufat");

    document.getElementById("persona").style.display="none";
    document.getElementById("texto-escondido").style.display="none";

    document.getElementById("texto-out").innerHTML=textoEnc;

    document.getElementById("boton-copiar").style.display="show";
    document.getElementById("boton-copiar").style.display="inherit";
                                    }
    function desencriptar(){
    var texto = document.getElementById("texto-in").value.toLowerCase();
    var textoEnc = texto.replace (/ufat/g,"u");
    var textoEnc = textoEnc.replace (/enter/g,"e");
    var textoEnc = textoEnc.replace (/imes/g,"i");
    var textoEnc = textoEnc.replace (/ober/g,"o");
    var textoEnc = textoEnc.replace (/ai/g,"a");

    document.getElementById("persona").style.display="none";
    document.getElementById("texto-escondido").style.display="none";

    document.getElementById("texto-out").innerHTML=textoEnc;
    
    document.getElementById("boton-copiar").style.display="show";
    document.getElementById("boton-copiar").style.display="inherit";
                                   }


function copiarTexto() {
    var copyText = document.getElementById("texto-out");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);   
                                    }






