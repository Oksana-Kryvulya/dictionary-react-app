import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Player.css";

export default function Player(props) {
  console.log("audio");
  console.log(props.audio);
  let audio = new Audio(props.audio);
  const start = () => {
    audio.play();
  };
  return (
    <span className="Player">
      <button className="btn btn-light" onClick={start}>
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
    </span>
  );
}
