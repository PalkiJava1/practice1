
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from "./pages/navbar";
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      
   </>
  );
}

export default App;
