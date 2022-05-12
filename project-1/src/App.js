
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Alert from './components/Alert.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  //enable disable dark mode
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  //method
  const showAlert = (Message, types) => {
setAlert({
  msg: Message,
  type:types,
})
setTimeout(() => {
  setAlert(null);
}, 1500);
  }

  // const removeBodyClasses = () => {
  //   // document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }


  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'grey'; 
       showAlert('Dark mode is enabled', "success");
      //  document.title = 'TextUtils - Dark Mode';
      //  setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', "success");
      // document.title = "TextUtils - Light Mode";
    
    }
  }

  return (
    //the angular braces are the jsx fragment
   <>
 <Router>
   <Navbar title="project-1"  about="about" mode={mode} toggleMode={toggleMode}/>

   <Alert  alert={alert}/>

   <div className="container my-3">
       <Switch>  
          <Route path="/about" component={About}> {<About mode={mode} />} </Route>
          <Route path="/" >
          <TextForm showAlert={showAlert} heading="Try TextUtils - Enter your details to see changes"  mode={mode}/>
          </Route>
        </Switch>
        
   </div>
   </Router>
   </>
  );
}

export default App;
