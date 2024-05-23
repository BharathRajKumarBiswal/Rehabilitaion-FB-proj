import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Aboutus from './Component/Aboutus';
import Programs from './Component/Programs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contactus from './Component/Contactus';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  return (
    <div className="App">
    
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='#about-us' element={<Aboutus />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          
        </Routes>
  
    </div>
  );
}

export default App;
