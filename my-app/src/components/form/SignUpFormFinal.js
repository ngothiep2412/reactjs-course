import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(20, "Must be 20 characters or less!")
      //     .required("Required"),
      //   lastName: Yup.string()
      //     .max(10, "Must be 10 characters or less!")
      //     .required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   job: Yup.string().required("Required"),
      //   terms: Yup.boolean().oneOf(
      //     [true],
      //     "Please check the terms and condition"
      //   ),
      // })}
      onSubmit={(values, actions) => {
        // console.log(actions);
        // console.log(values);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
          <MyInput
            label="First Name"
            name="firstName"
            placeholder="ENter your first name..."
            id="firstName"
          ></MyInput>
          <MyInput
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name..."
            id="lastName"
          ></MyInput>

          <MyInput
            label="Email"
            type="email"
            placeholder="Enter your email..."
            id="email"
            name="email"
          ></MyInput>
          <MyTextarea
            label="Introduce yourself"
            placeholder="Enter your introduce..."
            id="intro"
            name="intro"
          ></MyTextarea>
          <MySelectBox label="Select your job" id="job" name="job">
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">FullStack Developer</option>
            <option value="data engineer">Data Engineer</option>
          </MySelectBox>
          <MyCheckBox name="terms" type="checkbox">
            <p>I accept the terms and conditions</p>
          </MyCheckBox>
          <div>
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
// useField
// destructuring
// rest parameter ...
// spread operator ...
const MyInput = ({ label, ...props }) => {
  // console.log(props);
  // {label, name, placeholder, className}
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-200"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  // console.log(props);
  // {label, name, placeholder, className}
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <textarea
        className="p-4 rounded-md border border-gray-200 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  // console.log(props);
  // {label, name, placeholder, className}
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <select
        className="p-4 rounded-md border border-gray-200"
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyCheckBox = ({ children, ...props }) => {
  // console.log(props);
  // {label, name, placeholder, className}
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2 cursor-pointer">
        <input {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
