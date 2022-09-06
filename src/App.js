
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React , {useState} from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// let a = 45;
// console.log(a);

function App() {
 const [mode, setMode] = useState('light');
const [dt, setDt] = useState('Enable Dark Mode');
const [alert, setalert] = useState("");

const showAlert = (message,type) =>{
     setalert({
       msg: message,
       type:type

     })
     setTimeout (()=>{
       setalert(null);
     },1500)
}

 const toggleMode = () =>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor ='#225380';
     setDt('Enable Light Mode');
     showAlert("Dark Mode has been Enabled" ,"success");
    //  document.title ='TextWorld - DarkMode';
   }else{
     setMode('light');
     document.body.style.backgroundColor ='white';
     setDt('Enable Dark Mode')
     showAlert("Light Mode has been Enabled" ,"success")
    //  document.title ='TextWorld - Light Mode';
   }
 }
//  new togglemodes start here


// ends here
  return (
    <>
    <Router>
    <Navbar title="TextWorld" about="About" mode={mode} dt={dt} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      {/* 'exact' path use recommended as react only matches few words from end points  */}
          <Route exact path="/about" element={ <div className='container'><About mode={mode}/></div>}/>
         
          {/* </Route> */}
          <Route  exact path="/" element ={<div className='container'><TextForm showAlert={showAlert} heading= "Try TextWorld- word counter, character counter, font style change and more"  mode={mode}/> </div>}/>
          
          {/* </Route> */}
    </Routes>
    {/* <div className="container my-3">
   
    </div> */}
   {/* <Navbar title="newworld" /> */}
   {/* <Navbar/> */}
    {/* <div className="container">
    
    </div> */}

    </Router>
    </>
  );
}

export default App;
