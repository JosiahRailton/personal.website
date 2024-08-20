import * as React from 'react';

export default function Home() {
  return (
    <div>
      <div className="heroBanner">
        <div id="heroText">
          <p id="heroTitle"> Full-Stack Developer</p>
          <p id="heroDescription"> Simple solutions for intricate problems without sacrificing quality</p>
        </div>
      </div>
      <div>
        <div id="skills">
          <div id="skillsDescription">
            <h2> Main Tech Skills</h2>
            <p> These are some main areas I have experience in</p>
          </div>
          <div id="skillsDisplay-flex">
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
          <p> </p>
        </div>
        <p>More info down here</p>
      </div>
    </div>
  );
}