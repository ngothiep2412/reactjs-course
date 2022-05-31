import React, { useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  //   const [parentHeight, setparentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextareaHeight("auto");
    // setparentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };
  React.useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setparentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      //   style={{
      //     minHeight: parentHeight,
      //   }}
    >
      <textarea
        className="transition-all w-full overflow-hidden max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
