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
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int temp = *a;<br>&emsp;*a = *b;<br>&emsp;*b = temp;<br>}<br><br><br><br>void heapify(int arr[], int n, int i) {<br>&emsp;int largest = i;<br>&emsp;int left = 2 * i + 1;<br>&emsp;int right = 2 * i + 2;<br><br>if (left < n && arr[left] > arr[largest])<br>&emsp;&emsp;largest = left;<br><br>if (right < n && arr[right] > arr[largest])<br>&emsp;&emsp;largest = right;<br><br>if (largest != i) {<br>&emsp;&emsp;swap(&arr[i], &arr[largest]);<br>&emsp;&emsp;heapify(arr, n, largest);<br>&emsp;}<br>}<br><br><br><br>void heapSort(int arr[], int n) {<br>&emsp;for (int i = n / 2 - 1; i >= 0; i--)<br>&emsp;&emsp;heapify(arr, n, i);<br><br>for (int i = n - 1; i >= 0; i--) {<br>&emsp;&emsp;swap(&arr[0], &arr[i]);<br>&emsp;}<br>}";
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
    text.innerHTML = "void swap(int *a, int *b) {<br>&emsp;int temp = *a;<br>&emsp;*a = *b;<br>&emsp;*b = temp;<br>}<br><br><br><br>void heapify(int arr[], int n, int i) {<br>&emsp;int largest = i;<br>&emsp;int left = 2 * i + 1;<br>&emsp;int right = 2 * i + 2;<br><br>if (left < n && arr[left] > arr[largest])<br>&emsp;&emsp;largest = left;<br><br>if (right < n && arr[right] > arr[largest])<br>&emsp;&emsp;largest = right;<br><br>if (largest != i) {<br>&emsp;&emsp;swap(&arr[i], &arr[largest]);<br>&emsp;&emsp;heapify(arr, n, largest);<br>&emsp;}<br>}<br><br><br><br>void heapSort(int arr[], int n) {<br>&emsp;for (int i = n / 2 - 1; i >= 0; i--)<br>&emsp;&emsp;heapify(arr, n, i);<br><br>for (int i = n - 1; i >= 0; i--) {<br>&emsp;&emsp;swap(&arr[0], &arr[i]);<br>&emsp;}<br>}";
}

function pycode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    py.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    java.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "def heapify(arr, n, i):<br>&emsp;largest = i<br>&emsp;l = 2 * i + 1<br>&emsp;r = 2 * i + 2<br><br>&emsp;if l < n and arr[i] < arr[l]:<br>&emsp;&emsp;largest = l<br><br>&emsp;if r < n and arr[largest] < arr[r]:<br>&emsp;&emsp;largest = r<br><br>&emsp;if largest != i:<br>&emsp;&emsp;arr[i], arr[largest] = arr[largest], arr[i]<br>&emsp;&emsp;heapify(arr, n, largest)<br><br><br><br>def heapSort(arr):<br>&emsp;n = len(arr)<br>&emsp;for i in range(n//2, -1, -1):<br>&emsp;&emsp;heapify(arr, n, i)<br><br>&emsp;for i in range(n-1, 0, -1):<br>&emsp;&emsp;arr[i], arr[0] = arr[0], arr[i]<br>&emsp;&emsp;heapify(arr, i, 0)";
}

function javacode(){
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var py = document.getElementById("py");
    var java = document.getElementById("java");
    java.style = "padding: 10px; background: #3F2E3E; font-size: 30px";
    cpp.style = "padding: 0px; background: black; font-size: 20px";
    c.style = "padding: 0px; background: black; font-size: 20px";
    py.style = "padding: 0px; background: black; font-size: 20px";

    var text = document.querySelector(".code");
    text.innerHTML = "public class HeapSort {<br><br>&emsp;public void sort(int arr[]) {<br>&emsp;&emsp;int n = arr.length;<br>&emsp;&emsp;for (int i = n / 2 - 1; i >= 0; i--) {<br>&emsp;&emsp;&emsp;heapify(arr, n, i);<br>&emsp;&emsp;}<br><br>&emsp;&emsp;for (int i = n - 1; i >= 0; i--) {<br>&emsp;&emsp;&emsp;int temp = arr[0];<br>&emsp;&emsp;&emsp;arr[0] = arr[i];<br>&emsp;&emsp;&emsp;arr[i] = temp;<br>&emsp;&emsp;&emsp;heapify(arr, i, 0);<br>&emsp;&emsp;}<br>&emsp;}<br><br><br>&emsp;void heapify(int arr[], int n, int i) {<br>&emsp;&emsp;int largest = i;<br>&emsp;&emsp;int l = 2 * i + 1;<br>&emsp;&emsp;int r = 2 * i + 2;<br><br>&emsp;&emsp;if (l < n && arr[l] > arr[largest])<br>&emsp;&emsp;&emsp;largest = l;<br><br>&emsp;&emsp;if (r < n && arr[r] > arr[largest])<br>&emsp;&emsp;&emsp;largest = r;<br><br>&emsp;&emsp;if (largest != i) {<br>&emsp;&emsp;&emsp;int swap = arr[i];<br>&emsp;&emsp;&emsp;arr[i] = arr[largest];<br>&emsp;&emsp;&emsp;arr[largest] = swap;<br>&emsp;&emsp;&emsp;heapify(arr, n, largest);<br>&emsp;&emsp;}<br>&emsp;}";
}