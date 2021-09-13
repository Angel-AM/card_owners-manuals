'use strict'

//variables
const manual = document.querySelector(".radio-container");

//eventlisteners
cargaEventListeners();

function cargaEventListeners(){
    document.addEventListener('click', infoManual)
}

//functions
function infoManual(event){
    //event.preventDefault();
    //console.log(event.target.parentElement.classList);
    const manual = event.target.parentElement.innerHTML;
    if (event.target.parentElement.classList.contains('radio-container')){
        console.log(true);
        readinfo(manual);
        
    }else{
        console.log();
    }
}


function readinfo(manual){
    //console.log(manual);
    const objCar = {
        model:manual.querySelector('model-year').value ,
        year: '' 
    }
    console.log(objCar);
}