import React, {useState} from 'react'
import editingTools from './020-text-512.png';
import tools from './tools-25-512.png'
export default function About() { 
  const[Theme,setTheme]=useState({
    color:'black',
    backgroundColor:'white'
});
const[btnText,setbtntext]=useState("Dark Mode")
const Theme_click=()=>{
  if(Theme.color==='black'){
      setTheme({
          color:'white',
          backgroundColor:'black',
      })
      setbtntext("Light Mode")
  }
  else{
      setTheme({
      color:'black',
      backgroundColor:'white',
  })
  setbtntext("Dark Mode")
}
};
  return (
    <>
    <div style={Theme}>
    <div className="container" >
    <h1>Introduction:</h1>
    <img src={editingTools} style={{ width: '171px', height: 'auto' }} alt="Not Found" /> <br />
    Welcome to our website, your ultimate destination for <strong> effortless text modification!</strong>
    Whether you need to convert text to <code> uppercase, lowercase, or capitalize</code> it, 
    we've got you covered with our intuitive tools. 
    Streamline your text editing tasks and enhance your productivity with just a few clicks.
    <h2>Features:</h2>
    <img src={tools} alt="Not Found" style={{ width: '171px', height: 'auto' }} /> <br />
    <p>"TextUtils simplifies text editing with features like converting text to <code>uppercase, lowercase, or capitalized 
     form, copy-to-clipboard functionality, and accurate word and character counting. </code>
     Our user-friendly interface ensures seamless text manipulation while prioritizing privacy and security. 
     Whether writing an essay or crafting social media posts, 
     TextUtils streamlines the editing process with precision and convenience."</p>
    </div>
    <div className="container">
    <button className="btn btn-dark mx-2" onClick={Theme_click}>{btnText}</button>
    </div></div>
    </>
  );
}

