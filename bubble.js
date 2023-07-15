var playbubble = document.getElementById('play');
playbubble.addEventListener("click", bubble);

function bubble(){
    disable_buttons();
    c_delay = 0;
    
    for(var i=0; i<array_size-1; i++){
        for(var j=0; j<array_size-i-1; j++){
            div_update(divs[j], div_sizes[j], "#F5A31A");

            if(div_sizes[j] > div_sizes[j+1]){
                div_update(divs[j], div_sizes[j], "#73BBC9");
                div_update(divs[j+1], div_sizes[j+1], "#73BBC9");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;

                div_update(divs[j], div_sizes[j], "#73BBC9");
                div_update(divs[j+1], div_sizes[j+1], "#73BBC9");
            }

            div_update(divs[j], div_sizes[j], "#C88EA7");
        }
        div_update(divs[j], div_sizes[j], "#65C18C");
    }
    div_update(divs[0], div_sizes[0], "#65C18C");

    enable_buttons();
}