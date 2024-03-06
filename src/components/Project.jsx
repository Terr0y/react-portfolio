import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ title, description, imageUrl, projectUrl, GithubUrl }) => {
  return (
    <div className="card mx-auto my-3" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={GithubUrl} className="btn btn-primary me-4" target="_blank" rel="noopener noreferrer">Github</a>
        <a href={projectUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default Project;

