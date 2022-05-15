import { data } from "autoprefixer";
import React, { useState } from "react";

const AddCourse = () => {
  const [courseType, setcourseType] = useState("");
  const [department, setDepartment] = useState("");
  const [courseName, setcourseName] = useState("");
  const [course_ID, setcourse_ID] = useState("");
  const [credits, setCredits] = useState("");
  const [description, setDescription] = useState("");

  const [response, setResponse] = useState("");

  const handleCourseTypeDeptBlur = (value) => {
    setcourseType(value);
  };
  const handleDeptBlur = (event) => {
    setDepartment(event.target.value);
  };
  const handleCourseNameBlur = (event) => {
    setcourseName(event.target.value);
  };
  const handleCourseIDBlur = (event) => {
    let str = event.target.value;
    setcourse_ID(str.toUpperCase());
  };
  const handleCreditsBlur = (event) => {
    setCredits(event.target.value);
  };
  const handleDescriptionBlur = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_type: courseType,
        department: department,
        Course_Name: courseName,
        CourseID: course_ID,
        credits: credits,
        description: description,
      }),
    };

    await fetch("http://localhost:3001/add-course", requestOptions)
      .then((res) => res.json())
      .then((data) => setResponse(data));
    // .catch((err) => {
    //   if (err) {
    //     console.log(response);
    //   }
    // });

    //   console.log(re);
  };

  return (
    <div>
      {/* Submit Message */}
      <div
        className={`${
          response
            ? "flex justify-center items-center bg-red-200 h-10 lg:w-1/4 w-1/2 mx-auto rounded-3xl"
            : "hidden"
        }`}
      >
        {response.status == 200 ? (
          <svg
            className="h-6 w-6 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="green"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <h1></h1>
        )}

        <h1 className="my-auto"> {response.message}</h1>
      </div>
      <h1 className=" font-semibold mt-5 text-xl"> Add or offer new course </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-50 py-5 mt-5 border-2 border-blue-100 rounded-xl lg:mx-48 mx-10"
        action=""
      >
        {/* for radio buttons */}
        <div className="flex justify-center" required>
          <input
            onChange={(e) => handleCourseTypeDeptBlur(e.target.value)}
            className="my-auto"
            type="radio"
            id="html"
            name="fav_language"
            value="Undergraduate"
          />
          <label className="ml-2 my-auto" for="html">
            Undergraduate
          </label>
          <br />
          <input
            onChange={(e) => handleCourseTypeDeptBlur(e.target.value)}
            className="ml-20 my-auto"
            type="radio"
            id="css"
            name="fav_language"
            value="Graduate"
          />
           
          <label className="ml-2 my-auto" for="css">
            Graduate
          </label>
        </div>
        {/* for input fields */}
        <div>
          <div className="lg:w-1/2 w-3/4 mx-auto">
            <p className="text-left mt-3">Department</p>
            <input
              onBlur={handleDeptBlur}
              className="border-2 border-gray-400 rounded-lg w-full"
              type="text"
              required
            />
            <p className="text-left mt-3">Course Name</p>
            <input
              onBlur={handleCourseNameBlur}
              className="border-2 border-gray-400 rounded-lg w-full"
              type="text"
              required
            />
            <p className="text-left mt-3">Course ID</p>
            <input
              onBlur={handleCourseIDBlur}
              className="border-2 border-gray-400 rounded-lg w-full"
              type="text"
              required
            />
            <p className="text-left mt-3">Credits</p>
            <input
              onBlur={handleCreditsBlur}
              className="border-2 border-gray-400 rounded-lg w-full"
              type="text"
              required
            />
            <p className="text-left mt-3">Course Description</p>
            <textarea
              onBlur={handleDescriptionBlur}
              name="Text1"
              className="w-full border-2 border-gray-400 rounded-lg"
              rows="5"
            ></textarea>
          </div>
        </div>
        {/* form submit button */}
        <input
          className="hover:bg-blue-600 bg-blue-400 text-white font-semibold px-8 py-1 rounded-2xl mt-6"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddCourse;
