import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCommentDots, faChild } from "@fortawesome/free-solid-svg-icons";

const About = () => {

  const [about, setAbout] = useState("Skills")

  let Skills = about === "Skills"
  let Experience = about === "Experience"
  let Education = about === "Education"
  let PersonalInfo = about === "PersonalInfo"


  return (
    <section className="about-section" id="about-me">
      <div className="about-info">
        <div>
          <div onClick={() => setAbout("Skills")} className={`about-box ${Skills ? 'box-active' : 'box1'}`}>
            Skills
          </div>
          <div onClick={() => setAbout("Experience")} className={`about-box ${Experience ? 'box-active' : 'box2'}`}>
            Experience
          </div>
          <div onClick={() => setAbout("Education")} className={`about-box ${Education ? 'box-active' : 'box3'}`}>
            Education
          </div>
          <div onClick={() => setAbout("PersonalInfo")} className={`about-box ${PersonalInfo ? 'box-active' : 'box4'}`}>
            Personal Info
          </div>
        </div>

        <div className="about-details">
          {/* Skills Starts */}
          {Skills && (
            <div className="about-skills">
              <div>
                <h3>Proficient with</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Responsive Web Design</li>
                  <li>PSD to HTML Prototype</li>
                </ul>
              </div>

              <div>
                <h3>Good with</h3>
                <ul>
                  <li>React JS</li>
                  <li>Gatsby JS</li>
                </ul>
              </div>

              <div>
                <h3>Core of</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React Native</li>
                </ul>
              </div>

              <div>
                <h3> Familiar with</h3>
                <ul>
                  <li>GitHub</li>
                  <li>Figma</li>
                  <li>Bootstrap</li>
                  <li>Theme UI</li>
                  <li>JSON</li>
                  <li>GraphQL</li>
                  <li>JSX</li>
                  <li>Netlify CMS(YAML)</li>
                </ul>
              </div>
            </div>
          )}
          {/* Skills Ends */}

          {/* Experience Starts */}
          {Experience && (
            <div>
              <div className="experience">
                <h3>Surgyy Design Labs</h3>
                <span>May 2022 - Nov 2022</span>
                <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> Bangalore (Remote)</p>
              </div>
              <div className="experience">
                <h3>Stackrole</h3>
                <span>Mar 2021 - Mar 2022</span>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nellore, Andhra Pradesh</p>
              </div>
            </div>
          )}
          {/* Experience Ends */}

          {/* Education Starts */}
          {Education && (
            <div>
              <div className="education">
                <h3>Bachelor of Computer Application(BCA)</h3>
                <span>2017 – 2020</span>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> KCDC affiliate by Vikrama Simhapuri University Nellore</p>
              </div>
              <div className="education">
                <h3>MPC</h3>
                <span>2015 – 2017</span>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Krishna Chaitanya Junior College Nellore</p>
              </div>
            </div>
          )}
          {/* Education Ends */}


          {/* PersonalInfo Starts */}
          {PersonalInfo && (
            <div>
              <div className="personal-details">
                <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h3>
                <p>Nellore, Andhra Pradesh</p>
              </div>
              <div className="personal-details">
                <h3><FontAwesomeIcon icon={faChild} /> Date Of Birth</h3>
                <p>29-10-1998</p>
              </div>
              <div className="personal-details">
                <h3><FontAwesomeIcon icon={faCommentDots} /> Languages Known</h3>
                <p>English, Telugu, Hindi, and Urdu</p>
              </div>

            </div>
          )}
          {/* PersonalInfo Ends */}

        </div>
      </div>
    </section>
  )
}
export default About