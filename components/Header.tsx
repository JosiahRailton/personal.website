import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <a href="../">
        <h1>Josiah Railton</h1>
      </a>
      <nav>
        <div className="navLinks">
          <Link href="../">Home</Link>
          <Link href="../About">About</Link>
          <Link href="../Contact">Contact</Link>
        </div>
        <div className="socialIcons">
          <Link href="https://www.linkedin.com/in/josiah-railton-jrailton222" target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></Link>
          <Link href="https://github.com/JosiahRailton" target="_blank" rel="noopener noreferrer"><GitHubIcon></GitHubIcon></Link>
        </div>
      </nav>
    </div>
  )
}