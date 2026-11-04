import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import AboutUs from './components/Pages/About_us/About_us';
import OurServices from './components/Pages/Our_Services/Our_Services'
import OurWork from './components/Pages/Our_Work/Our_Work'
import OurBlog from './components/Pages/Our_Blog/Our_Blog';
import GetInTouch from './components/Pages/Get_in_touch/Get_in_touch';
import WorkWithUs from './components/Pages/Work_with_us/Work_with_us';
import WebsiteDesign from './components/Pages/Our_Services/Website_design/Website_Design';
import Strategy2 from './components/Pages/Our_Services/Strategy2/Strategy2';
import SocialMedia from './components/Pages/Our_Services/Social_media/Social_media';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/About_us' element={<AboutUs />} />
      <Route path='/Our_Services' element={<OurServices />} />
      <Route path='/Our_Work' element={<OurWork />} />
      <Route path='/Our_Blog' element={<OurBlog />} />
      <Route path='/Get_in_touch' element={<GetInTouch />} />
      <Route path='/Work_with_us' element={<WorkWithUs />} />
      <Route path='/Website_Design' element={<WebsiteDesign />} />
      <Route path='/Strategy2' element={<Strategy2 />} />
      <Route path='/Social_media' element={<SocialMedia />} />
    </Routes>
  );
}

export default App;