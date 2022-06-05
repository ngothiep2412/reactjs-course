import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react-hook-form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
  lastName: Yup.string()
    .required("Please enter your last name")
    .max(10, "Must be 10 characters or less"),
  email: Yup.string().required("Please enter your email"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isDirty,
      dirtyFields,
      isSubmitted,
      submitCount,
    },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log(isValid);
  // console.log(isDirty);
  // console.log(dirtyFields);
  // console.log(submitCount);
  // errors = formState.erros
  const onSubmit = async (values) => {
    if (submitCount === 1) {
      console.log("Not Submit");
    }
    // const reponse = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return reponse.data;
    // return new Promise((reslove) => {
    //   setTimeout(() => {
    //     reslove();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  return (
    <form
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          className="p-4 rounded-md border border-gray-200"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "max" && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name..."
          className="p-4 rounded-md border border-gray-200"
          {...register("lastName")}
        />
        {errors.lastName && (
          <div className="text-red-500 text-sm">{errors.lastName?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="p-4 rounded-md border border-gray-200"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email?.message}</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
