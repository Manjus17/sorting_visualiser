play.addEventListener("click", selection);

function selection(){
    disable_buttons();
    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        div_update(divs[i],div_sizes[i],"#73BBC9");

        index_min=i;

        for(var j=i+1;j<array_size;j++){
            div_update(divs[j],div_sizes[j],"#F5A31A");

            if(div_sizes[j]<div_sizes[index_min]){
                if(index_min!=i){
                    div_update(divs[index_min],div_sizes[index_min],"#C88EA7");
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#73BBC9");
            }
            else{
                div_update(divs[j],div_sizes[j],"#C88EA7");
            }
        }
        
        if(index_min!=i){
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#73BBC9");
            div_update(divs[i],div_sizes[i],"#73BBC9");
            div_update(divs[index_min],div_sizes[index_min],"#C88EA7");
        }
        div_update(divs[i],div_sizes[i],"#65C18C");
    }
    div_update(divs[i],div_sizes[i],"#65C18C");

    enable_buttons();
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
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int temp = *a;<br>&emsp;*a = *b;<br>&emsp;*b = temp;<br>}<br><br><br>void selectionSort(int array[], int size) {<br>&emsp;for (int step = 0; step < size - 1; step++) {<br>&emsp;&emsp;int min_idx = step;<br>&emsp;&emsp;for (int i = step + 1; i < size;++) {<br>&emsp;&emsp;&emsp;if (array[i] < array[min_idx])<br>&emsp;&emsp;&emsp;&emsp;min_idx = i;<br>&emsp;&emsp;&emsp;}<br><br>&emsp;&emsp;swap(&array[min_idx], &array[step]);<br>&emsp;}<br>}";
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
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int temp = *a;<br>&emsp;*a = *b;<br>&emsp;*b = temp;<br>}<br><br><br>void selectionSort(int array[], int size) {<br>&emsp;for (int step = 0; step < size - 1; step++) {<br>&emsp;&emsp;int min_idx = step;<br>&emsp;&emsp;for (int i = step + 1; i < size;++) {<br>&emsp;&emsp;&emsp;if (array[i] < array[min_idx])<br>&emsp;&emsp;&emsp;&emsp;min_idx = i;<br>&emsp;&emsp;&emsp;}<br><br>&emsp;&emsp;swap(&array[min_idx], &array[step]);<br>&emsp;}<br>}";
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
    text.innerHTML = "def selectionSort(array, size):<br><br>&emsp;for step in range(size):<br>&emsp;&emsp;min_idx = step<br><br>&emsp;&emsp;for i in range(step + 1, size):<br><br>&emsp;&emsp;&emsp;if array[i] < array[min_idx]:<br>&emsp;&emsp;&emsp;&emsp;min_idx = i<br><br>&emsp;&emsp;(array[step], array[min_idx]) = (array[min_idx], array[step])";
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
    text.innerHTML = "void selectionSort(int array[]) {<br>&emsp;int size = array.length;<br><br>&emsp;for (int step = 0; step < size - 1; step++) {<br>&emsp;&emsp;int min_idx = step;<br><br>&emsp;&emsp;for (int i = step + 1; i < size; i++) {<br>&emsp;&emsp;&emsp;if (array[i] < array[min_idx]) {<br>&emsp;&emsp;&emsp;&emsp;min_idx = i;<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;}<br><br>&emsp;int temp = array[step];<br>&emsp;array[step] = array[min_idx];<br>&emsp;array[min_idx] = temp;<br>}";
}