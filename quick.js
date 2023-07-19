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

 function ccode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    c.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    py.style = "padding: 0px; background: black; font-size: 20px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    java.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int t = *a;<br>&emsp;*a = *b;<br>&emsp;*b = t;<br>}<br><br><br>int partition(int array[], int low, int high) {<br><br>&emsp;  int pivot = array[high];<br>&emsp;int i = (low - 1);<br><br>&emsp;for (int j = low; j < high; j++) {<br>&emsp;&emsp;if (array[j] <= pivot) {<br>&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;&emsp;swap(&array[i], &array[j]);<br>&emsp;&emsp;}<br>&emsp;}<br><br>&emsp;swap(&array[i + 1], &array[high]);<br>&emsp;return (i + 1);<br>}<br><br><br>void quickSort(int array[], int low, int high) {<br>&emsp;if (low < high) {<br>&emsp;&emsp;int pi = partition(array, low, high);<br><br>&emsp;&emsp;quickSort(array, low, pi - 1);<br>&emsp;&emsp;quickSort(array, pi + 1, high);<br>&emsp;}<br>}";
}

function cppcode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    cpp.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    py.style = "padding: 0px; background: black; font-size: 20px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    java.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int t = *a;<br>&emsp;*a = *b;<br>&emsp;*b = t;<br>}<br><br><br>int partition(int array[], int low, int high) {<br><br>&emsp;  int pivot = array[high];<br>&emsp;int i = (low - 1);<br><br>&emsp;for (int j = low; j < high; j++) {<br>&emsp;&emsp;if (array[j] <= pivot) {<br>&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;&emsp;swap(&array[i], &array[j]);<br>&emsp;&emsp;}<br>&emsp;}<br><br>&emsp;swap(&array[i + 1], &array[high]);<br>&emsp;return (i + 1);<br>}<br><br><br>void quickSort(int array[], int low, int high) {<br>&emsp;if (low < high) {<br>&emsp;&emsp;int pi = partition(array, low, high);<br><br>&emsp;&emsp;quickSort(array, low, pi - 1);<br>&emsp;&emsp;quickSort(array, pi + 1, high);<br>&emsp;}<br>}";
}

function pycode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    py.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    java.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "def partition(array, low, high):<br>&emsp;pivot = array[high]<br>&emsp;i = low - 1<br><br>&emsp;for j in range(low, high):<br>&emsp;&emsp;if array[j] <= pivot:<br>&emsp;&emsp;i = i + 1<br>&emsp;&emsp;(array[i], array[j]) = (array[j], array[i])<br><br>&emsp;(array[i + 1], array[high]) = (array[high], array[i + 1])<br>&emsp;return i + 1<br><br><br>def quickSort(array, low, high):<br>&emsp;if low < high:<br>&emsp;&emsp;pi = partition(array, low, high)<br>&emsp;&emsp;quickSort(array, low, pi - 1)<br>&emsp;&emsp;quickSort(array, pi + 1, high)";
}

function javacode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    java.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    py.style = "padding: 0px; background: black; font-size: 20px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    c.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "static int partition(int array[], int low, int high) {<br>&emsp;int pivot = array[high];<br>&emsp;int i = (low - 1);<br><br>&emsp;for (int j = low; j < high; j++) {<br>&emsp;&emsp;if (array[j] <= pivot) {<br>&emsp;&emsp;&emsp;i++;<br><br>&emsp;&emsp;&emsp;int temp = array[i];<br>&emsp;&emsp;&emsp;array[i] = array[j];<br>&emsp;&emsp;&emsp;array[j] = temp;<br>&emsp;&emsp;}<br>&emsp;}<br><br>&emsp;int temp = array[i + 1];<br>&emsp;array[i + 1] = array[high];<br>&emsp;array[high] = temp;<br><br>&emsp;return (i + 1);<br>}<br><br><br>static void quickSort(int array[], int low, int high) {<br>&emsp;if (low < high) {<br>&emsp;&emsp;int pi = partition(array, low, high);<br>&emsp;&emsp;quickSort(array, low, pi - 1);<br>&emsp;&emsp;quickSort(array, pi + 1, high);<br>&emsp;}<br>}";
}