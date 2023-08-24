let delay=0;
const updateColor=(div,color)=>{
    setTimeout(()=>{
        div.style.backgroundColor=color;
    },delay+=0.5)
}

const updateHeight=(div,newHeight)=>{
    setTimeout(()=>{
        div.style.height=`${newHeight}px`;
    },delay+=0.5)
}

export {updateColor,updateHeight}