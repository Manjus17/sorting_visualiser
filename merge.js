var play = document.getElementById('play');
play.addEventListener("click", merge);

function merge(){
    disable_buttons();
    c_delay = 0;
    merge_partition(0, array_size-1);
    enable_buttons();
}

function mergesort(start, mid, end){
    var p = start;
    var q = mid+1;

    var arr = [];
    var k = 0;

    for(var i=start; i<=end; i++){
        if(p>mid){
            arr[k++] = div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"#73BBC9"); //color update
        }
        else if(q > end){
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"#73BBC9");//Color update
        }
        else if(div_sizes[p] < div_sizes[q]){
            arr[k++] = div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"#73BBC9");//Color update
        }
        else{
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"#73BBC9");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=arr[t];
        div_update(divs[start-1],div_sizes[start-1],"#65C18C");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"#F5A31A");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        mergesort(start,mid,end);
    }
}