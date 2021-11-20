const elTitle = document.querySelector("#subtitle")
const elForm = document.querySelector("#form")
const elInput = document.querySelector("#input")
const elCheckbox1 = document.querySelector("#chec1")
const elCheckbox2 = document.querySelector("#chec2")
 
let rain = elCheckbox1.value
let zall = elCheckbox2.value

elForm.addEventListener("submit", function(e){
e.preventDefault();

let elInputValue = elInput.value -0; 

if(!isNaN(elInputValue)){

    if((elInputValue >= 5 && elInputValue <=30)){
        yes.style.color = "green";
        elInput.style.border = "2px solid green";
        no.style.color = "black";
    } else if(rain){
        elInput.style.border = "2px solid red";
        no.style.color = "red"; 
        yes.style.color = "black";
    }
}else{
    elInput.style.border = "2px solid red";
    no.style.color = "black";
    alert("Raqam kiriting")
}


elInputValue = "";
})  