function calc(e){

   var operacao = e.value;
   
   var n1=parseFloat(document.getElementById("n1").value);
   var n2=parseFloat(document.getElementById("n2").value);
   
   var calculo = eval(n1+operacao+n2);
   
   var f=document.getElementById("frm");
   var resultado = f.result;

   if(!isNaN(calculo)){
      resultado.value = calculo;
      
   }
   
}

function limpar(){
   var f2=document.getElementById("frm");
   var n1 = f2.n1;
   var n2 = f2.n2;
   var resultado = f2.result;
   n1.value = "";
   n2.value = "";
    resultado.value = "";
}