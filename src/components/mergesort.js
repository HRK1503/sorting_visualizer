let PRIMARY_COLOR = 'red';
let SECONDARY_COLOR = 'aqua';
const arraybars = document.getElementsByClassName('array-bar');

export const mergesort = (array) => {
    const animations = getmergeanimations(array);
    for (let i = 0; i < animations.length; i++) {

        const iscolorchange = i % 3 !== 2;
        if (iscolorchange) {
            const [bar1Idx, bar2Idx] = animations[i];
            const bar1style = arraybars[bar1Idx].style;
            const bar2style = arraybars[bar2Idx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                bar1style.backgroundColor = color;
                bar2style.backgroundColor = color;
            }, i * 5)
        }
        else {
            setTimeout(() => {
                const [bar1Idx, newHeight] = animations[i];
                const bar1style = arraybars[bar1Idx].style;
                bar1style.height = `${newHeight}px`
            }, i * 5)
        }
    }

    // mergePartition(array,0,array.length-1);
}

// const mergePartition=(array,start,end)=>{
//     if(start<end){
//         let mid=Math.floor((start+end)/2);
//         updateColor(arraybars[mid],'yellow');
//         mergePartition(array,start,mid);
//         mergePartition(array,mid+1,end);
//         mergesortHelper(array,start,mid,end);
//     }
// }

// const mergesortHelper=(array,start,mid,end)=>{
//     let p=start;
//     let q=mid+1;
//     let altArray=[];
//     let k=0;
//     for(let i=0;i<=end;i++){
//         if(p>mid){
//             altArray[k++]=array[q++];
//             updateColor(arraybars[q-1],'red');
//         }
//         else if(q>end){
//             altArray[k++]=array[p++];
//             updateColor(arraybars[p-1],'red');
//         }
//         else if(array[p]<array[q]){
//             altArray[k++]=array[q++];
//             updateColor(arraybars[p-1],'red');
//         }
//         else{
//             altArray[k++]=array[q++];
//             updateColor(arraybars[q-1],'red');
//         }
//     }
//     for(let t=0;t<k;t++){
//         array[start++]=altArray[t];
//         updateColor(arraybars[start-1],'green');
//     }
// }

const getmergeanimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const duplicateArray = array.slice();
    performmergesort(array, 0, array.length - 1, duplicateArray, animations);
    return animations;
}

const performmergesort = (mainArray, startIdx, endIdx, duplicateArray, animations) => {
    if (startIdx === endIdx) return mainArray;
    const MiddleIdx = Math.floor((startIdx + endIdx) / 2);
    performmergesort(duplicateArray, startIdx, MiddleIdx, mainArray, animations);
    performmergesort(duplicateArray, MiddleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, MiddleIdx, endIdx, duplicateArray, animations);
}

const merge = (mainArray, startIdx, MiddleIdx, endIdx, duplicateArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = MiddleIdx + 1;
    while (i <= MiddleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (duplicateArray[i] <= duplicateArray[j]) {
            animations.push([k, duplicateArray[i]]);
            mainArray[k++] = duplicateArray[i++];
        }
        else {
            animations.push([k, duplicateArray[j]]);
            mainArray[k++] = duplicateArray[j++];
        }
    }
    while (i <= MiddleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, duplicateArray[i]]);
        mainArray[k++] = duplicateArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, duplicateArray[j]]);
        mainArray[k++] = duplicateArray[j++];
    }
}

