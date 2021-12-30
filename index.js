//import ClipboardJS from 'clipboard'; //copy text to clipboard

//const ClipboardJS = require("clipboard");

let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");
let result = document.getElementById("result");
let picker = document.getElementById("picker");
let resultColor= document.getElementById("colorResult")

picker.addEventListener("click",()=>{
    resultColor.innerHTML=picker.value
})

function getHex(a){
    if(a>=0 && a<=255){
        let hex = a.toString(16)
       let result = hex.length === 1 ? "0"+hex : hex;
       console.log(result)
       return result;
    }
    else if(a>255){
        return "ff"
    }
    else{
        return "00"
    }  
}

function submit(){
    console.log(getHex(Number(r.value)) + getHex(Number(g.value)) + getHex(Number(b.value)))
    let hex="#" + getHex(Number(r.value)) + getHex(Number(g.value)) + getHex(Number(b.value))
    return result.innerHTML=hex;
}

//clipboard

new ClipboardJS('button');
