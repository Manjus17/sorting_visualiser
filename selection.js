var playbubble = document.getElementById('play');
playbubble.addEventListener("click", selection);

function selection(){
    disable_buttons();
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#73BBC9");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#F5A31A");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#C88EA7");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#73BBC9");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#C88EA7");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#73BBC9");//Height update
            div_update(divs[i],div_sizes[i],"#73BBC9");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#C88EA7");//Color update
        }
        div_update(divs[i],div_sizes[i],"#65C18C");//Color update
    }
    div_update(divs[i],div_sizes[i],"#65C18C");//Color update

    enable_buttons();
}