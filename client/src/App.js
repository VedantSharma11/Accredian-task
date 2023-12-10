import Signup from './components/SIgnup';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </Router>
  );
}

export default App;
