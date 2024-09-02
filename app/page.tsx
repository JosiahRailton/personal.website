import ImageSlides from '@/components/ImageSlides';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import { StaticImageData } from "next/image";
import project1Image1 from "@/public/FilmCallSheetGeneratorImages/HomePage.png";
import project1Image2 from "@/public/FilmCallSheetGeneratorImages/SchedulePage.png";
import project1Image3 from "@/public/FilmCallSheetGeneratorImages/TagPage.png";
import project2Image1 from "@/public/ClassSchedule/SampleSchedule.png";
import project2Image2 from "@/public/ClassSchedule/DropDownSample.png";
import project3Image1 from "@/public/RoundnetRating/HomeSample.png";
import project3Image2 from "@/public/RoundnetRating/EloCode.png";

// Maybe try to put more of this in ImageSlides.tsx to make more independent.

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const project1Images: ImageData[] = [
  { src: project1Image1, },
  { src: project1Image2, },
  { src: project1Image3, },
];

const project2Images: ImageData[] = [
  { src: project2Image1, },
  { src: project2Image2, },
];

const project3Images: ImageData[] = [
  { src: project3Image1, },
  { src: project3Image2, },
];

export default function Home() {
  return (
    <div className="mainContent">
      <div className="heroBanner">
        <div id="heroText">
          <p id="heroTitle"> Full-Stack Developer</p>
          <p id="heroDescription"> Simple solutions for intricate problems
            without sacrificing quality</p>
        </div>
      </div>
      <div>
        <div id="skills">
          <div id="skillsDescription">
            <h2> Main Tech Skills</h2>
            <p> These are some main areas I have experience in</p>
          </div>
          <div className="skillsDisplay-flex">
            <div> TypeScript </div>
            <div> JavaScript </div>
            <div> Next.js </div>
            <div> React </div>
            <div> HTML </div>
            <div> CSS </div>
            <div> MySQL </div>
            <div> Database Design </div>
            <div> SQL </div>
            <div> Python </div>
          </div>
        </div>
        <div id="projectArea">
          <h2> Projects </h2>
          <div className="projects">
            <div className="projectDescription">
              <h3> Film Call Sheet Generator </h3>
              <p> I worked with a small remote team of Bethel University
                and Huntington University students for a senior project.
                We developed a web application to help film students and
                professionals generate call sheets to optimize the management
                of film projects. Users upload film script files and the
                application parses the file and organizes the needed data
                in a user-friendly way. I worked on both the front-end and
                back-end but focused primarily on the back-end.
              </p>
            </div>
            <div className="skillsDisplay-flex">
              <div> TypeScript </div>
              <div> Next.js </div>
              <div> React </div>
              <div> Node.js </div>
              <div> HTML </div>
              <div> CSS </div>
              <div> MySQL </div>
              <div> Database Design </div>
              <div> REST APIs </div>
              <div> Agile </div>
            </div>
            <div className="projectSlides">
              <ImageSlides imageList={project1Images} />
            </div>
          </div>
          <Divider className="projectDivider" variant="middle" />
          <div className="projects">
            <div className="projectDescription">
              <h3> Class Schedule Application </h3>
              <p>
                I developed a web application with two other students at
                Bethel University to help Bethel students plan class
                schedules. Users plan schedules for each year at Bethel
                according to the master schedule of when classes are offered.
                I worked mostly on the back-end with database design and
                implementation.
              </p>
            </div>
            <div className="skillsDisplay-flex">
              <div> HTML </div>
              <div> CSS </div>
              <div> JavaScript</div>
              <div> PHP </div>
              <div> Oracle Database </div>
              <div> Database Design </div>
              <div> Agile </div>
            </div>
            <div className="projectSlides">
              <ImageSlides imageList={project2Images} />
            </div>
          </div>
          <Divider className="projectDivider" variant="middle" />
          <div className="projects">
            <div className="projectDescription">
              <h3> Roundnet Rating Application </h3>
              <p>
                This was a personal hobby project I created to track games of
                Roundnet, commonly known as Spikeball, and rate players and
                teams accordingly. To accurately rate the players and teams I
                created a custom Elo formula, similar to how Chess ratings
                are generally calculated. This project was developed with
                Python and I mostly focused on the back-end. I am in the
                process of creating a web application with a better user
                interface to possibly deploy for public use.
              </p>
            </div>
            <div className="skillsDisplay-flex">
              <div> Python </div>
              <div> MySQL </div>
              <div> Database Design </div>
            </div>
            <div className="projectSlides">
              <ImageSlides imageList={project3Images} />
            </div>
          </div>
        </div>
        <p>More info down here</p>
      </div>
    </div>
  );
}