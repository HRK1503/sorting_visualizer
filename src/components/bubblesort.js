import {updateColor,updateHeight} from './update.js'

export const bubblesort=(array)=>{
    let temp;
    let i,j;
    let arraybars=document.getElementsByClassName('array-bar');
    for(i=0;i<array.length-1;i++){
        for(j=0;j<array.length-i-1;j++){
            updateColor(arraybars[j],'yellow');
            if(array[j]>array[j+1]){
                updateColor(arraybars[j],'red');
                updateColor(arraybars[j+1],'red');
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                updateHeight(arraybars[j],array[j]);
                updateHeight(arraybars[j+1],array[j+1]);
            }
            updateColor(arraybars[j],'blue');
        }
        updateColor(arraybars[j],'green');
    }
    updateColor(arraybars[0],'green');
}

