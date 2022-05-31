import React, { useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [Hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setHits(response.data?.hits || []); // Optional chaining
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error was happeing ${error}`);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleUpdateQuery}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div
          className="loading w-4 p-4 rounded-full border-blue-600 border-4 border-r-4
        border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          Hits.length > 0 &&
          Hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-300 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
