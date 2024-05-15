import { useState } from "react";

import { tracks } from "../data";
import "../styles/SearchPage.css";

export const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  const onClickButton = () => {
    tracks(query).then((data) => {
      setResult(data);
    });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="text-center">
        <h1 className="mb-4">Search Page</h1>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control mr-2 search-input"
            value={query}
            onChange={onInputChange}
            placeholder="Search any track"
          />
          <button
            className="btn btn-primary search-button"
            type="submit"
            onClick={onClickButton}
          >
            Search
          </button>
        </div>
        <div className="grid-container">
          {result.map((item) => (
            <div className="grid-item" key={item.id}>
              <img src={item.album.images[0].url} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.artists.map((artist) => artist.name).join(", ")}</p>

              <div className="link-button">
                <a
                  href={item.artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Go to Artist
                </a>

                <span className="button-separator"></span>

                <a
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  Listen
                </a>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
