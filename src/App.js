import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import './App.css';

function App() {
  return (
    <div className='content'>
      <h1 className='title'>Long</h1>
        <div className='links'>
          <a href='mailto:hi@vulongm.com'><AiFillMail/></a>
          <a href='https://github.com/vulongm'><SiGithub/></a>
          <a href='https://www.linkedin.com/in/vulongm/'><SiLinkedin/></a>
        </div>
    </div>
  );
}

export default App;
