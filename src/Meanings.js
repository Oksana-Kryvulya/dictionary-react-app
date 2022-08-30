import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index < 4)
          return (
            <div key={index}>
              <strong>Definition: </strong>
              {definition.definition}
              <Example example={definition.example} />
            </div>
          );
        else return null;
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
