import React, { useState } from "react";

const Form = () => {
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
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    hobby: false,
  });
  const [textarea, setTextarea] = useState({
    message: "",
    bio: "",
  });
  // obj.property: dot notaion
  // obj[property]
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const handleTextAreaChange = (e) => {
    setTextarea({
      ...textarea,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullName"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your e mail"
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="hobby"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleInputChange}
        />
        {/* {message} */}
        <textarea
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
        ></textarea>
        {/* {country}
        <select name="country" onChange={handleSelectChange}>
          <option value="VietNam">VN</option>
          <option value="USA">USA</option>
          <option value="Japan">JP</option>
          <option value="Korea">KR</option>
        </select> */}
      </div>
    </div>
  );
};

export default Form;
