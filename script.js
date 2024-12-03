const inputSlider=document.getElementById('inputSlider');
const sliderValue=document.getElementById('sliderValue');
const Span=sliderValue.querySelector("span");
const passBox=document.getElementById("passBox");
const lowercase=document.getElementById("lowercase");
const uppercase=document.getElementById("uppercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const genBtn=document.getElementById("genBtn");

Span.textContent=inputSlider.value;

inputSlider.addEventListener('input',()=>{
    Span.textContent=inputSlider.value;
})
genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="~1@#$%^&*"
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked ? lowerChars:"";
    allChars+=uppercase.checked ? upperChars:"";
    allChars+=numbers.checked ? allNumbers:"";
    allChars+=symbols.checked ? allSymbols:"";

    if(allChars==""||allChars.length==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }

    return genPassword;
}