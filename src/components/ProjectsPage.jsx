import React from 'react';
import Project from './Project';

// Placeholder array for project data
const projectData = [
  // Replace with your actual project data and image paths
  {
    title: 'Project React',
    description: 'Description of Project 1',
    imageUrl: './images/HTML.png',
  },
  {
    title: 'Project React',
    description: 'Description of Project 1',
    imageUrl: './images/HTML.png',
  },
  // Add other projects as needed
];

const ProjectsPage = () => {
  return (
    <div>
      <h2 className="text-center">Work</h2>
      <div className="container mt-2">
        <div className="row justify-content-center">
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
