
//All Clear Reset function
function ResetAllBox(){
    location.reload();
    document.getElementsByClassName('box').value = '';
}

//Here function is used for turns of which player X or 0;
flag = 1;
function CheckPlayer1(){
    if(flag == 1){
        document.getElementById('box1').value='X'
        document.getElementById('box1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box1').value='0'
        document.getElementById('box1').disabled = true
        flag = 1;
    }
}

function CheckPlayer2(){
    if(flag == 1){
        document.getElementById('box2').value='X'
        document.getElementById('box2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box2').value='0'
        document.getElementById('box2').disabled = true
        flag = 1;
    }
}

function CheckPlayer3(){
    if(flag == 1){
        document.getElementById('box3').value='X'
        document.getElementById('box3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box3').value='0'
        document.getElementById('box3').disabled = true
        flag = 1;
    }
}

function CheckPlayer4(){
    if(flag == 1){
        document.getElementById('box4').value='X'
        document.getElementById('box4').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box4').value='0'
        document.getElementById('box4').disabled = true
        flag = 1;
    }
}

function CheckPlayer5(){
    if(flag == 1){
        document.getElementById('box5').value='X'
        document.getElementById('box5').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box5').value='0'
        document.getElementById('box5').disabled = true
        flag = 1;
    }
}

function CheckPlayer6(){
    if(flag == 1){
        document.getElementById('box6').value='X'
        document.getElementById('box6').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box6').value='0'
        document.getElementById('box6').disabled = true
        flag = 1;
    }
}

function CheckPlayer7(){
    if(flag == 1){
        document.getElementById('box7').value='X'
        document.getElementById('box7').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box7').value='0'
        document.getElementById('box7').disabled = true
        flag = 1;
    }
}

function CheckPlayer8(){
    if(flag == 1){
        document.getElementById('box8').value='X'
        document.getElementById('box8').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box8').value='0'
        document.getElementById('box8').disabled = true
        flag = 1;
    }
}

function CheckPlayer9(){
    if(flag == 1){
        document.getElementById('box9').value='X'
        document.getElementById('box9').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('box9').value='0'
        document.getElementById('box9').disabled = true
        flag = 1;
    }
}

// function CheckPlayer1(){
//     if(flag == 1){
//         document.getElementById('box1').value='X'
//         document.getElementById('box1').disabled = true;
//         flag = 0;
//     }
//     else{
//         document.getElementById('box1').value='0'
//         document.getElementById('box1').disabled = true
//         flag = 1;
//     }
// }

//Checking who is Winner
function Winner(){
    var box1,box2,box3,box4,box5,box6,box7,box8,box9;
    box1 = document.getElementById('box1').value;
    box2 = document.getElementById('box2').value;
    box3 = document.getElementById('box3').value;
    box4 = document.getElementById('box4').value;
    box5 = document.getElementById('box5').value;
    box6 = document.getElementById('box6').value;
    box7 = document.getElementById('box7').value;
    box8 = document.getElementById('box8').value;
    box9 = document.getElementById('box9').value;

    //check Weteher X is win or not and after that all box will be disabled
    //checking X and 0 for box 1, 2 and 3
    if(box1 == 'X' && box2 == 'X' && box3 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true
        document.getElementById('box6').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;        
    }
    else if(box1 == '0' && box2 == '0' && box3 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true
        document.getElementById('box6').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }
        //checking X and 0 for box 4, 5 and 6 

    else if(box4 == 'X' && box5 == 'X' && box6 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }
    else if(box4 == '0' && box5 == '0' && box6 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }

     //checking X and 0 for box 7, 8 and 9 

     else if(box7 == 'X' && box8 == 'X' && box9 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true;
        document.getElementById('box6').disabled = true;
    }
    else if(box7 == '0' && box8 == '0' && box9 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box4').disabled = true;
        document.getElementById('box5').disabled = true;
        document.getElementById('box6').disabled = true;
    }

     //checking X and 0 for box 1, 4 and 7 

     else if(box1 == 'X' && box4 == 'X' && box7 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box5').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }
    else if(box1 == '0' && box4 == '0' && box7 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box5').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }

     //checking X and 0 for box 2, 5 and 8 

     else if(box2 == 'X' && box5 == 'X' && box8 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box4').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box9').disabled = true;
    }
    else if(box2 == '0' && box5 == '0' && box8 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box4').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box9').disabled = true;
    }

     //checking X and 0 for box 3, 6 and 9 

     else if(box3 == 'X' && box6 == 'X' && box9 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box4').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box5').disabled = true;
    }
    else if(box3 == '0' && box6 == '0' && box9 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box4').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box5').disabled = true;
    }

     //checking X and 0 for box 1, 5 and 9 

     else if(box1 == 'X' && box5 == 'X' && box9 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box4').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box6').disabled = true;
    }
    else if(box1 == '0' && box5 == '0' && box9 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box4').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box3').disabled = true;
        document.getElementById('box7').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box6').disabled = true;
    }

     //checking X and 0 for box 3, 5 and 7 

     else if(box3 == 'X' && box5 == 'X' && box7 == 'X'){
        document.getElementById('result').innerHTML="Hooray!!! Player X is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box4').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }
    else if(box3 == '0' && box5 == '0' && box7 == '0'){
        document.getElementById('result').innerHTML="Hooray!!! Player 0 is Winner";
        document.getElementById('box1').disabled = true;
        document.getElementById('box2').disabled = true
        document.getElementById('box4').disabled = true;
        document.getElementById('box6').disabled = true;
        document.getElementById('box8').disabled = true;
        document.getElementById('box9').disabled = true;
    }

    //When Match is Tie
    else if((box1 == 'X' || box1 =='0') && (box2 == 'X' || box2 == '0') &&
            (box3 == 'X' || box3 =='0') && (box4 == 'X' || box4 == '0') &&
            (box5 == 'X' || box5 =='0') && (box6 == 'X' || box6 == '0') &&
            (box7 == 'X' || box7 =='0') && (box8 == 'X' || box8 == '0') &&
            (box9 == 'X' || box9 =='0') ){
        document.getElementById('result').innerHTML="OMG !!! The Match is tie "
    }

    else{
        if(flag == 1){
            document.getElementById('result').innerHTML="Player X chance"
        }
        else
        {
            document.getElementById('result').innerHTML="Player 0 chance"
        }
    }
}