import React from "react";

export default function Player(props) {
  console.log("audio");
  console.log(props.audio);
  let audio = new Audio(props.audio);
  const start = () => {
    audio.play();
  };
  return (
    <span className="Player">
      <button onClick={start}>Play</button>
    </span>
  );
}
