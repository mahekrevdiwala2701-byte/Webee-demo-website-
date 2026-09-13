import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home'
import About_us from './components/Pages/About_us/About_us';
import Our_Services from './components/Pages/Our_Services/Our_Services'
import Our_Work from './components/Pages/Our_Work/Our_Work'
import Our_Blog from './components/Pages/Our_Blog/Our_Blog';
import GetInTouch from './components/Pages/Get_in_touch/Get_in_touch';
import Work_with_us from './components/Pages/Work_with_us/Work_with_us';
import Website_Design from './components/Pages/Our_Services/Website_design/Website_Design';
import Strategy2 from './components/Pages/Our_Services/Strategy2/Strategy2'; 
import Social_media from './components/Pages/Our_Services/Social_media/Social_media';

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path='/About_us' element={<About_us />} />
        <Route path='/Our_Services' element={<Our_Services />} />
        <Route path='/Our_Work' element={<Our_Work />} />
        <Route path='/Our_Blog' element={<Our_Blog />} />
        <Route path='/Get_in_touch' element={<GetInTouch />} />
        <Route path='/Work_with_us' element={<Work_with_us />} />
        <Route path='/Website_Design' element={<Website_Design />} />
        <Route path='/Strategy2' element={<Strategy2 />} />
        <Route path='/Social_media' element={<Social_media />} />
      </Routes>
    </>
  );
}

export default App;
