import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export default function NavBar(props) {
    const changeActive=(e)=>{
        let id=document.getElementsByClassName('nav-link');
        for(let i=0;i<id.length;i++){;
            if(id[i].className.includes('active')){
                id[i].classList.remove('active');
            }  
        }
        e.target.classList.add('active');
        props.settype(e.target.id);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" id='merge'><h2>Visualizer</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline " style={{justifyContent:'space-between'}}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/merge" id='merge' onClick={changeActive}>Merge sort</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bubble" id='bubble' onClick={changeActive}>Bubble sort</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/quick" id='quick' onClick={changeActive}>Quick sort</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/selection" id='selection' onClick={changeActive}>Selection sort</Link>
                            </li>
                            {/* <li className="nav-item">
                                <RangeSlider value={Speed} onChange={(e) => { setSpeed(e.target.value) }} min={5} max={50} />
                            </li> */}

                        </ul>
                        {/* <button className="btn btn-outline-success mx-3" type="submit">Generate New List</button>
                        <button className="btn btn-outline-success mx-3" type="submit" >Sort</button> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
