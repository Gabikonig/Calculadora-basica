function media(){    
    var nota1=parseFloat (document.getElementById ('nota1').value);
    var nota2=parseFloat (document.getElementById ('nota2').value);    
    var nota3=parseFloat (document.getElementById ('nota3').value);
    if(nota1<0 || nota2<0 || nota3<0){
        alert('Nota inválida!');
        return;        
    }
    var media=(nota1+nota2+nota3)/3;   
    alert ("A média é: " + media);    
}

function mudar(){
    window.location.href="index2.html"
}

