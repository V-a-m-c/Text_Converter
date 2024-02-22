// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  const[Mode,setMode]=useState("light"); 
    const Modehandle=()=>{
        if(Mode==="light"){
            setMode("dark")
          document.body.style.background='black';
          document.title="Text_Utils - Dark"
        }
        else{
            setMode("light")
          document.body.style.background='white';
          document.title="Text_Utils - Light"
        }
    }

  return (
    <>
    <BrowserRouter basename="/my-app">
    <Navbar title="Text-Editor"  Home="Services" Mode={Mode} Modehandle={Modehandle}/>
    <Routes>
    <Route exact path="/" element={<TextForm heading= "Write Here:" Mode={Mode}/>}/>
    <Route exact path={"/about"} element={<About/>}/>             
        </Routes>  
        </BrowserRouter>
    </>
    
  );
}
export default App;