import React from 'react';
import Carousel from './Carousel'; // You will need to create this component
import profilepic from "../images/profile_pic.png"
const HomePage = () => {
  return (
    <div>
      <section id="hero" className="jumbotron text-center mb-4">
        <div className="container">
          {/* Replace 'path_to_profile_pic' with the actual path to your profile image */}
          <img src= {profilepic} alt="Your Profile" className="rounded-circle" />
          <h1 className="display-2">Your Name</h1>
          <p className="lead">
            I'm a Fiber Specialist Engineer deeply involved in the telecom industry, ensuring smooth connectivity and driving innovation.
            Presently, I'm trying to develop my skills in Front-End-Web Developing. Check me out on Linkedin
          </p>
          <a href="https://www.linkedin.com/in/yourlinkedinprofile" className="btn btn-primary" target="_blank" rel="noopener noreferrer">click here</a>
        </div>
      </section>
      <Carousel /> {/* This will be your image carousel component */}
      {/* Additional content here */}
      <section className='container'>
      <section id="skills" class="col-12">
      <div className="card text-center rounded-4">
        <h2 className="mb-4">Skills</h2>
        <p>
          The listed skills in the grid below, are what I have learnt so far and
          I looking forward to learn some other skills as per the module in
          other for me to become a well skilled Front-End Web Developer.
        </p>
      </div>
    </section>
    

       <section className="row">
      <div className="col-md-6 col-sm-12">
        <section className="card" id="html-section">
          <h2>HTML</h2>
          <ul>
            <li>The head element contains information about the webpage.</li>
            <li>
              The body element represents the visible content shown to the user.
            </li>
            <li>
              HTML tells browsers which part of a webpage is a header, which is
              a footer, where paragraph belongs, where images and grahics, and
              videos are placed.
            </li>
            <li>
              Every HTML tag begins with an open angle bracket {`(<)`} and closes
              with a closed angle bracket {`(>)`}
            </li>
          </ul>
        </section>
      </div>

      <div className="col-md-6 col-sm-12">
        <section className="card" id="css-section">
          <h2>CSS</h2>
          <ul>
            <li>Styling web pages using CSS.</li>
            <li>
              CSS is a styling language used to describe the presentation of
              document written in HTML
            </li>
            <li>
              It enables the separation of content and design, allowing
              developers to control the layout, colors, fonts, and spacing of
              web pages
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section className='row'> 
    <div className="col-md-6 col-sm-12">
      <section className="card" id="Bootstrap-section">
        <h2>Bootstrap</h2>
        <ul>
          <li>
            Bootstrap is a powerful tool which enable us to work with HMTL
            without hassle
          </li>
          <li>
            Using Bootstrap component like NavBar, Grid, Container etc this
            enable me to enhance the visual appeal and functionality of my
            website
          </li>
          <li>I have learnt how to use the Bootstrap themes and style</li>
        </ul>
      </section>
</div>
<div className="col-md-6 col-sm-12">
        <section className="card" id="javascript-section">
          <h2>JavaScript</h2>
          <ul>
            <li>
              A variable is a named container that allows us to store data in
              our code.
            </li>
            <li>
              Control flow is the order in which a computer executes code in a
              script.
            </li>
          </ul>
        </section>
      </div>
    </section>
    <section className='row'>
    <div className="col-sm-12">
        <section className="card" id="git-section">
          <h2>Git</h2>
          <ul>
            <li>git status: checks what branch we are currently on</li>
            <li>
              git checkout -b branch-name: creates a new branch and switches to
              it
            </li>
          </ul>
        </section>
      </div>
    </section>
    </section>
    </div>
  );
};

export default HomePage;
