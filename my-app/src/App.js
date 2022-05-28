// import logo from "./logo.svg";
import "./App.scss";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";
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
  return (
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
    <div>
      {/* <GlobalStyles></GlobalStyles> */}
      <CardList>
        <CardTailwind primary={true} fontSize="text-2xl"></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
