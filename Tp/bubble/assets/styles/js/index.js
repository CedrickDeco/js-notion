let i;
let k;
const bubleSort = (array) => {
    for (i = 0; i < array.length - 1; i++) {
        for (k = 0; k < array.length - 1 - i; k++) {
            if (array[k] > array[k + 1]) {
                let p = array[k];
                let j = array[k + 1];
                array[k + 1] = p;
                array[k] = j;
            };
        }
    }
    //console.log(array);
}

bubleSort([145, 25, 1, 9, 7, 5665, 2, 0, 856, 2744, 685, 0, 564, 866, 312, 44, 848, 23854, 64, 684, 6, 6545, 8746]);

let array2 = [145, 25, 1, 9, 7, 5665, 2, 0, 856, 2744, 685, 0, 564, 866, 312, 44, 848, 23854, 64, 684, 6, 6545, 8746];

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        minPosition = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array2[j] < array2[minPosition]) {
                minPosition = j;
            }
            let p = array2[i];
            array2[i] = array2[minPosition];
            array2[minPosition] = p;
        }

    }
    console.log(array2);
}
selectionSort(array2)