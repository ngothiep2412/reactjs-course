import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState("");
  useEffect(() => {
    // colRef
    // console.log(colRef);
    // 1. Get collection data (posts)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setPosts(posts);
    //     // console.log(posts);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 2. Get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
    const docRefSingle = doc(db, "posts", "wjQ9TQtxDQTl1U8l9baG");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    // onSnapshot(docRefSingle, (doc) => {
    //   console.log(doc.id, doc.data());
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
        // reset form
      })
      .catch((err) => {
        console.log(err);
        // reset form
      });
  };
  //removePost
  const handleRemovePost = async (e) => {
    e.preventDefault();
    // Get document ID
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };
  // createdAt
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "This is a new title from update title",
      author: "thiepnx",
    });
    console.log("success");
  };
  // fetching single document
  useEffect(() => {
    // Firestore queries
    // const colRefQuery = collection(db, "posts");
    const q = query(
      colRef,
      where("author", "==", "Puu"),
      orderBy("createdAt"),
      limit(5)
    );
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Auth: Login, Logout, Register
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 
            outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 
            outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Update a post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 
            outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            autoComplete="off"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Remove a post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div
              className="w-full border border-gray-200 p-5 mb-3"
              key={item.id}
            >
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
