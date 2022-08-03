import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Gameplay from './components/Gameplay/Gameplay';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/gameplay' element={<Gameplay />}/>
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
