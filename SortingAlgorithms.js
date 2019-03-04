(function() {

"use strict"


	
    let array = [2, 5, 3, 10, 1, 6, 8, 9, 7, 4];
    document.write("Source array: " + '[' + array + ']' + '<br>');


    //Bubble sort
    function BubbleSort(array) {
        let n = array.length - 1;

        for (let i = 0; i < n; i++){
            let m = n - i;

            for (let j = 0; j < m; j++) { 
                if (array[j+1] < array[j]) {
                    let t = array[j+1]; array[j+1] = array[j]; array[j] = t; 
                }
            }
        }                     
        return array;
    }

    document.write("Bubble sort result: " + "[" + BubbleSort(array)+ "]" + "<br>");

})()
