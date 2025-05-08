import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosCheckmark } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis passionnée par le <span className="blue">marketing</span>, actuellement alternante <span className="blue"> responsable audiovisuel et communication </span> à <span className="blue">l'IUT de Paris</span>.
            <br />
            Pour mon <span className="blue">master à Skema </span>
            je cherche une alternance <span className="blue">en management</span>.
            <br />
            <br />
            J'ai des compétences en :
            <ul>
            <li className="about-activity">
              <IoIosCheckmark /> Communication digitale
            </li>
            <li className="about-activity">
              <IoIosCheckmark /> Création de contenu
            </li>
            <li className="about-activity">
              <IoIosCheckmark /> Gestion de projet et d'équipe
            </li>
          </ul>
            <br />
            Ma devise est : <span className="blue">"Memento audere semper"</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
