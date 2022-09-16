// condition 1 - At least one select
//condition 2 - No duplicate cities
function myfunForSubmitBtn(){
    drop1 = document.getElementById('drop1').value
    drop2 = document.getElementById('drop2').value
    drop3 = document.getElementById('drop3').value
    if(drop1 == ''){
        document.getElementById('showinfo').innerText = 'Select atlest one city from dropdown list' ;
        
    }
    else if(drop1 == drop2 || drop1 == drop3 || drop2 == drop3){
        document.getElementById('showinfo').innerText = "Don't select same cities from dropdown list...Please Select another City";
    }
    else{
        document.getElementById('showinfo').innerText = "your data is saved successfully";
    }
}

//condition 3 - In sequence  
function myfunFor1stDropdown(){
    var drop1= document.getElementById('drop1').value;
    var drop2 = document.getElementById('drop2');
    
    if(drop1 !== ''){
        drop2.removeAttribute('disabled')
    }
}

function myfunFor2ndDropdown(){
    drop2 = document.getElementById('drop2').value;
    var drop3 = document.getElementById('drop3');
    if(drop2 !== ''){
        drop3.removeAttribute('disabled');
    }
}

function myfunFor3rdDropdown(){
    drop3 = document.getElementById('drop3').value
}
