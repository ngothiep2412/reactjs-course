import { useState } from "react";

export default function useHandleChange(initialValue) {
  const [values, setValues] = useState(initialValue);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
