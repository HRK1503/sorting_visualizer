import React, { useEffect, useState } from 'react'
import "./SortingVisualizer.css"
import { mergesort } from './mergesort.js'
import { bubblesort } from './bubblesort.js'
import { quicksort } from './quicksort.js'
import { selectionsort } from './selectionsort.js'

export default function SortingVisualizer(props) {
    const [array, setarray] = useState([]);
    console.log(props.type);
    const randomnumbers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        resetArray();
    }, [])

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomnumbers(5, 600));
        }
        setarray(array);
    }

    const selectsort = () => {
        switch (props.type) {
            case 'merge':
                console.log('merge sort');
                mergesort(array);

                break;
            case 'bubble':
                console.log('bubble sort');
                bubblesort(array);

                break;
            case 'quick':
                console.log('quick sort');
                quicksort(array);

                break;
            case 'selection':
                console.log('selection sort');
                selectionsort(array);

                break;
            default:
                console.log('merge');
                break;

        }
    }


return (
    <>
        <div className='array-container'>
            {array.map((value, idx) => {
                return <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
            })}
            <div className="button-container">
            <button className="btn btn-outline-success " id='sort_button' type="submit" onClick={selectsort} >Sort</button>
            <button className="btn btn-outline-success " id='generate_button' type="submit" onClick={resetArray} >Generrate new list</button>
            </div>
            
        </div>  
    </>

);
}

