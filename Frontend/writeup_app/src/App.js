import logo from './logo.svg';
import './App.css';
import NavbarCom from './Components/Navbar';
import Login from './Components/login';
import Signup from './Components/Signup';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Profile from './Components/profile';
import Newpost from './Components/Newpost';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:name" element={<Profile/>}></Route>
        <Route path="/newpost/:name" element={<Newpost/>}/>
      </Routes>
    </div>
  );
}

export default App;
