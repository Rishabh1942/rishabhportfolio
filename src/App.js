
import './App.css';
import Navbar from './Component/navbar'
import About from './Component/About'
import Skills from './Component/Skills';
import Education from './Component/Education';
import Style from './Component/Style.css';
import Home from './Component/Home';
import WorkExperience from './Component/WorkExpercience';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path='/education' element={<Education/>}/>
        <Route path='/workexperience' element={<WorkExperience/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
