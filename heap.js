var play = document.getElementById('play');
play.addEventListener("click", heap);

function heap(){
    disable_buttons();
    c_delay=0;
    heap_sort();
    enable_buttons();
}

function swap(i,j){
    div_update(divs[i],div_sizes[i],"#73BBC9");
    div_update(divs[j],div_sizes[j],"#73BBC9");

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"#73BBC9");
    div_update(divs[j],div_sizes[j],"#73BBC9");

    div_update(divs[i],div_sizes[i],"#C88EA7");
    div_update(divs[j],div_sizes[j],"#C88EA7");
}

function max_heapify(n,i){
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest]){
        if(largest!=i){
            div_update(divs[largest],div_sizes[largest],"#C88EA7");
        }
        largest=l;

        div_update(divs[largest],div_sizes[largest],"#73BBC9");
    }

    if(r<n && div_sizes[r]>div_sizes[largest]){
        if(largest!=i){
            div_update(divs[largest],div_sizes[largest],"#C88EA7");
        }
        largest=r;

        div_update(divs[largest],div_sizes[largest],"#73BBC9");
    }

    if(largest!=i){
        swap(i,largest);
        max_heapify(n,largest);
    }
}

function heap_sort(){
    for(var i=Math.floor(array_size/2)-1;i>=0;i--){
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--){
        swap(0,i);
        div_update(divs[i],div_sizes[i],"#65C18C");
        div_update(divs[i],div_sizes[i],"#F5A31A");

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"#C88EA7");
        div_update(divs[i],div_sizes[i],"#65C18C");
    }
    div_update(divs[i],div_sizes[i],"#65C18C");
}