import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdOutlineArrowOutward } from "react-icons/md";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="blue">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <MdOutlineArrowOutward /> &nbsp;
            {"Découvrir le projet"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
