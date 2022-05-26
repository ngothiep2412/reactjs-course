import React from "react";
import { youtubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {youtubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) {
          newClass = "abc";
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            author={item.author}
            title={item.title}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
