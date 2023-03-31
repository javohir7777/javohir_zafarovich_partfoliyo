import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home">
          <div className="about">
            <h2> Hi, My name is Javohir</h2>
            <div className="prompt">
              <p>
                I'm a software developer with a passion for learning and
                creating.
              </p>
              <Link to="https://www.linkedin.com/in/javoxir-jumayev-01a91b235/">
                <LinkedIn />
              </Link>
              <Link to="mailto:javohirjumayev7777@gmail.com">
                <Email />
              </Link>
              <Link to="https://github.com/javohir7777">
                <GitHub />
              </Link>
            </div>
            <a
              href="Javohir_Jumayev.pdf"
              className="btn btn-outline-light fs-5 fw-bold mt-3"
              target="_blank"
            >
              Download CV
            </a>
          </div>
          <div className="skills">
            <h1> Skills</h1>
            <ol className="list">
              <li className="item">
                <h2> Front-End</h2>
                <span>
                  ReactJS, Redux, Typescript, HTML, CSS , BootStrap,
                  Tailwind.css, MaterialUI, YARN, NPM, ANT Design
                </span>
              </li>
              <li className="item">
                <h2> Back-End</h2>
                <span>NodeJS, ExpressJS, MongoDB , MySQL </span>
              </li>
              <li className="item">
                <h2> Languages</h2>
                <span>Javascript, C++</span>
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
