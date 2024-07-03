import React from "react";
import { useState } from "react";
import ButtonHandler from "./Button";
const Joke = () => {
  const [joke, setJoke] = useState("");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <div>
      <ButtonHandler useApi={fetchApi} />
      <p>{joke}</p>
    </div>
  );
};
export default Joke;
