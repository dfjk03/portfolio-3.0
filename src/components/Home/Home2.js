import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pdp.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiFillYoutube,
  AiFillBehanceCircle,
  AiOutlineMail,
  AiFillMail,
  AiFillPhone,
  AiFillSave,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <h1 style={{ fontSize: "2.6em"}} className="blue">
              Qui suis-je ?<span className="blue"></span>
            </h1>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Photo de profil" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            
            <p className="home-about-body">
              J'ai commencé à faire du 
              <i>
                <b className="blue"> montage vidéo </b>
              </i>
              sur YouTube à l'âge de 12 ans, puis du
              <i>
                <b className="blue"> graphisme </b>
              </i>
              à 14 ans.
              <br/>
              <br/>
              De fil en aiguille, j'ai découvert le 
              <i>
                <b className="blue"> marketing digitale </b>
              </i>
              et le 
              <i>
                <b className="blue"> développement web</b>
              </i>
              .
              <br/>
              <br/>
              J'ai donc tout naturellement choisi d'être
              <i>
                <b className="blue"> responsable audiovisuel et communication </b>
              </i>
              chez Patrowl pour mes 
              <i>
                <b className="blue"> 3 années d'alternance </b>
              </i>
              en BUT Techniques de Commercialisation.
              <br />
              <br />
              Puis, à force d'aller dans des festivals de
              <i>
                <b className="blue"> musique </b>
              </i>
              d'
              <i>
                <b className="blue">organiser </b>
              </i>
              des événements et de
              <i>
                <b className="blue"> manager </b>
              </i>
              des équipes et des projets,j'ai voulu m'orienter en 
              <i>
                <b className="blue"> management </b>
              </i>
              de préférence dans l'
              <i>
                <b className="blue">événementiel</b>
              </i>
              .
              <br />
              <br />
              C'est pourquoi je chercher une
              <i>
                <b className="blue"> alternance </b>
              </i>
              dans ce sens, pour mon master à
              <i>
                <b className="blue"> Skema Business School </b>
              </i>
              pour la rentrée 2025.
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Je serai <span className="blue">ravie d'échanger </span> avec vous
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/celine-ly1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:cln3ly@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+33753458370"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="../../Asset/Celine_Ly.vcard"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillSave />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
