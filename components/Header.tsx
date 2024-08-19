import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
  return (
    <div className="header">
      <a href="../">
        <h1>Josiah Railton</h1>
      </a>
      <nav>
        <div className="navLinks">
          <a href="../">Home</a>
          <a href="../About">About</a>
          <a href="../Contact">Contact</a>
        </div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/josiah-railton-jrailton222" target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></a>
          <a href="https://github.com/JosiahRailton" target="_blank" rel="noopener noreferrer"><GitHubIcon></GitHubIcon></a>
        </div>
      </nav>
    </div>
  )
}