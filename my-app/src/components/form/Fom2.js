import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form2 = () => {
  // const [fullName, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleTextAreaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };

  // const handleTextAreaChange = (e) => {
  //   setTextarea({
  //     ...textarea,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullName === "") {
      setNameError("Your full name is empty");
    } else {
      setNameError("");
    }
  };
  // Formik + Yub vs React hook form
  // regex
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="false"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullName"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>

        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your e mail"
          onChange={handleChange}
        />
        {/* <input
          type="checkbox"
          name="hobby"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
        {/* {message} */}
        {/* <textarea
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          name="message"
          onChange={handleTextAreaChange}
        ></textarea>
        <textarea
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          name="bio"
          onChange={handleTextAreaChange}
        ></textarea> */}
        {/* {country}
        <select name="country" onChange={handleSelectChange}>
          <option value="VietNam">VN</option>
          <option value="USA">USA</option>
          <option value="Japan">JP</option>
          <option value="Korea">KR</option>
        </select> */}
      </form>
    </div>
  );
};

export default Form2;
