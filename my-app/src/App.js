import React, { Fragment } from "react";
// import CartList from "./components/gallery/CartList";
// import PhotoList from "./components/gallery/PhotoList";
// import HeaderMain from "./components/HeaderMain";
// import { AuthProvider } from "./context/auth-context";
// import { CountProvider, useCount } from "./context/countContext";
// import { GalleryProvider } from "./context/galleryContext";
import { Routes, Route } from "react-router-dom";

// function DisplayCount() {
//   const [count] = useCount();
//   return <div>The count is: {count}</div>;
// }

// function Counter() {
//   const [, setCount] = useCount();
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       onClick={increment}
//       className="p-4 rounded-lg text-white font-semibold bg-purple-400"
//     >
//       Increment count
//     </button>
//   );
// }

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, deserunt earum nemo quas quibusdam, quidem recusandae
              similique, dignissimos magnam voluptatem delectus. Sequi non
              quasi, quos temporibus nesciunt tempora fugit ut.
            </div>
          }
        ></Route>
        <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route path="/movie" element={<div>This is movie</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={<div>This is movie detail of movieId</div>}
        ></Route>
        {/* slug or id */}
      </Routes>
    </div>
  );
}

export default App;
