import "./styles.css";
import React from "react";
import "./styles.css";
import { useState } from "react";

const BestMusic = {
  Romance: [
    { name: "Ranjha", rating: "5/5" },
    { name: "Mere bina", rating: "4.5/5" },
    { name: "Raatan lambiya", rating: "5/5" }
  ],

  Happy: [
    {
      name: "What a time",
      rating: "5/5"
    },
    {
      name: "Walking on sunshine",
      rating: "4/5"
    },
    {
      name: "Darasal",
      rating: "4.5/5"
    }
  ],

  Relax: [
    {
      name: "Qaafirana",
      rating: "4/5"
    },
    {
      name: "Serenity Spa ",
      rating: "5/5"
    },
    {
      name: "Kabhi tumhe ",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Relax");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎵 BestMusic </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite music. Select a mood type to get started{" "}
      </p>

      <div>
        {Object.keys(BestMusic).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {BestMusic[selectedGenre].map((Music) => (
            <li
              key={Music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Music.name} </div>
              <div style={{ fontSize: "smaller" }}> {Music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
