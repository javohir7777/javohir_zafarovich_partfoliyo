import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub,InsertLink } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
   <div className="container d-flex justify-content-center align-items-center mt-4" style={{height:"100vh"}}>
    <div className="row">
      <div className="col-md-12">
      <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={project.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-text">
        The design of this project is very beautiful and responsive. This project was built using simple ReactJS codes and Bootstrap, Css was used for the design.It is built with easy and understandable functions for beginners.
        </p>
        <div className="card-footer bg-transparent border-success">
              <p className="fw-400">Technologies:</p>
                {project.skills.map(item=>{
                  return(
                    <span className="btn btn-dark" style={{fontSize:"10px", marginLeft:"2px" ,marginBottom:"2px"}} key={item}>{item}</span>
                  )
                  })}
              </div>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="col-md-12  bg-white mb-4" id="data-website">
        <div className="row  mb-2">
          <div className="col-md-4 fs-5 ms-2"><span className="iconsvg"><InsertLink/></span> Webiste Link:</div>
          <div className="col-md-6 d-flex  align-items-center" id="project-link"><a  className="fs-5 fw-bolder text-decoration-none" href={project.link} target="_blank">{project.domen}</a></div>
        </div>
      </div>
      <div className="col-md-12  bg-white mb-4" id="data-website">
      <div className="row bg-white">
          <div className="col-md-4 fs-5 ms-2"><span className="iconsvg"><GitHub/></span> Github Source Code:</div>
          <div className="col-md-6 d-flex  align-items-center" id="project-link"><a className="fs-5 fw-bolder text-decoration-none"  href={`https://${project.github}`} target="_blank">{project.github}</a></div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default ProjectDisplay;