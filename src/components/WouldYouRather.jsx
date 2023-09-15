import React, { useState } from "react";
import axios from "axios";

function WouldYouRather() {
  const [question, setQuestion] = useState("");
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY; // for importing my apikey in a vite project

  // function to fetch a random question
  const fetchQuestion = async () => {
    const options = {
      method: "GET",
      url: "https://would-you-rather.p.rapidapi.com/wyr/random",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "would-you-rather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // access the question within the data array
      setQuestion(response.data[0].question);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Would You Rather?</h1>
      <p>{question}</p>
      <button onClick={fetchQuestion}>Generate Question</button>
    </div>
  );
}

export default WouldYouRather;
