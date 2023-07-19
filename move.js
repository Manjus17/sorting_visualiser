var speed = 100;
var speedslider = document.getElementById('speedslider');

var in_speed = document.getElementById('speed');

in_speed.addEventListener("input",change_speed);

function change_speed(){
    var array_speed = in_speed.value;
    speedslider.innerHTML = `Speed : ${array_speed}`;

    switch(parseInt(array_speed)){
        case 1: speed = 1;
        break;

        case 2: speed = 10;
        break;

        case 3: speed = 100;
        break;

        case 4: speed = 1000;
        break;

        case 5: speed = 10000;
        break;
    }

    delay_time = 10000/(Math.floor(array_size/10)*speed);
}
var delay_time=10000/(Math.floor(array_size/10)*speed);  

var c_delay = 0;

function div_update(cont, height, color){
    window.setTimeout(function(){
        cont.style = "margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color +";";
    },c_delay+=delay_time);
}

function enable_buttons(){
    window.setTimeout(function(){
        in_si.disabled=false;
        init.disabled=false;
        in_speed.disabled=false;
        code.disabled=false;
        complex.disabled=false;
        play.disabled=false;
    },c_delay+=delay_time);
}

