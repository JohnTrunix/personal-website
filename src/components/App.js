import "../css/App.css";

import portrait from "../img/portrait.png";
import linkedinsvg from "../svg/linkedin.svg";
import githubsvg from "../svg/github.svg";
import kagglesvg from "../svg/kaggle.svg";

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <img className="app_container_img" src={portrait} alt="Portrait" />
        <h1 className="app_container_name">John Truninger</h1>
        <h3 className="app_container_text">
          Working Student <br />
          Data Management and Process Automation <br />
          at Siemens SI
        </h3>
        <div className="app_container_social">
          <a
            className="app_container_social_icon"
            href="https://www.linkedin.com/in/john-truninger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinsvg} alt="Linkedin" />
          </a>
          <a
            className="app_container_social_icon"
            href="https://github.com/JohnTrunix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubsvg} alt="Github" />
          </a>
          <a
            className="app_container_social_icon"
            href="https://www.kaggle.com/johntrunix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kagglesvg} alt="Kaggle" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
