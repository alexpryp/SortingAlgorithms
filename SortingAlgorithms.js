(function() {

"use strict"


	
    let array = [2, 5, 3, 10, 1, 6, 8, 9, 7, 4];
    document.write("Source array: " + '[' + array + ']' + '<br>');


    //Bubble sort
    function BubbleSort(array) {
    	let arr = array.slice(0);
	    for (let k = arr.length; k > -1; k--) {
	        let wasSwap = false;
	        for (let i = 0, j = 1; j < k; i++, j++) {
	            if (arr[i] > arr[j]) {
	                let temp = arr[i];
	                arr[i] = arr[j];
	                arr[j] = temp;
	                wasSwap = true;
	            }
	        }
	        if(!wasSwap) break;
	    }

	    console.log(arr);
	    document.write("Bubble sort result: " + '[' + arr + ']' + '<br>');
	}

	BubbleSort(array);

})()
