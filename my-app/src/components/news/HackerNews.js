import React, { useState } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [Hits, setHits] = useState([]);
  const handleFetchData = async () => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(response.data?.hits); // Optional chaining
  };
  React.useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div>
      {Hits.length > 0 &&
        Hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
