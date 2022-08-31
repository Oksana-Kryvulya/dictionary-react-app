import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import Player from "./Player";

export default function Results(props) {
  console.log(props.results);
  let audioPlayerDisplayed = false;
  let showAudio = false;

  if (props.results)
    return (
      <div>
        <h3>
          {props.results.word}
          <br />
          {props.results.phonetics.map(function (phonetic, index) {
            showAudio = phonetic.audio && !audioPlayerDisplayed;
            if (showAudio) audioPlayerDisplayed = true;
            return (
              <span key={index}>
                {showAudio ? <Player audio={phonetic.audio} /> : ""}
                <Phonetic phonetic={phonetic} />{" "}
              </span>
            );
          })}
        </h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  else return null;
}
