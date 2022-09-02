import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import Player from "./Player";

export default function Results(props) {
  console.log(props.results);
  let audioPlayerDisplayed = false;
  let showAudio = false;
  let showFonetic = 0;

  if (props.results)
    return (
      <div>
        <section>
          <h3>
            <div style={{ marginBottom: "15px" }}> {props.results.word}</div>

            {props.results.phonetics.map(function (phonetic, index) {
              showAudio = phonetic.audio && !audioPlayerDisplayed;
              if (showAudio) audioPlayerDisplayed = true;
              return (
                <span key={index}>
                  {showAudio ? <Player audio={phonetic.audio} /> : ""}{" "}
                </span>
              );
            })}
            {props.results.phonetics.map(function (phonetic, index) {
              if (phonetic.text && !showFonetic) {
                showFonetic += 1;
                return (
                  <span key={index}>
                    <Phonetic text={phonetic.text} />
                  </span>
                );
              }
            })}
          </h3>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meanings meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  else return null;
}
