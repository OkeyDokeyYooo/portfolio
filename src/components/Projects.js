import React from "react";

import Card from "./Card";
import covid19Img from "../images/covid19.png";
import wechat from "../images/wechat.png";
import vaneat from "../images/vaneat.svg";

const Projects = () => {
    return (
        <section name="project" className="project-section">
            <div className="title" style={{ color: "black" }}>
                Projects
            </div>
            <div className="project-container">
                <div className="projects-title">
                    <h1>My Recent Work</h1>
                    <h5>Here are a few projects I've worked on recently.</h5>
                </div>
                <div className="project-inner-container">
                    <Card
                        imgLocation={covid19Img}
                        header="COVID-19 GLOBAL UPDATE"
                        description="A Live Tracking Website about Worldwide COVID-19 Pandemic, featured with detail information and live updated news."
                        website="http://covid19.hackhub.cn/"
                    />
                    <Card
                        imgLocation={wechat}
                        header="Taranto E-Shop"
                        description="WeChat based E-shop for purchasing brand Taranto bags"
                    />
                    <Card
                        imgLocation={vaneat}
                        header="VanEat"
                        description="Designed for Vancouver local restaurant guide, user can search restaurants by category, leave reviews and rates."
                        website="http://vaneat.herokuapp.com/"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
