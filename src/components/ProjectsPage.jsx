import React from "react";
import Project from "./Project";

// Placeholder array for project data
const projectData = [
  // project data and image paths
  {
    title: "Work Scheduler App",
    description:
      "Its an application that allow user to manage a nomal workday, the app displays the current day at the top and allows users to scroll through standard business hours. Users can easily add, save, and view events for each hour of the workday.",
    imageUrl: "./images/work-scheduler.gif",
    projectUrl: "https://terr0y.github.io/Work_Day_Scheduler/", 
    GithubUrl: "https://github.com/Terr0y/Work_Day_Scheduler" 
  },
  {
    title: "Weather Forecast",
    description:
      "Users can search for any city to get detailed weather data such as temperature, humidity, wind speed, and more.",
    imageUrl: "./images/weather.dashboard.png",
    projectUrl: "https://terr0y.github.io/Weather_Forecast/", 
    GithubUrl: "https://github.com/Terr0y/Weather_Forecast" 
  },
  {
    title: "Weather Forecast",
    description:
      "Users can search for any city to get detailed weather data such as temperature, humidity, wind speed, and more.",
    imageUrl: "./images/weather.dashboard.png",
    projectUrl: "https://terr0y.github.io/Weather_Forecast/", 
    GithubUrl: "https://github.com/Terr0y/Weather_Forecast" 
  },
  
  
];

const ProjectsPage = () => {
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: '30px' }}>Projects</h2>
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
