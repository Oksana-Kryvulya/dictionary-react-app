import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    setLoaded(true);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <h2>What word do you look up?</h2>
        <section>
          <form className="row mt-3" onSubmit={handleSubmit}>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control input-lg"
                onChange={handleKeyWordChange}
              />
            </div>
            <div className="col d-none d-sm-block search">
              <button type="submit" className="btn btn-secondary pb-2 text-end">
                Search
              </button>
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    search();
  }
}
