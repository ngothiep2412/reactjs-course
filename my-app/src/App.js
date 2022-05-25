import logo from "./logo.svg";
import "./App.css";
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

function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title2</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde
        aliquid corporis nemo maxime commodi quod a culpa fugiat quisquam
        quaerat amet aut velit reiciendis id consequatur porro, perferendis ea!
      </p>
    </div>
  );
}

// Parent component
function App() {
  const name = "Thiệp";
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  return (
    <div>
      {/** children component */}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1653257933300-dad551df76be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465"
        avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"
        // author="Thiệp"
        // title="Một ngày làm việc mệt mỏi"
      ></YoutubeItem>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Hello {name === "Thiệp" ? "Ream" : "body"} </h1>
  //       <h2>{fullName("Ngô Xuân", "Thiệp")}</h2>
  //       <h2>Age: {age}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

// Props: Properties
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-content">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">{props.author || "Thiệp đẹp zai"}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
