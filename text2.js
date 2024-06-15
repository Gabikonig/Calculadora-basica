function conta(){    
    var opcao=(document.getElementById ('operacao').value)  
    var valor1=parseFloat (document.getElementById ('valor1').value);    
    var valor2=parseFloat (document.getElementById ('valor2').value);
    var result; 

   if(opcao!="+" && opcao!="-" && opcao!="*" && opcao!="/"){
    alert ("Operação inválida");
    return;
   }
   if (isNaN(valor1) || isNaN(valor2)) {
    alert("Número inválido");
    return;
   }

   switch(opcao){
      case "+":
        result = valor1 + valor2;
        break;
      case "-":
        result=valor1-valor2;
        break;
      case "*":
        result = valor1*valor2;
        break;
      case "/":
        if (valor2==0){
            alert ("Segundo valor inválido");
        }
        else{
            result=valor1/valor2;
        }
        break;   
    } 
 alert ("Resultado: " + result);
}

 function mudar(){
    window.location.href="index.html";
}
