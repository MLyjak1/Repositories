var box=document.getElementById("box");
var growBtn=document.getElementById("button1");
var blueBtn=document.getElementById("button2");
var fadeBtn=document.getElementById("button3");
var resetBtn=document.getElementById("button4");


growBtn.addEventListener("click", function(){
      box.style.height="300px"
      box.style.width="300px"
})

blueBtn.addEventListener("click", function(){
      box.style.backgroundColor="blue"
})

fadeBtn.addEventListener("click", function(){
      box.style.opacity="0.5"
})

resetBtn.addEventListener("click", function(){
      box.style="height:150px; width:150px; background-color:orange; margin:25px"      
})

