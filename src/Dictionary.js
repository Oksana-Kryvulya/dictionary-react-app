import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
