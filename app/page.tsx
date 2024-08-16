import * as React from 'react';
import Button from '@mui/material/Button';
import Layout from './layout';
import { Avatar, Card, CardActions, CardHeader } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>Josiah Railton</h1>
        <nav>
          <div className="navLinks">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="socialIcons">
            <a href="https://www.linkedin.com/in/josiah-railton-jrailton222" target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></a>
            <a href="https://github.com/JosiahRailton" target="_blank" rel="noopener noreferrer"><GitHubIcon></GitHubIcon></a>
          </div>
        </nav>
      </header>
    </Layout>
  );
}