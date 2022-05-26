// import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
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
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  const name = "Thiep";
  return (
    <div>
      <YoutubeList>
        {/* Children: html, component, text, variable */}
        <h2>{name}</h2>
      </YoutubeList>
    </div>
  );
}

export default App;
