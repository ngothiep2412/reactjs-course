import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log(isValid);
  // console.log(isDirty);
  // console.log(dirtyFields);
  // console.log(submitCount);
  // errors = formState.erros
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("Send data to backend");
      // after successfully submitted
      // then reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
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
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "Thiệp");
    setValue("lastName", "Ngô");
    setValue("email", "ngothiep@gmail.com");
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
        <MyInput
          name="email"
          placeholder="Enter your email..."
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          className="p-4 rounded-md border border-gray-200"
          {...register("email")}
        /> */}
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email?.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
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
      <div>
        <button className="p-3 bg-green-400" onClick={handleSetDemoData}>
          Demo data
        </button>
      </div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          className="p-4 rounded-md border border-gray-200"
          {...field}
          {...props}
        />
      )}
    ></Controller>
  );
};

export default SignUpFormHook;
