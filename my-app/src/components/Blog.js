import React, { useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef: demoRef } = useLinkNewTab();
  const { hoverd, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={demoRef}>
      <p className="p-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        deleniti laborum excepturi, perspiciatis quibusdam quae delectus aperiam
        tempore temporibus iure accusantium nisi nihil modi praesentium commodi
        dolor labore quos odio, saepe{" "}
        <a
          href="https://google.com"
          className={`underline ${hoverd ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="p-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        deleniti laborum excepturi,{" "}
        <a href="https://google.com" className="underline">
          google.com
        </a>{" "}
        perspiciatis quibusdam quae delectus aperiam tempore temporibus iure
        accusantium nisi nihil modi praesentium commodi dolor labore quos odio,
        saepe ?
      </p>
      <p className="p-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        deleniti laborum excepturi perspiciatis quibusdam quae delectus aperiam
        tempore temporibus iure{" "}
        <a href="https://google.com" className="underline">
          google.com
        </a>{" "}
        accusantium nisi nihil modi praesentium commodi dolor labore quos odio,
        saepe ?
      </p>
    </div>
  );
};

export default Blog;
