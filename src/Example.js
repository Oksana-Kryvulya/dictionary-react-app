import React from "react";

export default function Example(props) {
  if (props.example)
    return (
      <div className="Example">
        <em>
          <strong>Exapmle: </strong>
          <span>{props.example}</span>
        </em>
      </div>
    );
  else return null;
}
