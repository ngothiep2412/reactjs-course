import React, { useState } from "react";
import "./ToggleStyle.css";
// // stateLess functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// // stateFul functional component: component có sử dụng state
// function Toggle2() {
//   //const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // useState là 1 hook
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. updaing state:
  //   const array = useState(false);
  //   console.log(array); //[false, function]
  //   console.log(array[0]);
  //   console.log(array[1]);
  //   const [a, b] = [1, 2];
  //   console.log(a, b);
  // initialize value: boolean(true, false), number(1,2,3..), string, undefined, null, [1,2,3], object
  const [on, setOn] = useState(false); // ko đc viết trong function, câu điều kiện, vòng lặp
  console.log(on);
  // console.log(on, setOn);
  // const [title, setTitle]
  // [isActive, setIsActive]
  // [active, unactive]
  // <div className="toggle" onclick="toggle"></div>; onClick
  // state change --> re-render
  const handleToggle = () => {
    // setOn(callback) --> setOn(prevState => !prevState)
    setOn((on) => !on);
    console.log(on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
