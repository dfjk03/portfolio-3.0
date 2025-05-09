import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoMicrosoft,
} from "react-icons/io5";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiHubspot,
  SiNotion,
} from "react-icons/si";

function Hardskills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <IoLogoHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobeindesign />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHubspot />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <IoLogoMicrosoft />
      </Col>
    </Row>
  );
}

export default Hardskills;
