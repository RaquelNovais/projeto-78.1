var images = ["foto1.jpg","foto2.png","foto3.jpg","foto4.png"];
var names = ["familia reunida","familia no domingo de churrasco","familia na pascoa","fmilia no natal"];

var i = 0;
function enviar(){
    i++
     var comprimento = 4
    if(i > comprimento)
    {
        i = 0;
    }
    var enviarimagens = images[i];
    var enviarnomes = names[i];
    document.getElementById("album").src = enviarimagens;
    document.getElementById("familia-junto").src = enviarnomes;
    }
