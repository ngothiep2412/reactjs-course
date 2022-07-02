import React from "react";
import Accordion from "./components/advanced_react/react-composition/Accordion";
import Editable from "./components/advanced_react/react-composition/Editable";
function App() {
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      <Accordion header="Can I change my plan later ?">
        <div>No Sir!</div>
      </Accordion>
      <Accordion header="Can I become a front-end developer ?">
        <div>Yes, you can</div>
      </Accordion>
      {/* <Editable></Editable> */}
    </div>
  );
}

export default App;
