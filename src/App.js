import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import Braces from './pages/Braces';
import ToothExtractionsSurgeries from './pages/ToothExtractionsSurgeries';
import Implants from './pages/Implants';
import DentalFilling from './pages/DentalFilling';
import CrownAndBridges from './pages/CrownAndBridges';
import Periodontics from './pages/Periodontics';
import ScrollToTop from './components/ScrollToTop';
import GumTreatment from './pages/GumTreatment';
import TeethWhitening from './pages/TeethWhitening';

// 'Crown And Bridges': '/crown-and-bridges',
// 'Braces': '/braces',
// 'Implants': '/implants',
// 'Periodontics': '/periodontics',
// 'Dental Fillings': '/dental-fillings',
// 'Teeth Whitening': '/teeth-whitening',
// 'Tooth Extractions & Surgeries' : '/tooth-Extractions',
// 'Gum Treatments' : '/gum-Treatments'
function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* <ScrollToTop /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/singleservice" element={<Services />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/braces" element={<Braces />} />
      <Route path="/implants" element={<Implants />} />
      <Route path="/periodontics" element={<Periodontics />} />
      <Route path="/dental-fillings" element={<DentalFilling />} />
      <Route path="/teeth-whitening" element={<TeethWhitening />} />
      <Route path="/tooth-Extractions" element={<ToothExtractionsSurgeries />} />
      <Route path="/gum-Treatments" element={<GumTreatment/>} />
      <Route path="/crown-and-bridges" element={<CrownAndBridges/>} />
    </Routes>
    </>
  );
}

export default App;
