let container = document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);

let bg = document.createElement("div");
bg.setAttribute("id","bg");

let form = document.createElement("form");
form.setAttribute("name","calculator");

let table = document.createElement("table");
table.setAttribute("class","table-borderless");

let tbody = document.createElement("tbody");

let tr1 = document.createElement("tr");
let td1 = document.createElement("td");
td1.setAttribute("colspan","4");
let display = document.createElement("input");
display.setAttribute("type","text");
display.setAttribute("name","display");
display.setAttribute("id","display");
display.setAttribute("disabled","");

let tr2 = createtr("C","DEL","/","*","cancel","delete","divide","multiply","C","DEL","/","*")
let tr3 = createtr("7","8","9","-","seven","eight","nine","minus","7","8","9","-");
let tr4 = createtr("4","5","6","+","four","five","six","plus","4","5","6","+")

let tr5 = document.createElement("tr");
let td51 = document.createElement("td");
let td52 = document.createElement("td");
let td53 = document.createElement("td");
let td54 = document.createElement("td");
td54.setAttribute("rowspan","2")
let button51 = document.createElement("button");
let button52 = document.createElement("button");
let button53 = document.createElement("button");
let button54 = document.createElement("button");
button51.setAttribute("type","button");
button51.setAttribute("class","btn btn-primary keys text-dark");
button51.textContent = "1";

button51.setAttribute("id","one");
button51.setAttribute("value","1");
button52.setAttribute("type","button");
button52.setAttribute("class","btn btn-primary keys text-dark");
button52.textContent = "2";
button52.setAttribute("id","two");
button52.setAttribute("value","2");
button53.setAttribute("type","button");
button53.setAttribute("class","btn btn-primary keys text-dark");
button53.textContent = "3";
button53.setAttribute("id","three");
button53.setAttribute("value","3");
button54.setAttribute("type","button");
button54.setAttribute("class","btn btn-danger keys equalkey text-dark");
button54.textContent = "=";
button54.setAttribute("id","equal");
button54.setAttribute("value","=");
td51.appendChild(button51);
td52.appendChild(button52);
td53.appendChild(button53);
td54.appendChild(button54);
tr5.append(td51,td52,td53,td54);

let tr6 = document.createElement("tr");
let td61 = document.createElement("td");
let td62 = document.createElement("td");
let td63 = document.createElement("td");

let button61 = document.createElement("button");
let button62 = document.createElement("button");
let button63 = document.createElement("button");
button61.setAttribute("type","button");
button61.setAttribute("class","btn btn-primary zerokey keys text-dark");
button61.textContent = "0";
button61.setAttribute("id","zero");
button61.setAttribute("value","0");
button62.setAttribute("type","button");
button62.setAttribute("class","btn btn-primary keys text-dark");
button62.textContent = ".";
button62.setAttribute("id","dot");
button62.setAttribute("value",".");
button63.setAttribute("type","button");
button63.setAttribute("class","btn btn-primary keys text-dark");
button63.textContent = "%";
button63.setAttribute("id","modulus");
button63.setAttribute("value","%");

td61.appendChild(button61);
td62.appendChild(button62);
td63.appendChild(button63);
tr6.append(td61,td62,td63);





//  function

function createtr(t1,t2,t3,t4,name1,name2,name3,name4,value1,value2,value3,value4) {
   let tr = document.createElement("tr");
   let td1 = document.createElement("td");
   let td2 = document.createElement("td");
   let td3 = document.createElement("td");
   let td4 = document.createElement("td");
   
   let button1 = document.createElement("button");
   let button2 = document.createElement("button");
   let button3 = document.createElement("button");
   let button4 = document.createElement("button");
   button1.setAttribute("type","button");
   button1.setAttribute("class","btn btn-primary keys text-dark");
   button1.textContent = t1;
   button1.setAttribute("id",name1);
   button1.setAttribute("value",value1);
   button2.setAttribute("type","button");
   button2.setAttribute("class","btn btn-primary keys text-dark");
   button2.textContent = t2;
   button2.setAttribute("id",name2);
   button2.setAttribute("value",value2);
   button3.setAttribute("type","button");
   button3.setAttribute("class","btn btn-primary keys text-dark");
   button3.textContent = t3;
   button3.setAttribute("id",name3);
   button3.setAttribute("value",value3);
   button4.setAttribute("type","button");
   button4.setAttribute("class","btn btn-primary keys text-dark");
      
   button4.textContent = t4;
   button4.setAttribute("id",name4);
   button4.setAttribute("value",value4);
   td1.appendChild(button1);
   td2.appendChild(button2);
   td3.appendChild(button3);
   td4.appendChild(button4);
   tr.append(td1,td2,td3,td4);
   return tr;
          
             
}


container.appendChild(bg);
bg.appendChild(form);
form.appendChild(table);
table.appendChild(tbody);
td1.appendChild(display);
tr1.appendChild(td1);
tbody.append(tr1,tr2,tr3,tr4,tr5,tr6);

// operations


document.getElementById("cancel").setAttribute("onclick","display.value = '' ");
document.getElementById("delete").setAttribute("onclick","display.value = (display.value.slice(0,-1)) ");
document.getElementById("divide").setAttribute("onclick","display.value += '/' ");
document.getElementById("multiply").setAttribute("onclick","display.value += '*' ");

document.getElementById("seven").setAttribute("onclick","display.value += '7' ");
document.getElementById("eight").setAttribute("onclick","display.value += '8' ");
document.getElementById("nine").setAttribute("onclick","display.value += '9' ");
document.getElementById("minus").setAttribute("onclick","display.value += '-' ");

document.getElementById("four").setAttribute("onclick","display.value += '4' ");
document.getElementById("five").setAttribute("onclick","display.value += '5' ");
document.getElementById("six").setAttribute("onclick","display.value += '6' ");
document.getElementById("plus").setAttribute("onclick","display.value += '+' ");


document.getElementById("one").setAttribute("onclick","display.value += '1' ");
document.getElementById("two").setAttribute("onclick","display.value += '2' ");
document.getElementById("three").setAttribute("onclick","display.value += '3' ");
document.getElementById("equal").setAttribute("onclick","display.value = eval(display.value)");

document.getElementById("zero").setAttribute("onclick","display.value += '0' ");
document.getElementById("dot").setAttribute("onclick","display.value += '.' ");
document.getElementById("modulus").setAttribute("onclick","display.value += '%' ");

document.onkeydown = function(e) {
   if(e.key == '1') {
      document.getElementById("display").value += "1";
   } else if (e.key == '2') {
      document.getElementById("display").value += "2";
   } else if (e.key == '3') {
      document.getElementById("display").value += "3";
   } else if (e.key == '4') {
      document.getElementById("display").value += "4";
   } else if (e.key == '5') {
      document.getElementById("display").value += "5";
   } else if (e.key == '6') {
      document.getElementById("display").value += "6";
   } else if (e.key == '7') {
      document.getElementById("display").value += "7";
   } else if (e.key == '8') {
      document.getElementById("display").value += "8";
   } else if (e.key == '9') {
      document.getElementById("display").value += "9";
   } else if (e.key == '0') {
      document.getElementById("display").value += "0";
   } else {
      alert("only numbers are allowed");
   }
}






