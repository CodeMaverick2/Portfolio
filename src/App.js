import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
function App() {
  return (
    <div className="main">
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
