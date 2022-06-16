import React from "react";
import { useState } from "react";
import ModalAdvanced from "./components/modal/ModalAdvanced";
import ModalPage from "./components/modal/ModalPage";
import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";

function App() {
  const [openModalPage, setOpenModalPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <button
        className="p-5 bg-blue-500 rounded-lg text-center text-white "
        onClick={() => setOpenModalPage(true)}
      >
        Open Modal Pages
      </button>
      <button
        className="p-5 bg-blue-500 rounded-lg text-center text-white ml-5"
        onClick={() => setOpenModal(true)}
      >
        Open Modal Pages
      </button>
      <ModalPage
        visible={openModalPage}
        onClose={() => setOpenModalPage(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          <TooltipAdvanced title="Tooltip2">This is tooltip2</TooltipAdvanced>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolor
          consequuntur vel alias mollitia est eaque libero sint amet blanditiis
          expedita quisquam, quis doloremque doloribus. Repellendus, nulla!
          Nobis, quidem ratione!
        </div>
      </ModalPage>
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome Back!"
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your mail"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="ToolTip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
}
// Fragments
export default App;
