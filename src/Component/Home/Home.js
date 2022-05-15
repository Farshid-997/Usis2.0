import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";

const Home = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/")
      // fetch("https://degree-application-processing.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  // console.log(results);

  return (
    <div className="lg:grid lg:grid-cols-4 text-center my-3">
      {results.map((items) => (
        <CourseCard key={items.Course_ID} items={items}></CourseCard>
      ))}
    </div>
  );
};

export default Home;
