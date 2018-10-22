import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Footer from "./components/footer";
import WorkExperience from "./components/workExperience";
import Tag from "./components/tag";
import ProjectDetail from "./components/projectDetail";

class App extends Component {
  state = {
    name: "Sarfaraz Iraque",
    tagline:
      "Passionate to build awesome software products and automate everything",
    aboutme:
      "I am passionate about every technology, from basic C to Android to Machine Learning" +
      "I constantly learn latest technologies to stay closer to the edge of innovation" +
      "and apply best industry practices in software development.",
    skills: [
      "Java",
      "Python",
      "C/C++",
      "Bash",
      "Android App Development",
      "Nodejs",
      "Machine Learning",
      "MySQL",
      "Git"
    ],
    projects: [
      {
        title: "CSI-KJSCE Android App",
        subtitle: "Published on Play Store",
        highlights: [
          "First official app of KJSCE published on Play Store",
          "Follows Material Design guidelines",
          "Powered by Firebase Realtime database",
          "Open source and always improving"
        ]
      },
      {
        title: "nLabel",
        subtitle: "Image annotation tool",
        highlights: [
          "Standalone web app for creating labelled and annotated image datasets",
          "Auto scales annotated images to suit your training model",
          "Built with Nodejs and Expres",
          "Open source, ready to accept contributions"
        ]
      }
    ],
    experience: [
      {
        designation: "Machine Learning and Full Stack Intern",
        company: "AitoeLabs (aiSight Video Analytics Pvt. Ltd.)",
        place: "Mumbai",
        dateStart: "17/03/2018",
        dateEnd: "21/07/2018",
        contributions: [
          "Implemented 4 variants of object tracking algorithm in C++.",
          "Implemented Non-Max Suppression for object detection in C++",
          "Automated analysis and generation of test video outputs for hyper parameter tuning with Bash and Python scripts."
        ]
      },
      {
        designation: "Android application developer",
        company: "iSec Security Pvt. Ltd.",
        place: "Virtual",
        dateStart: "01/04/2017",
        dateEnd: "01/07/2017",
        contributions: ["Developed MVP for consumer security application."]
      },
      {
        designation: "Android application developer",
        company: "Arctech Ventures",
        place: "Mumbai",
        dateStart: "01/10/2016",
        dateEnd: "01/09/2018",
        contributions: [
          "Design and develop Android applications for small businesses and individuals"
        ]
      },
      {
        designation: "Instructor",
        company: "Camp K12",
        place: "Mumbai",
        dateStart: "01/02/2018",
        dateEnd: "28/02/2018",
        contributions: ["Taught Photoshop to primary school kids."]
      }
    ],
    societies: [
      {
        name: "Computer Society of India",
        designation: "Tech Head, KJSCE Chapter",
        dateStart: "01/07/2017",
        dateEnd: "01/07/2018",
        contributions: [
          "Speaker in AI seminar that witnessed 160 students.",
          "Designed content for Hybrid app development, Augmented Reality and Machine Learning workshops.",
          "Created CodeInX competition which became flagship event of CSI-KJSCE at Abhitantriki"
        ]
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Navbar
          key="navbar"
          title={this.state.name}
          subtitle={this.state.tagline}
        />
        <Card key="aboutme" title="About me" desc={this.state.aboutme} />
        <Card key="skills" title="Skills and Tools">
          {this.state.skills.map(skill => (
            <Tag value={skill} />
          ))}
        </Card>
        <Card key="experience" title="Experience">
          {this.state.experience.map(exp => (
            <WorkExperience
              key={exp.dateStart}
              name={exp.company}
              post={exp.designation}
              from={exp.dateStart}
              to={exp.dateEnd}
              contributions={exp.contributions}
            />
          ))}
        </Card>
        <Card key="projects" title="Projects">
          {this.state.projects.map(project => (
            <ProjectDetail
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              highlights={project.highlights}
            />
          ))}
        </Card>
        <Footer />
      </div>
    );
  }
}

export default App;
