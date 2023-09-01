import React, { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {

  // Si
  const [si, setSi] = useState("Site")
  const Si = () => {
    return (
      <div className="sd-grid">
        <div className="res-order">
          {si === "Admin" ? (
            <video width="100%" height="auto" muted controls className="video-a">
              <source src={require('../assets/si-a.mp4')} type="video/mp4" />
              <source src={require('../assets/si-a.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video width="100%" height="auto" muted controls className="video-m">
              <source src={require('../assets/si-m.mp4')} type="video/mp4" />
              <source src={require('../assets/si-m.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="v1">
          <button onClick={() => setSi("Site")} className={`${si === "Site" ? 'pbtn' : 'pbtn-active'}`}>Site</button>
          <button onClick={() => setSi("Admin")} className={`${si === "Admin" ? 'pbtn' : 'pbtn-active'}`}>Admin Panel</button>
          <h2>Stikcon Interior</h2>
          <p>Developed complete UI part of interior website and admin panel.</p>
          <p>Used stacks: HTML, SCSS, React JS</p>
        </div>
      </div>
    )
  }

  // Sa
  const [sa, setSa] = useState("Site")
  const Sa = () => {
    return (
      <div className="sd-grid">
        <div>
          <button onClick={() => setSa("Site")} className={`${sa === "Site" ? 'pbtn' : 'pbtn-active'}`}>Site</button>
          <button onClick={() => setSa("Admin")} className={`${sa === "Admin" ? 'pbtn' : 'pbtn-active'}`}>Admin Panel</button>
          <h2>Stikcon Architecture</h2>
          <p>Developed complete UI part of architecture website and admin panel.</p>
          <p>Used stacks: HTML, SCSS, React JS</p>
        </div>
        <div className="res-order">
          {sa === "Admin" ? (
            <video width="100%" height="auto" muted controls className="video-a">
              <source src={require('../assets/sa-a.mp4')} type="video/mp4" />
              <source src={require('../assets/sa-a.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video width="100%" height="auto" muted controls className="video-m">
              <source src={require('../assets/sa-m.mp4')} type="video/mp4" />
              <source src={require('../assets/sa-m.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    )
  }

  // Wt
  const [wt, setWt] = useState("Site")
  const Wt = () => {
    return (
      <div className="sd-grid">
        <div className="res-order">
          {wt === "Admin" ? (
            <video width="100%" height="auto" muted controls className="video-a">
              <source src={require('../assets/w-a.mp4')} type="video/mp4" />
              <source src={require('../assets/w-a.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video width="100%" height="auto" muted controls className="video-m">
              <source src={require('../assets/w-m.mp4')} type="video/mp4" />
              <source src={require('../assets/w-m.mp4')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div>
          <button onClick={() => setWt("Site")} className={`${wt === "Site" ? 'pbtn' : 'pbtn-active'}`}>Site</button>
          <button onClick={() => setWt("Admin")} className={`${wt === "Admin" ? 'pbtn' : 'pbtn-active'}`}>Admin Panel</button>
          <h2>Wise talkies</h2>
          <p>Work closely with other developers to develop a frontend part of the e-learning platform for wise talkies. and build an admin panel individually.</p>
          <p>Used stacks: HTML, SCSS, Bootstrap, React JS</p>
        </div>
      </div>
    )
  }

  //
  const Kofy = () => {
    return (
      <div className="sd-grid">
        <div>
          <h2>Kofy App</h2>
          <p>Build a complete frontend design for an Investment app Kofy.
            kofy is helping Indians to create a Savings & Investments habbit. Providing them an engaging experience to Create Goals, make savings towards their Goals.
          </p>
          <p>Used stacks: React Native Expo</p>
        </div>
        <div className="res-order">
          <video width="100%" height="600px" muted controls style={{ backgroundColor: "var(--black)" }}>
            <source src={require('../assets/kofy.mp4')} type="video/mp4" />
            <source src={require('../assets/kofy.mp4')} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }


  const stackroleP = [
    { id: 1, title: "E-commerce website template", src: require("../assets/s1.jpg") },
    { id: 2, title: "Restaurant website template", src: require("../assets/s2.jpg") },
    { id: 3, title: "Portfolio website template", src: require("../assets/s3.jpg") },
    { id: 4, title: "Portfolio website template", src: require("../assets/s4.jpg") },
    { id: 5, title: "Restaurant website template", src: require("../assets/s5.jpg") },
    { id: 6, title: "Matic old version clone", src: require("../assets/s6.jpg") },
    { id: 7, title: "Magazine / Blog App website template", src: require("../assets/s7.jpg") },
    { id: 8, title: "Mobile App website template", src: require("../assets/s8.jpg") },
    { id: 9, title: "Startup website template", src: require("../assets/s9.jpg") },
  ]


  const Images = stackroleP.map(i => {
    return (
      <div className="s-t-photos">
        <h3 className="overlay-image-title">{i.title}</h3>
        <LazyLoadImage
          alt={i.title}
          src={i.src}
        />
      </div>
    )
  })


  return (
    <section id="projects">
      <div className="surgyy-section" id='surgyy-design-projects'>
        <div className="surgyyd-info">
          <h2>Surgyy Design Projects</h2>
          <p>Manage website development projects from the initial stage through completion.</p>
          <p>Translated figma designs into interface code and built reusable components for future uses.</p>
          <p>Collaborated with UX designers, developers, and clients to meet project requirements.</p>
        </div>
        <Si />
        <Sa />
        <Wt />
        <Kofy />
      </div>
      <div className="stackrp-section" id='stackrole-projects'>
        <div className="stackrp-info">
          <h2>Stackrole Projects</h2>
          <p>Created 20+ responsive and pixel-perfect website templates using Gatsby JS and Netlify CMS.</p>
          <p>Used Stacks: Theme UI / CSS for Styling, and GraphQl / JSON to pull the data from Netlify CMS.</p>
          <p>Other Roles: Designing images on Figma, Managing social media handles, Drafting the posts, Handling site updates etc.</p>
        </div>
        <div className="stackrole-templates">
          {Images}
        </div>
      </div>
    </section>
  )
}
export default Projects