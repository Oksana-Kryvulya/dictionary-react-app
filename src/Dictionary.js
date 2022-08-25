import React, { useState } from "react";
import "./Dictionary.css";

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
      <h1>Dictionary</h1>
      <h2>What word do you look up?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          className="inputKeyWord"
          onChange={handleKeyWordChange}
        />
        <button type="submit" className="btn btn-secondary">
          Search
        </button>
      </form>
    </div>
  );
}
