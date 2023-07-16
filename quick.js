var play = document.getElementById('play');
play.addEventListener("click", quick);

function quick(){
    disable_buttons();
    c_delay=0;
    quick_sort(0,array_size-1);
    enable_buttons();
}

function quick_partition (start, end){
    var i = start + 1;
    var piv = div_sizes[start] ;
    div_update(divs[start],div_sizes[start],"#F5A31A");

        for(var j =start + 1; j <= end ; j++ ){
            if (div_sizes[ j ] < piv){
                div_update(divs[j],div_sizes[j],"#F5A31A");

                div_update(divs[i],div_sizes[i],"#73BBC9");
                div_update(divs[j],div_sizes[j],"#73BBC9");

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"#73BBC9");
                div_update(divs[j],div_sizes[j],"#73BBC9");

                div_update(divs[i],div_sizes[i],"blue");
                div_update(divs[j],div_sizes[j],"blue");

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"#73BBC9");
    div_update(divs[i-1],div_sizes[i-1],"#73BBC9");
    
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"#73BBC9");
    div_update(divs[i-1],div_sizes[i-1],"#73BBC9");

    for(var t=start;t<=i;t++){
        div_update(divs[t],div_sizes[t],"#65C18C");
    }

    return i-1;
}

function quick_sort (start, end ){
    if( start < end ){
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
 }