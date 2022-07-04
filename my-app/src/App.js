import React, { Fragment } from "react";
import { useState } from "react";
import { Dropdown } from "./components/advanced_react/inversion-of-control";
const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Fullstack Developer",
  },
];
function App() {
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState("");
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };
  return (
    <Fragment>
      {/* <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder="Search your job..."
        visibleIconCheck
        visibleInputSearch
      ></Dropdown> */}
      <Dropdown
        placeholder={`${job || "Select your job"}`}
        inputPlaceholder="Search your job...."
        onClick={handleSelectJob}
        onChange={(e) => setFilter(e.target.value)}
      >
        <div className="options border border-gray-300 rounded">
          {options.map((options) => (
            <Dropdown.Option key={options.title}>
              <span>{options.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
          {/* <Dropdown.Search></Dropdown.Search> */}
        </div>
      </Dropdown>
    </Fragment>
  );
}

export default App;
