

function add(){
    let a=document.getElementById("first_number").value;
    let b=document.getElementById("second_number").value;
    let res= Number(a)+Number(b);
    document.getElementById("result").innerHTML=`Result is ${res}`;
}
function multiply(){
    let a=document.getElementById("first_number").value;
    let b=document.getElementById("second_number").value;
    let res= Number(a)*Number(b);
    document.getElementById("result").innerHTML=`Result is ${res}`;
}
function divide(){
    let a=document.getElementById("first_number").value;
    let b=document.getElementById("second_number").value;
    let res= Number(a)/Number(b);
    document.getElementById("result").innerHTML=`Result is ${res}`;
}
function subtract(){
    let a=document.getElementById("first_number").value;
    let b=document.getElementById("second_number").value;
    let res= Number(a)-Number(b);
    document.getElementById("result").innerHTML=`Result is ${res}`;
}


