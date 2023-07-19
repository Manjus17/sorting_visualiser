var in_si = document.getElementById('range');
var array_size = in_si.value;
var init = document.getElementById('init');
var element = document.getElementById('element');
var code = document.getElementById('code');
var complex = document.getElementById('complex');
var play = document.getElementById('play');

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.querySelector('.container');
cont.style = "flex-direction:row";

var count = 0;

init.addEventListener("click",generate_array);
in_si.addEventListener("input",update_array_size);

function generate_array(){
    cont.innerHTML = "";

    for(var i=0; i<array_size; i++){
        count += 1;
        console.log(count);
        div_sizes[i] = Math.floor(Math.random()*1.2*(in_si.max - in_si.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = "margin:0%" + margin_size + "%; background-color:#C88EA7; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}


function update_array_size(){
    array_size = in_si.value;
    element.innerHTML = `Element : ${array_size}`;
    generate_array();
}

window.onload = update_array_size();

function disable_buttons()
{
    in_si.disabled=true;
    in_speed.disabled=true;
    init.disabled=true;
    code.disabled=true;
    complex.disabled=true;
    play.disabled=true;
}