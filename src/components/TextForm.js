import React, {useState} from 'react' //Here useState is a Hook
export default function TextForm(props) {
    const[text,setText]=useState(""); //setText is use to update text in place of text
    const[Theme,setTheme]=useState({
        color:'black',
        backgroundColor:'white',
        border:'2px solid black'
    });
    const[btnText,setbtntext]=useState("Dark Mode")
    const Upper_click=()=>{   //This is a function to Create text inton upper case
        console.log("Uppercase Button is Clicked");
       let newText=text.toUpperCase();
        setText(newText);
        // Alert("Successfully Text Converted into UpperCase..")
    }
    const Lower_click=()=>{  //This is a function to Create text inton upper case
        console.log("Lowercase Button is Clicked")
        let Text=text.toLowerCase();
        setText(Text)
    }
    const Clear_click=()=>{
        let Cleartext="";
        setText(Cleartext)
    }
    const Copy_click=()=>{
        let text=document.getElementById("Textarea");
        text.select();
        window.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
    }
    const Capitalize_click = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
    };
    const RemoveExtra_click=()=>{
        let trimmedText = text.replace(/\s+/g, ' ');
        setText(trimmedText)
    }
    const Theme_click=()=>{
        if(Theme.color==='black'){
            setTheme({
                color:'white',
                backgroundColor:'black',
                border:'2px solid yellow'
            })
            setbtntext("Light Mode")
        }
        else{
            setTheme({
            color:'black',
            backgroundColor:'white',
            border:'2px solid black'
        })
        setbtntext("Dark Mode")
    }
    };
    const handleonChange=(event)=>{  // to use State variable we have to use this onchange and event is useful to write text...
        console.log("on Change");  //Need not to print this
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color:props.Mode==="dark"?"white":"black"}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="Textarea" rows="8" value={text} 
        onChange={handleonChange} style={Theme}></textarea>
        </div>
    </div>
    <div className="container" >
        <button className="btn btn-dark mx-2 my-2" onClick={Upper_click}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={Lower_click}>Convert to Lowercase</button>
        <button className="btn btn-info mx-2 my-2" onClick={Capitalize_click}>capitalize</button>
        <button className="btn btn-warning mx-2 my-2" onClick={RemoveExtra_click}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Copy_click}>Copy</button>
        <button className="btn btn-success mx-2 my-2" onClick={Clear_click}>Reset</button>
        <button className="btn btn-danger mx-2 my-2" onClick={Theme_click}>{btnText}</button>
        </div><br />
        <div className="container" style={{color:props.Mode==="dark"?"white":"black"}}>
            <h2>Words and Characters:</h2>
            <p><b>Words: {text.split(" ").filter((element)=>{return element.length!==0}).length}</b> &nbsp;& &nbsp; <b>Characters: {text.length}</b></p>
            <p><b>Time To Read:</b> {0.008 * text.split(" ").length}</p>
        </div>
        <div className="container"  style={{color:props.Mode==="dark"?"white":"black"}}>
            <h3>Preview:</h3>
            <p>{text.length>0?text:"See Your Preview Text Here..."}</p>
        </div>
        </>
  )
}
