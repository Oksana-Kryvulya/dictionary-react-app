import React from "react";
import Meanings from "./Meanings";
export default function Results(props) {
  console.log(props.results);
  if (props.results)
    return (
      <div>
        <h3>
          {props.results.word}
          <br />
          <em className="opacity-50"> {props.results.phonetics[0].text}</em>
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
