import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

export default function() {
  return (
    <div style={{ color: "white", height: 200, textAlign: "center" }}>
      <FontAwesomeIcon style={{ fontSize: 100 }} icon={faCar} />
      <div style={{ fontSize: 42, marginLeft: 25 }}>Parks and Calc</div>
    </div>
  );
}
