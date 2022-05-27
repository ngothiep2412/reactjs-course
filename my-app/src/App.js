// import logo from "./logo.svg";
import "./App.css";
import Toggle from "./components/toggle/Toggle";
import Counter from "./components/counter/Counter";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
import DoubleCounter from "./components/counter/DoubleCounter";
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
    <div>
      <DoubleCounter></DoubleCounter>
    </div>
  );
}

export default App;
