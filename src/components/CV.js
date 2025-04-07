import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import "../styles/CV.css";
import umproject from '../img/Real_Time_IMU_Exercise_Tracking_MeTRIC.png'
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function CV() {
    const [sectionStates, setSectionStates] = useState({
    all: true,
    workExperience: true,
    research: true,
    education: true,
    awards: true,
    certifications: true,
    skills: true,
    projects: true,
    areasOfInterest: true,
    communityEngagement: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

   const toggleSection = (section) => {
    if (section === "all") {
    setSectionStates((prevState) => {
      const newState = {};
      const isAllExpanded = !prevState.all; 
      Object.keys(prevState).forEach((key) => {
        if (key !== "all") {
          newState[key] = isAllExpanded;
        }
      });
      newState.all = isAllExpanded; 
      return newState;
    });
  } else {
    setSectionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }
  };

  const handlePreviewClick = (title, image) => {
    setSelectedImage(image); 
    setModalTitle(title);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <NavBar />
    <div className="container">
      <header className="header">
        <h1>Curriculum Vitae
          {sectionStates.all ? <span onClick={() => toggleSection("all")}>
            (collapse all)
          </span> :
          <span onClick={() => toggleSection("all")}>
            (expand all)
          </span>}
        </h1>
      </header>

      <section className="section work-experience">
        <h2 className="cv-section-header">Work Experience
          {sectionStates.workExperience ? <span onClick={() => toggleSection("workExperience")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("workExperience")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.workExperience && (
        <>
        <div className="cv-card">
          <h3>Machine Learning Researcher | University of Michigan</h3>
          <p>Jun 2024 – Jan 2025 | Ann Arbor, MI</p>
          <ul>
            <li>Applied the full machine learning cycle; from data collection and model training to optimization.</li>
            <li>Developed embedded systems in C using nRF Connect SDK on Zephyr RTOS.</li>
            <li>Integrated Bluetooth Low Energy advertising and conducted packet analysis using WireShark.</li>
            <li>Applied digital signal processing, such as Kalman filtering to refine sensor data.</li>
            <li>Designed and 3D printed custom enclosures for all project components.</li>
          </ul>
        </div>
        <div className="cv-card">
          <h3>Software Developer Intern | True Community Credit Union</h3>
          <p>Oct 2024 - March 2025 | Westland, MI</p>
          <ul>
            <li>Wrote code to migrate 105,000 members into the HubSpot CRM.</li>
            <li>Developed a big data API that automatically manages the export of all our member and product data.</li>
            <li>Developed a filtering system for index files that reduced manual labor by 92%.</li>
            <li>Developed a rewards widget microservice.</li>
          </ul>
        </div>
        <div className="cv-card">
          <h3>Software Developer | Ford Direct</h3>
          <p>Aug 2022 - Oct 2024 | Dearborn, MI </p>
          <ul>
            <li>Developed a big data framework in Databricks which was adopted by 4 teams.</li>
            <li>Leveraged Jenkins for CI/CD of our deployments and automated workflows. </li>
            <li>Developed Azure DevOps pipelines for seamless execution of Databricks jobs. </li>
            <li>Automated Serenity testing for 3,000+ websites across multiple products. </li>
            <li>Automated over 1,000 tests, which cut manual effort by 95%. </li>
            <li>Created HTML reports, ELK and Azure DevOps dashboards for automation results. </li>
            <li>Integrated SonarQube into Azure DevOps and Bitbucket for enhanced code quality. </li>
            <li>Led the daily agile stand ups.</li>
          </ul>
        </div>
        <div className="cv-card">
          <h3>Application Engineer | Automated Machine Systems</h3>
          <p>Oct 2021 - Aug 2022 | Jenison, MI</p>
          <ul>
            <li>Analyzed part data, machine designs, and documentation to deliver precise project kick-offs.</li>
            <li>Sourced and designed 2D and 3D models with Design for Assembly (DFA) techniques.</li>
            <li>Engineered efficient conveyor systems per customer requirements.</li>
          </ul>
        </div>
        </>
      )}
      </section>

      <section className="section research">
        <h2 className="cv-section-header">Research
          {sectionStates.research ? <span onClick={() => toggleSection("research")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("research")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.research && (
        <>
        <div className="cv-card">
          <h3>University of Michigan | Dr. Christopher Brooks | Smart Barbell Collar</h3>
          <p>June 2024 – Jan 2025</p>
          <ul>
            <li>Collected data for 5 distinct exercises from multiple participants.</li>
            <li>Achieved 94% accuracy in real-time exercise detection with our machine learning model.</li>
            <li>Presented at the MeTRIC Symposium.</li>
            <li>Published findings in the University of Michigan’s Deep Blue Document Repository.</li>
          </ul>
          <div className="poster-links">
            <button className='cv-card-btn' onClick={() => handlePreviewClick('Research Project', umproject)}>
              Quick preview
            </button>
          </div>
        </div>
        </>
        )}
      </section>

      <section className="section education">
        <h2 className="cv-section-header">Education
          {sectionStates.education ? <span onClick={() => toggleSection("education")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("education")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.education && (<>
        <div className="cv-card">
          <h3>University of Michigan</h3>
          <p>Master of Science in Computer Science (In-progress)</p>
        </div>
        </>)}
        {sectionStates.education && (<>
        <div className="cv-card">
          <h3>Oakland University</h3>
          <p>B.I.S focus in Computer Science | GPA: 3.96 / 4.0</p>
        </div>
        </>)}
      </section>

      <section className="section awards">
        <h2 className="cv-section-header">Awards
          {sectionStates.awards ? <span onClick={() => toggleSection("awards")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("awards")}>
            (expand)
          </span>}
        </h2>

        {sectionStates.awards && (<>
        <div className="cv-card">
          <h3>Oakland University</h3>
          <p>Summa Cum Laude</p>
        </div>
        <div className="cv-card">
          <h3>Oakland University</h3>
          <p>President's List</p>
        </div>
        </>)}
      </section>

      <section className="section certifications">
        <h2 className="cv-section-header">Certifications
          {sectionStates.certifications ? <span onClick={() => toggleSection("certifications")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("certifications")}>
            (expand)
          </span>}
        </h2>

        {sectionStates.certifications && (<>
          <div className="cv-card">
            <Link to="/certificates">Certifications Page</Link>
          </div>
        </>)}
      </section>

      <section className="section skills">
        <h2 className="cv-section-header">Skills
          {sectionStates.skills ? <span onClick={() => toggleSection("skills")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("skills")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.skills && (<>
          <div className="cv-card">
          <ul>
            <li>Advanced Statistics, Advanced Mathematics, Algorithms, Data Science</li>
            <li>Machine Learning, Convolutional Neural Networks (CNN), Reinforcement Learning</li>
            <li>Large Language Models (LLM), Bayesian Methods, Data Collection</li>
            <li>Data Preprocessing, Feature Engineering, Data Visualization</li>
            <li>A/B Tests, Machine Learning Deployment, Signal Processing</li>
            <li>JavaScript, Python, C, ReactJS, HTML, CSS</li>
            <li>Backend Development, RESTful APIs, API Design, Azure, Docker, Linux, Git</li>
            <li>Embedded Systems, MongoDB, SQL Server, Elastic Search</li>
            <li>2D/3D Modeling, 3D Printing</li>
          </ul>
        </div>
        </>)}
      </section>

      <section className="section projects">
        <h2 className="cv-section-header">Projects
          {sectionStates.projects ? <span onClick={() => toggleSection("projects")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("projects")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.projects && (<>
        <div className="cv-card">
          <ul>
            <li>Smart Barbell Collar (Neural Network and Random Forest)</li>
            <li>GPT-2: Storyteller AI (CNN and Transformer Architecture)</li>
            <li>8 Bit Computer TTL Chips Only: From Scratch (In progress)</li>
            <li>Authoring Ebooks on topics ranging from Mathematics to Embedded Systems (In progress)</li>
            <li>Media Mixed Modeling (Bayesian Methods With Ad-stock and Saturation Regression)</li>
            <li>Brain Tumor Classification (Convolutional Neural Network)</li>
            <li>Scene Object Detection (Convolutional Neural Network)</li>
          </ul>
          <Link to="/projects">More Projects Here</Link>
        </div>
        </>)}
      </section>

      <section className="section areas-of-interest">
        <h2 className="cv-section-header">Areas of Interest
          {sectionStates.areasOfInterest ? <span onClick={() => toggleSection("areasOfInterest")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("areasOfInterest")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.areasOfInterest && (<>
        <div className="cv-card">
          <ul>
            <li>Human Activity Recognition (HAR) and Predictive Metrics in Health and Fitness</li>
            <li>Autonomous Systems</li>
            <li>AI for Crime Prediction and Prevention</li>
            <li>Generative AI and Image Recognition for Visual Intelligence</li>
            <li>Reinforcement Learning in Simulation-Based Environments</li>
          </ul>
        </div>
        </>)}
      </section>

      <section className="section community-engagement">
        <h2 className="cv-section-header">Community Engagement
          {sectionStates.communityEngagement ? <span onClick={() => toggleSection("communityEngagement")}>
            (collapse)
          </span> :
          <span onClick={() => toggleSection("communityEngagement")}>
            (expand)
          </span>}
        </h2>
        {sectionStates.communityEngagement && (<>
        <div className="cv-card">
          <h3>Habitat for Humanity</h3>
          <p>I have contributed to the construction of 3 homes for low-income families.</p>
        </div>
        <div className="cv-card">
          <h3>Forgotten Harvest</h3>
          <p>I have helped sort and save over 700 pounds of surplus food for community members in need.</p>
        </div>
        </>)}
      </section>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            alt={modalTitle}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
    <ScrollToTop /> 
    <Footer />
    </>
  );
}

export default CV;
