import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Footer from './Components/footer';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
