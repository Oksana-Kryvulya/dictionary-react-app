import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.text) {
    console.log(props.phonetic);
    return <span className="Phonetic">{`${props.phonetic.text} `}</span>;
  } else {
    return null;
  }
}
