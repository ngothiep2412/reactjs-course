import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div
        className="youtube-image"
        // style={{
        //   height: "250px",
        // }}
      >
        <img
          src={props.image}
          alt=""
          // style={{
          //   display: "block",
          //   maxWidth: "100%",
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          // }}
        />
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
};

export default YoutubeItem;
