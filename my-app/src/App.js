import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
// Link Active Link Outlet Nested routes useParams useSearchParams NotFound useNavigate
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<>Home Page</>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
