console.log("karthika ");
const a=6;
const b=30;
console.log(a+b);
const str="love you"
console.log(str);
const arr=[3,3.6,"him❤️",false];
console.log(arr);
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.push("karthika");
console.log(arr);
arr.pop();
console.log(arr);
// syntax of function: function fun_name(){}
function ex(){
    console.log("written something");
}
const ptag=document.getElementById("ptag")
ptag.innerHTML="im karthika"

const input=document.getElementById("input")
const output=document.getElementById("inputField")

input.addEventListener("input", ()=>{
    output.textContent=input.value
})
 const first = document.createElement("h1")
 first.textContent = "im gonna achieve this"
 document.body.appendChild(first)

 first.remove()