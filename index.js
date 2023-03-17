

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    playSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
  });
}


document.addEventListener("keypress",function(event){

  console.log(event);
  playSound(event.key);
  addAnimation(event.key);
});
function playSound(key)
{
  switch(key)
  {
      case "w":
        var wAudio = new Audio("sounds/crash.mp3");
        wAudio.play();
        break;
      case "a":
        var aAudio = new Audio("sounds/kickbass.mp3");
        aAudio.play();
        break;
      case "s":
        var sAudio = new Audio("sounds/snare.mp3");
        sAudio.play();
        break;
      case "d":
        var dAudio = new Audio("sounds/tom1.mp3");
        dAudio.play();
        break;
      case "j":
        var jAudio = new Audio("sounds/tom2.mp3");
        jAudio.play();
        break;
      case "k":
        var kAudio = new Audio("sounds/tom3.mp3");
        kAudio.play();
        break;
      case "l":
        var lAudio = new Audio("sounds/tom4.mp3");
        lAudio.play();
        break;
  }
}

function addAnimation(currentKey)
{
  var activeClass = document.querySelector("."+currentKey);
  activeClass.classList.add("pressed");
  setTimeout(function()
  {
     activeClass.classList.remove("pressed")
  }, 100);
}

