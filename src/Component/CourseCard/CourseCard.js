import React, { useState } from "react";

const CourseCard = (props) => {
  //   const [equiCourses, setEquiCourses] = useState([]);
  const { Course_ID, Course_Name, Credits, Equivalent_Courses } = props.items;
  // console.log(props.items)
  //   setEquiCourses(Equivalent_Courses);
  //   console.log(Course_ID);
  return (
    <div className="mx-auto mb-10 w-3/4 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-2xl text-center font-bold">
          {Course_ID} ({Credits})
        </h1>
        <h3 className="text-l text-center font-bold"> {Course_Name} </h3>
        <h5 className="text-gray-400 text-sm text-left mt-3 mb-2">
          prerequisites:
        </h5>
        <h5 className="text-gray-400 text-sm text-left mb-3"> Equivalance: </h5>
        {/* <ul className=" lg:flex-none sm:flex sm:justify-center gap-5">
                      <li className="bg-blue-400 rounded-lg my-auto px-2 py-1 ">
                        <a className=" text-sm" href="">
                          Set prerequisites
                        </a>
                      </li>
                      <li className="bg-blue-400 rounded-lg my-auto px-2 py-1 ">
                        <a className="text-sm" href="">
                          Set Equivalance
                        </a>
                      </li>
                    </ul> */}
        <ul className="mt-5">
          <li className="flex justify-center cursor-pointer mb-2">
            <a
              className="text-sm text-blue-600 font-semibold hover:text-red-500"
              href=""
            >
              Set prerequisites
            </a>
          </li>
          <li className="flex justify-center cursor-pointer">
            <a
              className="text-sm text-blue-600 font-semibold hover:text-red-500"
              href=""
            >
              Set Equivalance
            </a>
          </li>
        </ul>
        {/* <h5 className="text-center">
                      Equivalent Course:
                      {equiCourses.map((items) => (
                        <h5>{items}</h5>
                      ))}
                    </h5> */}
      </div>
    </div>
  );
};

export default CourseCard;
