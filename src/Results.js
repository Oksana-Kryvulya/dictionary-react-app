import React from "react";
import Meanings from "./Meanings";
export default function Results(props) {
  console.log(props.results);
  if (props.results)
    return (
      <div>
        <p>
          {props.results.word}
          <br />
          {props.results.phonetics[0].text}
        </p>
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
