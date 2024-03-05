// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; //  imported Bootstrap CSS 

// const Project = ({ title, description, imageUrl }) => {
//   return (
//     <div className="card mx-auto" style={{ width: '18rem' }}> {/* mx-auto centers the card */}
//       <img src={imageUrl} className="card-img-top" alt="Project" />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href="https://terr0y.github.io/Weather_Forecast/" className="btn btn-primary">View Project</a>
//         <a href="https://terr0y.github.io/Weather_Forecast/" className="btn btn-primary">View Project</a>
//       </div>
//     </div>
//   );
// };

// export default Project;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ title, description, imageUrl, projectUrl, exploreUrl }) => {
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={exploreUrl} className="btn btn-secondary">Explore More</a>
      </div>
    </div>
  );
};

export default Project;
