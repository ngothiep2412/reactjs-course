import React, { useEffect, useState } from "react";

const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstName: "Thiệp",
    surName: "Ngô Xuân",
  });
  // khi dùng với object thì nên truyền vào dependencies chính xác cái mà mình thay đổi
  useEffect(() => {
    console.log("form input");
    // setCount(count + 1) // vòng lặp vô tận nếu ko có dependencies
  }, [info.firstName]); // nếu count thay đổi thì mới chạy, useEffect chạy 1 lần
  // mỗi lần component thì re-render lại
  // state thay đổi thì re-render lại
  return (
    // <div className="p-5 flex gap-x-4 items-center">
    //   <span className="text-2xl font-bold">{count}</span>
    //   <button
    //     onClick={() => setCount(count + 1)}
    //     className="inline-block p-3 bg-blue-300 text-white rounded-lg"
    //   >
    //     Increment
    //   </button>
    // </div>
    <div className="p-5 flex gap-4 items-center">
      <input
        className="outline-dashed"
        type="text"
        name="surName"
        value={info.surName}
        onChange={(e) => {
          setInfo({
            ...info,
            surName: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Counter;
