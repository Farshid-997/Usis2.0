import { data } from "autoprefixer";
import React from "react";

const Home = () => {
  fetch("https://degree-application-processing.herokuapp.com")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div>
      <h1>{data} </h1>
    </div>
  );
};

export default Home;
