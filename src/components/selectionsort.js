import { updateColor, updateHeight } from './update.js'
const arraybars = document.getElementsByClassName('array-bar');
export const selectionsort = (array) => {
    let i;
    for ( i = 0; i < array.length - 1; i++) {
        updateColor(arraybars[i], 'red');
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            updateColor(arraybars[j], 'yellow');
            if (array[j] < array[minIdx]) {
                if (minIdx !== i) {
                    updateColor(arraybars[minIdx], 'blue');
                }
                minIdx = j;
                updateColor(arraybars[minIdx], 'red');
            }
            else{
                updateColor(arraybars[j],'blue');
            }
        }
        if(minIdx!==i){
            [array[minIdx],array[i]]=[array[i],array[minIdx]];
            updateHeight(arraybars[minIdx],array[minIdx]);
            updateHeight(arraybars[i],array[i]);
            updateColor(arraybars[minIdx],'blue');
        }
        updateColor(arraybars[i],'green');
    }
    updateColor(arraybars[i],'green');
}