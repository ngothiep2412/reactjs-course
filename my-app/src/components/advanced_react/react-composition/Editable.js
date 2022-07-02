import React, { useState } from "react";
import useToggle from "./useToggle";
// Duplicate code
const Editable = () => {
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input className="p-3 rounded-lg border border-gray-500" type="text" />
      )}
      <button onClick={handleToggleEdit}>Open Edit</button>
    </div>
  );
};

export default Editable;
