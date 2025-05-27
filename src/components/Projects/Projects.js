import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import art from "../../Assets/Projects/art.png";
import fab from "../../Assets/Projects/fab.png";
import celest from "../../Assets/Projects/celest.png";
import assises from "../../Assets/Projects/assises.png";
import website from "../../Assets/Projects/website.png";
import plaquette from "../../Assets/Projects/plaquette.png"
import ndi from "../../Assets/Projects/ndi.png";
import ouate from "../../Assets/Projects/ouate.png";
import breakr from "../../Assets/Projects/breakr.png";
import fusion from "../../Assets/Projects/fusion.png";
import chrome from "../../Assets/Projects/chrome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="blue">notables </strong>
        </h1>
        <p style={{ color: "white" }}>
          Petite sélection de mes derniers projets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Site web vitrine"
              description="Stabilisation du site web vitrine de Patrowl de Wordpress à Vue.js puis refonte visuelle sur Kirby CMS."
              demoLink="https://www.behance.net/gallery/226754669/Site-web-vitrine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plaquette}
              title="Plaquette commerciale"
              description="Plaquette commerciale de Patrowl, réalisée avec InDesign et Illustrator, présentant le produit unique de l'entreprise."
              demoLink="https://www.behance.net/gallery/226754929/Plaquette-commerciale"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assises}
              isBlog={false}
              title="Les Assises 2024"
              description="Un des plus grands salons de la cybersécurité en Europe, où j'ai designé les visuels du stand et décidé des goodies."
              demoLink="https://www.behance.net/gallery/226755581/Stand-aux-Assises-de-la-cyberscurit"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fab}
              isBlog={false}
              title="Fabulous 12"
              description="BDE Général de l'IUT de Paris où j'ai fait le mandat 2023-2024 en tant que pôle audiovisuel."
              demoLink="https://www.behance.net/gallery/226155649/BDE-Fabulous-12"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="Art'mony"
              description="BDA de l'IUT de Paris où j'ai fait le mandat 2024-2025 en tant que présidente et où j'ai designé les sweats."
              demoLink="https://www.behance.net/gallery/226155761/BDA-Artmony"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celest}
              isBlog={false}
              title="Celest"
              description="Liste BDE du département TC de l'IUT de Paris où j'ai fait le mandat 2022-2023 en tant que pôle audiovisuel."
              demoLink="https://www.behance.net/gallery/226155929/Liste-BDE-Celest"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fusion}
              isBlog={false}
              title="BDE Fusion"
              description="BDE informatique de l'IUT de Paris où j'ai fait le mandat 2022-2024 en tant que responsable audiovisuel et communication. J'ai notamment pu dessiner le trailer dans le style BD, en collaboration avec un ami."
              demoLink="https://www.behance.net/gallery/226756059/Trailer-BDE-Fusion"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ndi}
              isBlog={false}
              title="Nuit de l'info"
              description="Concours national d'informatique en équipe où j'ai participé en 2022, 2023 et 2024. Nous avons fini 3ème/100 équipes au défi d'ASI et 1er/154 équipes au défi Viveris en 2022 ; 3ème/185 équipes au défi Tetris en 2023."
              demoLink="https://www.behance.net/gallery/226756311/Nuit-de-linfo"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ouate}
              isBlog={false}
              title="Ouate"
              description="Projet ficitf en cours de Marketing en 1ère année à l'IUT de Paris. J'ai designé le packaging du produit qu'on veut proposer à des investisseurs, en plus d'avoir créé l'offre et sa communication, en collaboration avec mon équipe."
              demoLink="https://www.behance.net/gallery/226756451/Ouate-plan-de-communication"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breakr}
              isBlog={false}
              title="Breakr"
              description="Application avec son business plan, dans le cadre d'un projet de création d'entreprise à l'IUT de Paris. J'ai développé l'application, en plus d'avoir créé le business plan."
              demoLink="https://www.behance.net/gallery/226756769/Breakr"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chrome}
              isBlog={false}
              title="Chrome"
              description="Projet personnel pour personnaliser mon fond d'écran et ceux de mes amis, grâce à des illustrations en 3D avec un effet chromé, fait avec Photoshop et Illustrator."
              demoLink="https://www.behance.net/gallery/226757665/Chrome"    
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
