import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word do you look up?</h2>
      <form className="row mt-3" onSubmit={search}>
        <div className="col">
          <input
            type="text"
            className="form-control input-lg"
            onChange={handleKeyWordChange}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
