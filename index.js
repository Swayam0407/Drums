// function handleclick(){
//     alert("i have been clicked");
// }

 var nofdrum = document.querySelectorAll(".drum").length;

// for(var i=0;i<nofdrum;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
// }

//  for(var i=0;i<nofdrum;i++){
//  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     var audio = new Audio ("sounds/crashh.mp3");
//     audio.play();
//  });
//  }


 for(var i = 0;i<nofdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var exp = this.innerHTML; 
        makeSound(exp);
        anibutton(exp);
        
        
        switch(exp){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/crashh.mp3");
                audio.play();
                break;

            default:
                console.log(exp);

        }
        
        
    });
 }


 document.addEventListener("keypress", function(event){
    makeSound(event.key);
    anibutton(event.key);
});


function makeSound(key){

    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/crashh.mp3");
            audio.play();
            break;

        default:
            console.log(exp);

    }

}

function anibutton(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100);
}






