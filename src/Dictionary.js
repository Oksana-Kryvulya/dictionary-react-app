import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    alert(`Searching for word ${keyword} defenition`);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
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
