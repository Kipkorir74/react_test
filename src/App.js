import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Mchezo from "./components/Mchezo";
import Effect from "./components/Effects";
import Memo from "./components/Memo";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Add/>}/>
      <Route path='/memo' element={<Memo/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/cheza' element={<Mchezo/>}/>
      <Route path='/effect' element={<Effect/>}/>

    </Routes>
  </Router>
    </div>
  );
}

export default App;
