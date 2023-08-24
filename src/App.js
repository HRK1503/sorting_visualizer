import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SortingVisualizer from './components/SortingVisualizer';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [type,settype]=useState('merge');
  const [sort,setsort]=useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar settype={settype} setsort={setsort}/>
        <Routes>
          <Route exact path='/' element={<SortingVisualizer key='merge' type={type} sort={sort} setsort={setsort}/>}></Route>
          <Route exact path='/merge' element={<SortingVisualizer key='merge' type={type} sort={sort} setsort={setsort}/>}></Route>
          <Route exact path='/bubble' element={<SortingVisualizer key='bubble' type={type} sort={sort} setsort={setsort}/>}></Route>
          <Route exact path='/quick' element={<SortingVisualizer key='quick' type={type} sort={sort} setsort={setsort}/>}></Route>
          <Route exact path='/selection' element={<SortingVisualizer key='selection' type={type} sort={sort} setsort={setsort}/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
