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

    for(var t=0;t<k;t++){
        div_sizes[start++]=arr[t];
        div_update(divs[start-1],div_sizes[start-1],"#65C18C");//Color update
    }
}

function merge_partition(start,end){
    if(start < end){
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"#F5A31A");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        mergesort(start,mid,end);
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
    text.innerHTML = "void merge(int arr[], int p, int q, int r) {<br>&emsp;int n1 = q - p + 1;<br>&emsp;int n2 = r - q;<br><br>&emsp;int L[n1], M[n2];<br><br>&emsp;for (int i = 0; i < n1; i++)<br>&emsp;&emsp;L[i] = arr[p + i];<br>&emsp;for (int j = 0; j < n2; j++)<br>&emsp;&emsp;M[j] = arr[q + 1 + j];<br><br>&emsp;int i, j, k;<br>&emsp;i = 0;<br>&emsp;j = 0;<br>&emsp;k = p;<br><br>&emsp;while (i < n1 && j < n2) {<br>&emsp;&emsp;if (L[i] <= M[j]) {<br>&emsp;&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;} else {<br>&emsp;&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;&emsp;j++;<br>&emsp;&emsp;}<br>&emsp;&emsp;k++;<br>&emsp;}<br><br>&emsp;while (i < n1) {<br>&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;i++;<br>&emsp;&emsp;k++;<br>&emsp;}<br><br>&emsp;while (j < n2) {<br>&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;j++;<br>&emsp;&emsp;k++;<br>&emsp;}<br>}<br><br><br>void mergeSort(int arr[], int l, int r) {<br>&emsp;if (l < r) {<br>&emsp;&emsp;int m = l + (r - l) / 2;<br><br>&emsp;&emsp;mergeSort(arr, l, m);<br>&emsp;&emsp;mergeSort(arr, m + 1, r);<br>&emsp;&emsp;merge(arr, l, m, r);<br>&emsp;&emsp;}<br>}";
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
    text.innerHTML = "void merge(int arr[], int p, int q, int r) {<br>&emsp;int n1 = q - p + 1;<br>&emsp;int n2 = r - q;<br><br>&emsp;int L[n1], M[n2];<br><br>&emsp;for (int i = 0; i < n1; i++)<br>&emsp;&emsp;L[i] = arr[p + i];<br>&emsp;for (int j = 0; j < n2; j++)<br>&emsp;&emsp;M[j] = arr[q + 1 + j];<br><br>&emsp;int i, j, k;<br>&emsp;i = 0;<br>&emsp;j = 0;<br>&emsp;k = p;<br><br>&emsp;while (i < n1 && j < n2) {<br>&emsp;&emsp;if (L[i] <= M[j]) {<br>&emsp;&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;} else {<br>&emsp;&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;&emsp;j++;<br>&emsp;&emsp;}<br>&emsp;&emsp;k++;<br>&emsp;}<br><br>&emsp;while (i < n1) {<br>&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;i++;<br>&emsp;&emsp;k++;<br>&emsp;}<br><br>&emsp;while (j < n2) {<br>&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;j++;<br>&emsp;&emsp;k++;<br>&emsp;}<br>}<br><br><br>void mergeSort(int arr[], int l, int r) {<br>&emsp;if (l < r) {<br>&emsp;&emsp;int m = l + (r - l) / 2;<br><br>&emsp;&emsp;mergeSort(arr, l, m);<br>&emsp;&emsp;mergeSort(arr, m + 1, r);<br>&emsp;&emsp;merge(arr, l, m, r);<br>&emsp;&emsp;}<br>}";
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
    text.innerHTML = "def mergeSort(array):<br>&emsp;if len(array) > 1:<br>&emsp;&emsp;r = len(array)/2<br>&emsp;&emsp;L = array[:r]<br>&emsp;&emsp;M = array[r:]<br><br>&emsp;&emsp;mergeSort(L)<br>&emsp;&emsp;mergeSort(M)<br><br>&emsp;&emsp;i = j = k = 0<br><br>&emsp;&emsp;while i < len(L) and j < len(M):<br>&emsp;&emsp;&emsp;if L[i] < M[j]:<br>&emsp;&emsp;&emsp;&emsp;array[k] = L[i]<br>&emsp;&emsp;&emsp;&emsp;i += 1<br>&emsp;&emsp;&emsp;else:<br>&emsp;&emsp;&emsp;&emsp;array[k] = M[j]<br>&emsp;&emsp;&emsp;&emsp;j += 1<br>&emsp;&emsp;&emsp;&emsp;k += 1<br><br>&emsp;&emsp;while i < len(L):<br>&emsp;&emsp;&emsp;array[k] = L[i]<br>&emsp;&emsp;&emsp;i += 1<br>&emsp;&emsp;&emsp;k += 1<br><br>&emsp;&emsp;while j < len(M):<br>&emsp;&emsp;&emsp;array[k] = M[j]<br>&emsp;&emsp;&emsp;j += 1<br>&emsp;&emsp;&emsp;k += 1";
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
    text.innerHTML = "class MergeSort {<br><br>&emsp;void merge(int arr[], int p, int q, int r) {<br><br>&emsp;&emsp;int n1 = q - p + 1;<br>&emsp;&emsp;int n2 = r - q;<br><br>&emsp;&emsp;int L[] = new int[n1];<br>&emsp;&emsp;int M[] = new int[n2];<br><br>&emsp;&emsp;for (int i = 0; i < n1; i++)<br>&emsp;&emsp;&emsp;L[i] = arr[p + i];<br><br>&emsp;&emsp;for (int j = 0; j < n2; j++)<br>&emsp;&emsp;&emsp; M[j] = arr[q + 1 + j];<br><br>&emsp;&emsp;int i, j, k;<br>&emsp;&emsp;i = 0;<br>&emsp;&emsp;j = 0;<br>&emsp;&emsp;k = p;<br><br>&emsp;&emsp;while (i < n1 && j < n2) {<br>&emsp;&emsp;&emsp;if (L[i] <= M[j]) {<br>&emsp;&emsp;&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;&emsp;} else {<br>&emsp;&emsp;&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;&emsp;&emsp;j++;<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;k++;<br>&emsp;&emsp;}<br><br>&emsp;&emsp;while (i < n1) {<br>&emsp;&emsp;&emsp;arr[k] = L[i];<br>&emsp;&emsp;&emsp;i++;<br>&emsp;&emsp;&emsp;k++;<br>&emsp;&emsp;}<br><br>&emsp;&emsp;while (j < n2) {<br>&emsp;&emsp;&emsp;arr[k] = M[j];<br>&emsp;&emsp;&emsp;j++;<br>&emsp;&emsp;&emsp;k++;<br>&emsp;&emsp;}<br>&emsp;}<br><br><br>&emsp;void mergeSort(int arr[], int l, int r) {<br>&emsp;&emsp;if (l < r) {<br><br>&emsp;&emsp;&emsp;int m = (l + r) / 2;<br><br>&emsp;&emsp;&emsp;mergeSort(arr, l, m);<br>&emsp;&emsp;&emsp;mergeSort(arr, m + 1, r);<br><br>&emsp;&emsp;&emsp;merge(arr, l, m, r);<br>&emsp;&emsp;}<br>&emsp;}";
}