var result = document.getElementById("result");

     //SPØRSMÅL 1
   

document.getElementById("svar1").onclick = function()
 {
  var radios = document.getElementsByName("q1");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;
  
  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }

  } 
 
  if(!checked) {
    alert("velg et alternativ");
    return;
 
  }
  // riktig svar.
  if(userAnswer === "b") {
     alert("svaret er korrekt :)");
 
  }
  // feil svar.
  else {
     alert("svaret er feil :(");
 
  }
  
}

    //SPØRSMÅL 2

document.getElementById("svar2").onclick = function(){
var answer=document.getElementById("SPM2");
 if(answer[answer.selectedIndex].value=="c"){
  alert("svaret er korrekt :)"); 
 }
     else {
     alert("svaret er feil :(");
      }
}


