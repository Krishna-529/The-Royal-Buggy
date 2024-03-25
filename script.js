let swapped_1 = false;
let dice_1_face = 'left-dice';
let finalOn_1 = 1;
let finalOn_2 = 1;
let x=0, y=0;
function roll_1() {
    if (swapped_1 == false) {
        
        const rolling = setInterval(function () {
            change_the_dice_1();
            x++;
            if (x == 10) {
                clearInterval(rolling);
            }
        }, 200);
        swapped_1 = true;
    }
    setTimeout(function(){
    result(x, y, finalOn_1, finalOn_2);
    }, 3000);
}


function change_the_dice_1(){
    var on_dice = Math.floor(Math.random()*6)+1;
    var element = document.getElementById("player-1");
    if(on_dice == 1){
        element.classList.replace(dice_1_face, 'dice-has-1');
        dice_1_face = 'dice-has-1';
        finalOn_1 = 1;
    }
    else if(on_dice == 2){
        element.classList.replace(dice_1_face, 'dice-has-2');
        dice_1_face = 'dice-has-2';
        finalOn_1 = 2;
    }
    else if(on_dice == 3){
        element.classList.replace(dice_1_face, 'dice-has-3');
        dice_1_face = 'dice-has-3';
        finalOn_1 = 3;
    }
    else if(on_dice == 4){
        element.classList.replace(dice_1_face, 'dice-has-4');
        dice_1_face = 'dice-has-4';
        finalOn_1 = 4;
    }
    else if(on_dice == 5){
        element.classList.replace(dice_1_face, 'dice-has-5');
        dice_1_face = 'dice-has-5';
        finalOn_1 = 5;
    }
    else{
        element.classList.replace(dice_1_face, 'dice-has-6');
        dice_1_face = 'dice-has-6';
        finalOn_1 = 6;
    }
}

let swapped_2 = false;
let dice_2_face = 'right-dice';
function roll_2() {
    if (swapped_2 == false) {
        const rolling = setInterval(function () {
            change_the_dice_2();
            y++;
            if (y == 10) {
                clearInterval(rolling);
            }
        }, 200);
        swapped_2 = true;
    }
    setTimeout(function(){
    result(x, y, finalOn_1, finalOn_2);
    }, 3000);
}


function change_the_dice_2(){
    var on_dice = Math.floor(Math.random()*6)+1;
    var element = document.getElementById("player-2");
    if(on_dice == 1){
        element.classList.replace(dice_2_face, 'dice-has-1');
        dice_2_face = 'dice-has-1';
        finalOn_2  = 1;
    }
    else if(on_dice == 2){
        element.classList.replace(dice_2_face, 'dice-has-2');
        dice_2_face = 'dice-has-2';
        finalOn_2  = 2;
    }
    else if(on_dice == 3){
        element.classList.replace(dice_2_face, 'dice-has-3');
        dice_2_face = 'dice-has-3';
        finalOn_2  = 3;
    }
    else if(on_dice == 4){
        element.classList.replace(dice_2_face, 'dice-has-4');
        dice_2_face = 'dice-has-4';
        finalOn_2  = 4;
    }
    else if(on_dice == 5){
        element.classList.replace(dice_2_face, 'dice-has-5');
        dice_2_face = 'dice-has-5';
        finalOn_2  = 5;
    }
    else{
        element.classList.replace(dice_2_face, 'dice-has-6');
        dice_2_face = 'dice-has-6';
        finalOn_2  = 6;
    }
}
let result = function(swapped_1,swapped_2, finalOn_1, finalOn_2)
{
    if(x==10 && y==10)
    {
        document.getElementsByClassName('cardholder')[0].style.zIndex = 1;
        if(finalOn_1 > finalOn_2){
            document.getElementById('card').classList.replace('card-1', 'card');
            document.getElementById('card').innerHTML = "<h2>Player-1 wins the argument!!</h2>";
        }
        else if(finalOn_1 < finalOn_2){
            document.getElementById('card').classList.replace('card-1', 'card');
            document.getElementById('card').innerHTML = "<h2>Player-2 wins the argument!!</h2>";
        }
        else{
            document.getElementById('card').classList.replace('card-1', 'card');
            document.getElementById('card').innerHTML = "<div><h2>It's a draw !!</h2><br/><hr/><p>I'd suggest to refresh again in order for reconciliation. Or you can continue with your arguments.</p></div>"
        }    
    }
}
