play.addEventListener("click", insertion);

function insertion(){
    disable_buttons();
    c_delay = 0;

    for(var i=0; i<array_size; i++){
        div_update(divs[i], div_sizes[i], "#F5A31A");

        var key = div_sizes[i];
        var j = i - 1;
        while(j>=0 && div_sizes[j]>key){
            div_update(divs[j], div_sizes[j], "#73BBC9");
            div_update(divs[j+1], div_sizes[j+1], "#73BBC9");

            div_sizes[j+1] = div_sizes[j];

            div_update(divs[j], div_sizes[j], "#73BBC9");
            div_update(divs[j+1], div_sizes[j+1], "#73BBC9");

            div_update(divs[j], div_sizes[j], "#C88EA7");

            if(j == (i-1)){
                div_update(divs[j+1], div_sizes[j+1], "#F5A31A");
            }
            else{
                div_update(divs[j+1], div_sizes[j+1], "#C88EA7");
            }

            j-=1;
        }

        div_sizes[j+1] = key;

        for(var t=0;t<i;t++){
            div_update(divs[t],div_sizes[t],"#65C18C");
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"#65C18C"); 

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
    text.innerHTML = "void insertionSort(int array[], int size) {<br>&emsp;for (int step = 1; step < size; step++) {<br>&emsp;&emsp;int key = array[step];<br>&emsp;&emsp;int j = step - 1;<br>&emsp;&emsp;while (key < array[j] && j >= 0) {<br>&emsp;&emsp;&emsp;array[j + 1] = array[j];<br>&emsp;&emsp;&emsp;--j;<br>&emsp;&emsp;}<br>&emsp;array[j + 1] = key;<br>&emsp;}<br>}";
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
    text.innerHTML = "void insertionSort(int array[], int size) {<br>&emsp;for (int step = 1; step < size; step++) {<br>&emsp;&emsp;int key = array[step];<br>&emsp;&emsp;int j = step - 1;<br>&emsp;&emsp;while (key < array[j] && j >= 0) {<br>&emsp;&emsp;&emsp;array[j + 1] = array[j];<br>&emsp;&emsp;&emsp;--j;<br>&emsp;&emsp;}<br>&emsp;array[j + 1] = key;<br>&emsp;}<br>}";
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
    text.innerHTML = "def insertionSort(array):<br>&emsp;for step in range(1, len(array)):<br>&emsp;&emsp;key = array[step]<br>&emsp;&emsp;j = step - 1<br>&emsp;&emsp;while j >= 0 and key < array[j]:<br>&emsp;&emsp;&emsp;array[j + 1] = array[j]<br>&emsp;&emsp;&emsp;j = j - 1<br>&emsp;&emsp;&emsp;array[j + 1] = key";
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
    text.innerHTML = "void insertionSort(int array[]) {<br>&emsp;int size = array.length;<br><br>&emsp;for (int step = 1; step < size; step++) {<br>&emsp;&emsp;int key = array[step];<br>&emsp;&emsp;int j = step - 1;<br>&emsp;&emsp;while (j >= 0 && key < array[j]) {<br>&emsp;&emsp;&emsp;array[j + 1] = array[j];<br>&emsp;&emsp;&emsp;--j;<br>&emsp;&emsp;}<br>&emsp;array[j + 1] = key;<br>&emsp;}<br>}";
}
