play.addEventListener("click", bubble);

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
    text.innerHTML = "void bubble_sort(long arr[], long n) {<br>&emsp;long c, d, t;<br><br>&emsp;for (c = 0 ; c < n - 1; c++) {<br>&emsp;&emsp;for (d = 0 ; d < n - c - 1; d++) {<br>&emsp;&emsp;&emsp;if (arr[d] > arr[d+1]) {<br>&emsp;&emsp;&emsp;t = arr[d];<br>&emsp;&emsp;&emsp;arr[d] = arr[d+1];<br>&emsp;&emsp;&emsp;arr[d+1] = t;<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;}<br>&emsp;}<br>}";
}

function cppcode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    cpp.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    py.style = "padding: 0px; background: black; font-size: 20px";
    java.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "void bubble_sort(long arr[], long n) {<br>&emsp;long c, d, t;<br><br>&emsp;for (c = 0 ; c < n - 1; c++) {<br>&emsp;&emsp;for (d = 0 ; d < n - c - 1; d++) {<br>&emsp;&emsp;&emsp;if (arr[d] > arr[d+1]) {<br>&emsp;&emsp;&emsp;t = arr[d];<br>&emsp;&emsp;&emsp;arr[d] = arr[d+1];<br>&emsp;&emsp;&emsp;arr[d+1] = t;<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;}<br>&emsp;}<br>}";
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
    text.innerHTML = "def bubbleSort(arr):<br>&emsp;n = len(arr)<br>&emsp;for i in range(n-1):<br>&emsp;&emsp;for j in range(0, n-i-1):<br>&emsp;&emsp;&emsp;if arr[j] > arr[j+1]:<br>&emsp;&emsp;&emsp;&emsp;arr[j], arr[j+1] = arr[j+1], arr[j]";
}

function javacode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    java.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    py.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "static void bubbleSort(int[] arr) {<br>&emsp;int n = arr.length;<br>&emsp;int temp = 0;<br>&emsp;for(int i=0; i < n; i++){<br>&emsp;&emsp;for(int j=1; j < (n-i); j++){<br>&emsp;&emsp;&emsp;if(arr[j-1] > arr[j]){<br>&emsp;&emsp;&emsp;&emsp;temp = arr[j-1];<br>&emsp;&emsp;&emsp;&emsp;arr[j-1] = arr[j];<br>&emsp;&emsp;&emsp;&emsp;arr[j] = temp;<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;}<br>&emsp;}<br>}";
}