import React from "react";
import Carousel from "./Carousel"; 
import profilepic from "../images/profile_pic.png";
const HomePage = () => {
  return (
    <div>
      <section id="hero" className="jumbotron text-center mb-4">
        <div className="container">
                <img src={profilepic} alt="Your Profile" className="rounded-circle" />
          <h1 className="display-2">Ola Terry</h1>
          <p className="lead">
          With a robust background in telecommunications as a Fiber Specialist Engineer, I have honed the art of connectivity and innovation within the tech industry. Currently, I am transitioning my skill set to encompass front-end web development, where I blend creative design with technical proficiency to build intuitive user experiences. For a closer look at my professional journey and to explore collaborative opportunities, visit my LinkedIn profile.
          </p>
          <a
            href="https://uk.linkedin.com/in/ola-terry-8b2011a2/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </div>
      </section>
      <Carousel /> {/* add carousel component */}
            <section className="container">
        <section id="skills" className="col-12">
          <div className="card text-center rounded-4">
            <h2 className="mb-4">Skills</h2>
            <p>
              The listed skills in the grid below, are what I have learnt so far
              and I looking forward to learn some other skills as per the module
              in other for me to become a well skilled Front-End Web Developer.
            </p>
          </div>
        </section>

        <section className="row">
          <div className="col-md-6 col-sm-12">
            <section className="card" id="html-section">
              <h2>HTML</h2>
              <ul>
                <li>
                  The head element contains information about the webpage.
                </li>
                <li>
                  The body element represents the visible content shown to the
                  user.
                </li>
                <li>
                  HTML tells browsers which part of a webpage is a header, which
                  is a footer, where paragraph belongs, where images and
                  grahics, and videos are placed.
                </li>
                <li>
                  Every HTML tag begins with an open angle bracket {`(<)`} and
                  closes with a closed angle bracket {`(>)`}
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
                  developers to control the layout, colors, fonts, and spacing
                  of web pages
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className="row">
          <div className="col-md-6 col-sm-12">
            <section className="card" id="Bootstrap-section">
              <h2>Bootstrap</h2>
              <ul>
                <li>
                  Bootstrap is a powerful tool which enable us to work with HMTL
                  without hassle
                </li>
                <li>
                  Using Bootstrap component like NavBar, Grid, Container etc
                  this enable me to enhance the visual appeal and functionality
                  of my website
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
                  A variable is a named container that allows us to store data
                  in our code.
                </li>
                <li>
                  Control flow is the order in which a computer executes code in
                  a script.
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className="row">
          <div className="col-md-6 col-sm-12">
            <section className="card" id="API-section">
              <h2>API</h2>
              <ul>
                <li>
                  APIs (Application Programming Interfaces) enable different
                  software applications to communicate with each other.
                </li>
                <li>
                  They serve as a bridge between different software systems,
                  allowing them to share data and functionality seamlessly.
                </li>
                <li>
                  APIs are crucial for creating integrated digital ecosystems,
                  enhancing user experience by enabling services like payment
                  gateways, social media integration, and data sharing across
                  platforms.
                </li>
              </ul>
            </section>
          </div>

          <div className="col-md-6 col-sm-12">
            <section className="card" id="React-section">
              <h2>React</h2>
              <ul>
                <li>
                  React is a declarative, efficient, and flexible JavaScript
                  library for building user interfaces.
                </li>
                <li>
                  It lets you compose complex UIs from small and isolated pieces
                  of code called "components".
                </li>
                <li>
                  React has a strong ecosystem and is widely used for building
                  single-page applications and mobile apps with a seamless user
                  experience.
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className="row">
          <div className="col-md-6 col-sm-12">
            <section className="card" id="NodeJS-section">
              <h2>Node.js</h2>
              <ul>
                <li>
                  Node.js is an open-source, cross-platform, JavaScript runtime
                  environment that executes JavaScript code outside a web
                  browser.
                </li>
                <li>
                  It enables developers to use JavaScript to write command-line
                  tools and for server-side scripting—running scripts
                  server-side to produce dynamic web page content before the
                  page is sent to the user's web browser.
                </li>
                <li>
                  Consequently, Node.js represents a "JavaScript everywhere"
                  paradigm, unifying web-application development around a single
                  programming language, rather than different languages for
                  server- and client-side scripts.
                </li>
              </ul>
            </section>
          </div>

          <div className="col-md-6 col-sm-12">
            <section className="card" id="javascript-section">
              <h2>ES6</h2>
              <ul>
                <li>
                  ES6, also known as ECMAScript 2015, introduced significant
                  improvements to the JavaScript language, including new syntax
                  and features for writing more complex applications.
                </li>
                <li>
                  Features like classes, modules, template literals, and arrow
                  functions have made JavaScript development more efficient and
                  readable.
                </li>
                <li>
                  ES6 has been a major step forward for JavaScript, enabling
                  developers to build more scalable and maintainable
                  applications.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section className="row">
          <div className="col-sm-12">
            <section className="card" id="git-section">
              <h2>Git</h2>
              <ul>
                <li>git status: checks what branch we are currently on</li>
                <li>
                  git checkout -b branch-name: creates a new branch and switches
                  to it
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
