var play = document.getElementById('play');
play.addEventListener("click", insertion);

function insertion(){
    disable_buttons();
    c_delay = 0;

    for(var i=0; i<array_size; i++){
        div_update(divs[i], div_sizes[i], "#F5A31A");//yellow #A76F6F

        var key = div_sizes[i];
        var j = i - 1;
        while(j>=0 && div_sizes[j]>key){
            div_update(divs[j], div_sizes[j], "#73BBC9");//red
            div_update(divs[j+1], div_sizes[j+1], "#73BBC9");
            //color update red 

            div_sizes[j+1] = div_sizes[j];

            div_update(divs[j], div_sizes[j], "#73BBC9");//red
            div_update(divs[j+1], div_sizes[j+1], "#73BBC9");
            //height update red

            div_update(divs[j], div_sizes[j], "#C88EA7");//blue #C88EA7

            if(j == (i-1)){
                div_update(divs[j+1], div_sizes[j+1], "#F5A31A");//yellow
            }
            else{
                div_update(divs[j+1], div_sizes[j+1], "#C88EA7");
            }

            j-=1;
        }

        div_sizes[j+1] = key;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t],"#65C18C");//Color update green 
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"#65C18C"); // green

    enable_buttons();
}

