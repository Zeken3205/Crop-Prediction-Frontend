
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import LoginState from './Context/LoginState';
import SmartFarm from "./components/SmartFarm"
function App() {
  return (
    <BrowserRouter>
      <LoginState>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/smartfarm" element={<SmartFarm />} />
        </Routes>
      </LoginState>
    </BrowserRouter>
  );
}

export default App;
