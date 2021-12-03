import "./styles.css";
import React from "react";
import "./styles.css";
import { useState } from "react";

const BestMusic = {
  Romance: [
    {
      name: "Ranjha",
      Description: "If you just got together in your love and it's now time to bid goodbye, then you must play Ranjha song during their departure.",
      rating: "5/5",
      
    },

    { name: "Mere bina",
    Description : "Listen to Nikhil D'Souza Mere Bina MP3 song. Mere Bina song from the album Crook is released on Sep 2010. The duration of song is 04:49. This song is sung by Nikhil D'Souza.,",
     rating: "4.5/5"} ,
    { name: "Raatan lambiya",
    Description : "Kaatun kaise raatan, o saawre?Jiya nahi jaata, sun bawre?The days are long, the nights even longer- especially when one is without their beloved lover.",
     rating: "5/5" }
  ],

  Happy: [
    {
      name: "What a time" ,
      Description : "Michaels first performed What A Time solo when she opened for Maroon 5 on their 2018 Red Pill Blues Tour. After recording it as a duet with Horan, the pair performed the song together for the first time on the February 18, 2019 episode of The Late Late Show with James Corden.",
      rating: "5/5"
    },
    {
      name: "Walking on sunshine",
      Description: "This is the favorite song of Philip J. Fry, a character from the Futurama TV Show. He sings this while showering, though the only words he remembers are I'm walking on sunshine, so he hums the rest.",
      rating: "4/5"
    },
    {
      name: "Darasal",
      Description : "Darasal is a Hindi language song and is sung by Atif Aslam. Darasal, from the album Raabta, was released in the year 2017. The duration of the song is 4:35. This is one of my favourite songs",
      rating: "4.5/5"
    }
  ],

  Relax: [
    {
      name: "Qaafirana",
      Description : "Qaafirana is sung by Arijit Singh and Nikhita Gandhi. Music of the song is given by Amit Trivedi. Lyrics of 'Kedarnath' Song Qaafirana are written by Amitabh Bhattacharya.The song just calms your mind.It is so soothing.",
      rating: "4/5"
    },
    {
      name: "Serenity Spa ",
      Description : "Serenity song from the album Luxury Spa (100 Tracks Finest Collection of Relaxing, Soothing and Inspiring Sounds) is released on Nov 2019. The duration of song is 06:59.",
      rating: "5/5"
    },
    {
      name: "Kabhi tumhe ",
      Description : "This is currently the world's most popular and favourite song.A love story which lives beyond the lives of two people – how can death separate them? Kabhii Tumhhe is the moment when neither of them knew they were meeting for the last time, saying goodbye for the last time. ",
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
              <br></br>
              <div style={{ fontSize: "smaller" }}> {Music.Description} </div>
              <br></br>
              <div style={{ fontSize: "smaller" }}> {Music.rating} </div>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
