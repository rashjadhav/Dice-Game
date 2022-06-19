// var declare = document.getElementById("declare")
// var First = Math.floor(Math.random()*6+1)
// console.log(First)
// var Second = Math.floor(Math.random()*6+1)
// console.log(Second)

// if(First===Second)
// {
//     declare.innerText = "Draw Match" ; 
// }
// else if(First > Second)
// {
//     declare.innerText = " Player 1 is winner";
// }
 
// else
// {
//     declare.innerText = "Player 2 is winner";
// }

function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw Match!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                = ("Player 2 is winner");
        }

        else {
            document.querySelector("h1").innerHTML
                = ("Player 1 is winner");
        }
    }, 250);
}