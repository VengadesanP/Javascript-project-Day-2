function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition:"+c;
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="Subraction:"+c;
}
function multiply(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="Multiplication:"+c;
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="Division:"+c;
}
function power(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a**b;
    document.getElementById("button5").innerHTML="Power:"+c;
}
function modulus(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a%b;
    document.getElementById("button6").innerHTML="Modulus:"+c;
}
function square(){
    let a=parseInt(document.getElementById("n1").value);
    let c=a**2
    document.getElementById("button7").innerHTML="Square:"+c;
}