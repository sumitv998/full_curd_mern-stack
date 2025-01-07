
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbaar from './components/Navbaar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Details from './components/Details.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Navbaar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    <Route path='/view/:id' element={<Details/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
