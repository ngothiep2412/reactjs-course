// import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import Form2 from "./components/form/Fom2";
import Form from "./components/form/Form";
import MovieSearchApp from "./components/MovieSearchApp";
// import Blog from "./components/Blog";
// import Dropdown from "./components/Dropdown";
// import SidebarMenu from "./components/SidebarMenu";
// import useClickOutSide from "./hooks/useClickOutSide";

// import Input from "./components/Input";
// import TextAreaAutoResize from "./components/TextAreaAutoResize";
// import StopWatch from "./components/StopWatch";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import HackerNewsWithReducer from "./components/news/HackerNews copyWithReducer";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };
// import Button from "./components/button/Button";
// import Toggle from "./components/toggle/Toggle";
// import Counter from "./components/counter/Counter";
// import Header from "./components/Header";
// import Timer from "./components/Timer";
// import GameWithReducer from "./components/tictactoe/GameWithReducer";
// import DoubleCounter from "./components/counter/DoubleCounter";
// import YoutubeList from "./components/youtube/YoutubeList";
// JSX: Javascript XML
// JS6
// Babel
/**
 * element = <div id="root">Hello world</div>: JSX
 * element = React.createElement('div', {id: 'root'}, 'Hello world')
 * function createElement(elementType, props, ...children)
 * elementType: 'div' 'p' 'span'
 * props: class (Trong react là className), id, src, alt
 * ...children (phần tử con):
 */
// curly bases {}

// Parent component
function App() {
  // // const inputRef, abcRef = React.useRef(initialValue);
  // const countRef = React.useRef(0);

  // const handler = () => {
  //   // truy xuất giá trị của ref
  //   console.log(countRef.current);
  //   // update giá trị của ref
  //   countRef.current = 10; // State thay đổi thì component re-render lại còn ref thì không
  // };
  // const countRef = React.useRef(0);
  // const [count, setCount] = React.useState(0);
  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`CLicked ${updateCount} times`);
  //   countRef.current++;
  // };
  // console.log("Render");
  // state là bất đồng bộ đợi component re-render lại r mới cập nhật và ref đồng bộ cập nhật ngay lập tức

  // useEffect(() => {
  //   const timer = setInterval();
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // const [show, setShow] = React.useState(false);
  return (
    <div>
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}

export default App;
