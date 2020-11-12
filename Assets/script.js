gsap.from('.container', {duration: 2, opacity: 0, stagger: 0.5, y: 500});

let holder = document.querySelector('.container')
let allBtn = document.querySelectorAll('.buttons .button')
let numButtons = document.querySelectorAll(".num-button")
let actionButtons = document.querySelectorAll(".calc-action-btn")
let Result = document.querySelector("#result-box")
let Backspace = document.querySelector("#backspace");
let total = document.querySelector("#total")
let clear = document.querySelector("#clear")
let percent = document.querySelector("#percent")
let body = document.querySelector("body")

// Array 

let numB = [...numButtons]
let allBtns = [...allBtn]

// Dark Mode

let btn = document.querySelector("#tUbahWarna")


btn.addEventListener("click",function() {

     if (body.classList.toggle("dark")) {

         btn.addEventListener("click", function() {
            holder.classList.add("flip-in-ver-left")
         })
     }   
});


// Input Numbers to result Box

numB.forEach(function(button,i) {
    button.addEventListener("click",function(){
        if (Result == "0") {
            Result.innerHTML = "";
        }
    
        // setiap teks html pada nilai num buttons
        let value = numButtons[i].innerHTML;
        // masukkan teks html pada Result berupa teks html pada nilai value
        Result.innerHTML += value;
    })
})

//  Clear button

clear.addEventListener("click", function(){
    Result.innerHTML = "";
})

// Backspace Button

 Backspace.addEventListener("click", function(){
     let value = Result.innerHTML;
     Result.innerHTML = value.substring(0, value.length - 1);
 })


// % Button

percent.addEventListener("click", function(){
    Result.innerHTML /= 100;
})

// Evaluate All Input

function evaluate(eval) {
    return new Function('return ' + eval)();
}
    
// To calculate All Input

total.addEventListener('click', function() {
    let allInputs = Result.innerHTML;
    Result.innerHTML = evaluate(allInputs);
})
    
