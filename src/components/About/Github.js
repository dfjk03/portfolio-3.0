import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h3 className="project-heading-name" style={{ paddingBottom: "20px" }}>
        Mes <strong className="blue">contributions</strong> à l'ancien site web vitrine
      <br />
      <span style={{ fontSize: "0.7em", color: "white" }}> (le nouveau est sur un CMS)</span>
      </h3>
      <GitHubCalendar
        username="dfjk03"
        blockSize={15}
        blockMargin={5}
        color="#77B5FE"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
