import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 4)
          return (
            <div key={index}>
              <div className="definition">
                <strong>Definition: </strong>
                {definition.definition}
                <Example example={definition.example} />
              </div>
            </div>
          );
        else return null;
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
