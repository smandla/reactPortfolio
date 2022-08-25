import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Header from "../Header";
import Typical from "react-typical";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { TbBrandGithub, TbBrandSoundcloud } from "react-icons/tb";
import { RiSoundcloudFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import "./AboutMe.css";
const Home = () => {
  console.log("in home");
  const name = `<KAVYA/>`;
  return (
    <motion.section
      exit={{ opacity: 0 }}
      style={{ background: "#151515", width: "100%", height: "100%" }}
    >
      <div>
        <div className="profile-container" id="Profile">
          <div className="profile-parent">
            <div className="profile-picture">
              {/* <div className="profile-details_nameTag">{name}</div> */}

              <div className="profile-picture-background"></div>
            </div>
            <div className="profile-details">
              <div className="profile-details-name">
                <span className="primary-text"> Hello, I'm Kavya</span>
              </div>

              <div className="profile-details-role">
                <span className="primary-text">
                  <h1>
                    I'm a
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Full Stack Engineer",
                        2000,
                        "Music Producer",
                        2000,
                        "Food Blogger",
                        2000,
                        "Dancer",
                        2000,
                        "Photographer",
                        2000,
                      ]}
                    />
                  </h1>
                  <span className="social_media">
                    <a href="www.linkedin.com/srikavya-mandla">
                      <FaLinkedinIn />
                    </a>
                    <a href="www.linkedin.com/srikavya-mandla">
                      <TbBrandGithub />
                    </a>
                    <a href="www.linkedin.com/srikavya-mandla">
                      <RiSoundcloudFill />
                    </a>
                    <a href="www.linkedin.com/srikavya-mandla">
                      <FaPhoneAlt />
                    </a>
                    <a href="www.linkedin.com/srikavya-mandla">
                      <MdOutlineEmail />
                    </a>
                  </span>
                  {/* <span className="profile-role-tagline">
                    Junior Front End Engineer with experience in React,
                    HTML/CSS, JavaScript, Node.JS, MERN stack. Currently, I am
                    working on a Wordle Clone using the React framework. Outside
                    of programming, I love to hike, travel, produce music,
                    dance, and blog about new restaurants (@kavskravings).
                  </span> */}
                </span>
              </div>
              <div className="profile-optins">
                {/* <a href={ResumeDoc} download="ResumeDoc"> */}
                {/* <button className="btn highlighted-btn">Get Resume</button>
                </a> */}
                {/* <a href="CV.hosein.pdf" download="hosein CV.hosein.pdf">
                  <button className="btn highlighted-btn">Hire Me!</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
