import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import AddCourse from "./Component/AddCourse/AddCourse";
import CourseSettings from "./Component/CourseSettings/CourseSettings";
import SetCurriculumn from "./Component/SetCurriculumn/SetCurriculumn";

function App() {
  // fetch("https://degree-application-processing.herokuapp.com/")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  return (
    <div className="App">
      <Navbar> </Navbar>{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/add-course" element={<AddCourse> </AddCourse>} />
        <Route
          path="/course-settings"
          element={<CourseSettings> </CourseSettings>}
        />
        <Route
          path="/set-curriculumn"
          element={<SetCurriculumn> </SetCurriculumn>}
        />
      </Routes>{" "}
    </div>
  );
}

export default App;
