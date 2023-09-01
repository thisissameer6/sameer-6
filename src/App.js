import './App.scss';
import About from './components/about';
import Projects from './components/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <>
      <header>
        <nav>
          <h2>Sameer Portfolio</h2>
          <ul>
            <li><a href='#home'>Intro</a></li>
            <li><a href='#about-me'>About Me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#hire-me'>Hire Me</a></li>
          </ul>
        </nav>
      </header>
      <div className="hero-section" id='home'>
        <div>
          <h1>Hey, I'm Sameer</h1>
          <p>I'm an experienced frontend developer with 1.8 years of expertise. My proficiency in HTML/CSS,
            React JS, and Gatsby JS allows me to create flawless and responsive designs that meet both user and business needs. I'm passionate about translating abstract concepts into functional and visually appealing frontend solutions.</p>
          <a className='hire-btn' href='#hire-me'>Contact Me</a>
        </div>
        <div className='my-pic'>
          <img src={require("..//src/sameer.png")} alt="my-pic" style={{ width: "100%" }} />
        </div>
      </div>

      <About />
      <Projects />
      <footer id='hire-me'>
        <div className='footer'>
          <div className='f-info'>
            <h2>Are You Hiring?</h2>
            <p>I'm Looking for UI / Frontend Developer Role</p>
            <ul>
              <li>Relevent Experience:<br/> 1.8 Years</li>
              <li>Preferred Location Type:<br/> Remote / Hybrid Only</li>
            </ul>
          </div>
          <div className='f-btns'>
            <button><a href='https://www.linkedin.com/in/thisissameer/' target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></button>
            <button><a href='mailto:sksameer204@gmail.com' target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /> Email</a></button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
