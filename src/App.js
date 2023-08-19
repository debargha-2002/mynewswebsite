import "./App.css";
import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { BsArrowUpCircle, BsFileX } from "react-icons/bs";
function App() {
  const { fetchData, page, query } = useContext(AppContext);
  function scrollHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  window.onscroll = function scroll() {
    let scroll = document.querySelector("#scroll");
    if (window.scrollY > 100) scroll.style.display = "flex";
    else scroll.style.display = "none";
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [ query]);
  return (
    <div className=" overflow-hidden">
      <Header></Header>
      <Cards></Cards>
      <Pagination></Pagination>
      <button
        onClick={scrollHandler}
        className=" fixed bottom-7 right-3 w-[50px] h-[50px]
       rounded-full bg-blue-500 items-center justify-center hidden"
        id="scroll"
      >
        <BsArrowUpCircle className=" w-[40px] h-[40px] font-bold text-xl bg-slate-300 rounded-full"></BsArrowUpCircle>
      </button>
    </div>
  );
}

export default App;
