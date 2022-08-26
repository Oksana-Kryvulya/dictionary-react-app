import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 4) return <p key={index}>{definition.definition}</p>;
        else return null;
      })}
    </div>
  );
}
