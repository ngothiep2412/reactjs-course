import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { async } from "@firebase/util";

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });
  }, [userInfo]);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // credentials
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: "Ngo Xuan Thiep",
      });
      setUserInfo(cred);
      console.log("Success!!");
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (err) {
      console.log(err);
    }

    // console.log("handleCreateUser ~ updatedUser", updatedUser);

    // console.log("handleCreateUser ~ user", user);
    // if (user) setUserInfo(user);
    // console.log("Create user Successfully");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    setUserInfo(cred);
    console.log("Login Successfully");
  };
  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 
    outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 
    outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Sign up
          </button>
        </form>
        <div className="mt-10 flex items-center gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="p-3 bg-purple-500 text-white text-sm font-medium rounded-lg"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 
    outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 
    outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-3 bg-pink-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FirebaseAuth;
