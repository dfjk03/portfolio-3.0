import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { 
  MdEmojiObjects,
  MdEvent,
 } from "react-icons/md";
import { HiPresentationChartLine } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

function Statistiques() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <FaLinkedin />
        <p style={{ fontSize: "0.4em", color: "#77B5FE" }}>+320% de followers</p>
        <p style={{ fontSize: "0.3em", color: "white" }}>avec 1 post par semaine</p>

      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <MdEmojiObjects />
        <p style={{ fontSize: "0.4em", color: "#77B5FE" }}>+10 000 goodies</p>
        <p style={{ fontSize: "0.3em", color: "white" }}>crées, achetés et gérés</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <MdEvent />
        <p style={{ fontSize: "0.4em", color: "#77B5FE" }}>+70 événements</p>
        <p style={{ fontSize: "0.3em", color: "white" }}>gérés et participés</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <HiPresentationChartLine />
        <p style={{ fontSize: "0.4em", color: "#77B5FE" }}>+70 supports</p>
        <p style={{ fontSize: "0.3em", color: "white" }}>type plaquettes ou kakémonos</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <CgWebsite />
        <p style={{ fontSize: "0.4em", color: "#77B5FE" }}>+300% de trafic web</p>
        <p style={{ fontSize: "0.3em", color: "white" }}>en tant que cheffe de projet</p>
      </Col>
    </Row>
  );
}

export default Statistiques;
