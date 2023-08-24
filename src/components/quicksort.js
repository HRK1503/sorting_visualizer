import { updateColor, updateHeight } from './update.js'
const arraybars = document.getElementsByClassName('array-bar');
export const quicksort = (array) => {
    performquicksort(array, 0, array.length - 1);
    console.log(array);
}

const performquicksort = (array, low, high) => {
    if (low < high) {
        let pi = partition(array, low, high);
        performquicksort(array, low, pi - 1);
        performquicksort(array, pi + 1, high);
    }
}

const partition = (array, low, high) => {
    let pivot = array[low];
    let i = low + 1;
    updateColor(arraybars[low], 'yellow');
    for (let j = low + 1; j <= high; j++) {
        if (array[j] < pivot) {
            updateColor(arraybars[j], 'yellow');
            updateColor(arraybars[i], 'red');
            updateColor(arraybars[j], 'red');
            [array[i], array[j]] = [array[j], array[i]];
            updateHeight(arraybars[i], array[i]);
            updateHeight(arraybars[j], array[j]);
            updateColor(arraybars[i], 'blue');
            updateColor(arraybars[j], 'blue');
            i++;
        }
    }
    updateColor(arraybars[low], 'red');
    updateColor(arraybars[i - 1], 'red');
    [array[i - 1], array[low]] = [array[low ], array[i - 1]];
    updateHeight(arraybars[low], array[low]);
    updateHeight(arraybars[i - 1], array[i - 1]);
    for (let t = low; t <= i; t++) {
        updateColor(arraybars[t], 'green');
    }
    return i - 1;
}