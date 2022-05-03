var box=document.getElementById("box");
var growBtn=document.getElementById("button1");
var blueBtn=document.getElementById("button2");
var fadeBtn=document.getElementById("button3");
var resetBtn=document.getElementById("button4");
var popBtn=document.getElementById("button5");

growBtn.addEventListener("click", function(){
      box.style.height="300px"
})

blueBtn.addEventListener("click", function(){
      box.style.backgroundColor="blue"
})

fadeBtn.addEventListener("click", function(){
      box.style.opacity="0.5"
})

resetBtn.addEventListener("click", function(){
      box.addEventListener("mouseover", function(){
            box.style.boxShadow="2px 2px 2px grey"
      })
})

// box.addEventListener("mouseover", function(){
//       box.style.boxShadow="2px 2px 2px grey"
// })

box.addEventListener("mouseout", function(){
      box.style.boxShadow=""
})
