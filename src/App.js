import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Footer from './footer';
import Header from './Header';
import { BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/resume' element={<Resume />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
