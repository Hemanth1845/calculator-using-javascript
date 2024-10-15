const display = document.getElementById("display");
function displayed(input){
    display.value += input;   
}

function clearvalue(){

    display.value ="";
}

function calculate(){

    try{
   display.value = eval(display.value);
    }
    catch(error){
        display.value ='error';
    }

}

function deleted(){
    display.value = display.value.slice(0, -1);
}