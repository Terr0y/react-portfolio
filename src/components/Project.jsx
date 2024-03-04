import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}> {/* mx-auto centers the card */}
      <img src={imageUrl} className="card-img-top" alt="Project" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">View Project</a>
      </div>
    </div>
  );
};

export default Project;
