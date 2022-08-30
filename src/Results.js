import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import Player from "./Player";

export default function Results(props) {
  console.log(props.results);
  let audioPlayer = 0;

  if (props.results)
    return (
      <div>
        <h3>
          {props.results.word}
          <br />
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio && audioPlayer === 0) {
              console.log("hello");
              audioPlayer += 1;
              return (
                <span key={index}>
                  <Player audio={phonetic.audio} />
                </span>
              );
            } else return null;
          })}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
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
