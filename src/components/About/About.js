import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Hardskills from "./Hardskills";
import Aboutcard from "./AboutCard";
import Here from "../../Assets/here.png";
import Statistiques from "./Stats";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Here} alt="A propos" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mon<strong className="blue"> profil</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes <strong className="blue">hard skills </strong>
        </h1>

        <Hardskills />

        <h1 className="project-heading">
          Le résultat de mon travail <strong className="blue">en chiffres</strong>
        </h1>
        <p style={{ color: "white" }}>
          En 3 ans d'alternance pour Patrowl.
          </p>
        <Statistiques />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
