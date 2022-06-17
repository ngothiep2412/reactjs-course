import React, { Fragment } from "react";
import PhotoList from "./components/gallery/PhotoList";
import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./context/auth-context";
import { CountProvider, useCount } from "./context/countContext";
import { GalleryProvider } from "./context/galleryContext";

function DisplayCount() {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg text-white font-semibold bg-purple-400"
    >
      Increment count
    </button>
  );
}

function App() {
  return (
    <Fragment>
      {/* <div className="p-5 flex items-center justify-center gap-x-5">
        <CountProvider>
          <DisplayCount></DisplayCount>
          <Counter></Counter>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
