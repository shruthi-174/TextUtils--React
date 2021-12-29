import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
 import About from "./components/About";

import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light') //whether dark mode enabled or not
  const [alert,setAlert]= useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 const toggleMode=()=>{
   if(mode==='light'){
     setMode('dark');
  
     document.body.style.backgroundColor='#1a1b5c';
     showAlert("Dark mode has enabled","success");
    //  document.title="TextUtils-DarkMode";
   }
   else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has enabled","success");
    // document.title="TextUtils-WhiteMode";
  }
 }
 
   return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
    {/* <Navbar/> */}
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}aboutText="About us"/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading="TextUtils, Word Counter, Character Counter" mode={mode}/> 
          </Route>
        </Switch>

</div>
</Router>
  </>
  );
}

export default App;
