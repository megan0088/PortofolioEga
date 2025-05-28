import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Holticultra",
      description: "Design & Developer Iot",
      imgUrl: projImg1,
      link: "https://drive.google.com/drive/u/0/folders/1zMRm1DT-84X0OvE1RCqUg5_H22txcYHP",
    },
    {
      title: "Business Startup 2",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "/portfolio/startup-2",
    },
    {
      title: "Business Startup 3",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "/portfolio/startup-3",
    },
    {
      title: "Business Startup 4",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "/portfolio/startup-4",
    },
    {
      title: "Business Startup 5",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "/portfolio/startup-5",
    },
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "/portfolio/startup-6",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Flutter Developers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Problem solver</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Entrepreneur</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming soon: problem-solving project showcase.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon: entrepreneur journey highlights.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
