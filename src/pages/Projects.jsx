import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { useEffect, useState } from 'react';
import "../styles/Projects.css";
import Loader from "../components/Loader";

function Projects() {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },)
  return (
    <>
      {loading ? <Loader/> : <div className="container"> 
      
           
      <h1 className="text-center mt-5 mb-5 fw-bold"> My Personal Projects</h1>
      <div className="container d-flex justify-content-center align-items-center" >
      <div className="row">
        {ProjectList.map((project, idx) => {
          return (
          <ProjectItem id={idx} name={project.name} image={project.image} link={project.link} skills={project.skills} key={idx} />
          );
        })}
        </div>
        </div>
     
      </div>}
      
      </>
  );
}

export default Projects;