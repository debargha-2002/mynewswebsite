import React, { useContext, useState } from 'react'
import img from '../assets/logo.png'
import { AppContext } from '../context/AppContext'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
const Header = () => {
  const { query, setQuery, setPage, lightMode, setLightMode } = useContext(AppContext)
  function clickHandler(event) {
    console.log(event.target.innerHTML.toLowerCase())
    setQuery(event.target.innerHTML.toLowerCase())
    setMenu(true)
    setPage(1)
  }

  function submitHandler(event) {
    event.preventDefault();
    if (event.target[0].value) {
      console.log(event.target[0].value);
      setQuery(event.target[0].value);
      event.target[0].value = "";
      setPage(1)
    }
  }
  function modeHandler() {
    setLightMode(!lightMode);
  }
  const [menu, setMenu] = useState(true)
  function menuHandler() {
    setMenu(!menu);
  }

  return (
    <div className={`w-screen fixed top-0 z-10 left-0 py-2.5 shadow-md  lg:backdrop-blur ${!lightMode ? "text-white lg:bg-[#000000] bg-black shadow-slate-500" : "lg:bg-slate-300/80 bg-slate-300"}`}>

      <nav className='flex xl:w-[90%] md:h-[15vh] lg:h-[17vh] flex-wrap mx-auto lg:w-[98.5%] md:w-[95%] h-[26vh] md:flex-row md:gap-y-0 flex-col gap-y-2 my-auto'>
        <div className='pl-2 md:my-auto md:h-[100%] h-[63%] xl:ml-0 lg:mx-auto xl:min-h-[100%] lg:max-h-[79%] md:ml-0 sm:mx-auto mx-auto my-auto'>
          <a href='/'> <img src={img} className=' rounded-full h-full' /></a>
        </div>
        <div className=' flex lg:w-[90%] xl:w-[85%] md:ml-auto md:mr-0 md:w-[72%] w-[97%] 2xl:justify-between xl:mx-auto lg:mx-auto my-auto'>
          <div className={` lg:flex font-semibold text-lg 2xl:gap-x-8 my-auto 2xl:mx-[3rem] xl:gap-x-3 mx-auto lg:gap-x-2 lg:px-[2px] lg:mr-3 hidden`}>
            <p onClick={clickHandler} className={`${query === "finance" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`}  cursor-pointer hover:text-blue-600 `}>Finance</p>
            <p onClick={clickHandler} className={`${query === "health" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Health</p>
            <p onClick={clickHandler} className={`${query === "science" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Science</p>
            <p onClick={clickHandler} className={`${query === "entertainment" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Entertainment</p>
            <p onClick={clickHandler} className={`${query === "sports" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Sports</p>
            <p onClick={clickHandler} className={`${query === "technology" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Technology</p>
          </div>
          <div className={` lg:hidden flex flex-col fixed md:top-[18vh] top-[30vh] items-center w-screen left-0 font-semibold text-lg pb-10 backdrop-blur h-[55vh] gap-y-2 justify-center ${lightMode ? "bg-slate-100/75" : " bg-[#414141d0]"} ${menu ? "hidden" : ""}`}>
            <p onClick={clickHandler} className={`${query === "general" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`}  cursor-pointer hover:text-blue-600 `}>General</p>
            <p onClick={clickHandler} className={`${query === "health" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Health</p>
            <p onClick={clickHandler} className={`${query === "science" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Science</p>
            <p onClick={clickHandler} className={`${query === "entertainment" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Entertainment</p>
            <p onClick={clickHandler} className={`${query === "sports" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Sports</p>
            <p onClick={clickHandler} className={`${query === "technology" ? "text-blue-700" : `${lightMode ? " text-black" : " text-white"}`} cursor-pointer hover:text-blue-600 `}>Technology</p>
          </div>
          <form onSubmit={submitHandler} className='flex items-center justify-center 2xl:gap-x-8 2xl:mx-6 xl:gap-x-5 lg:gap-x-3 md:gap-x-5 lg:ml-auto gap-x-2 md:mx-auto text-white font-semibold mx-auto'>
            <input placeholder='Search here...' className={`text-black  placeholder:font-light px-1 py-2 rounded-lg xl:w-[17rem] md:max-w-[15rem] sm:max-w-[13rem] max-w-[11rem] focus:outline-0 border-black border-[2px] focus:border-[3px] focus:border-blue-700 ${lightMode ? "" : " bg-[#1C1C1E] text-slate-100 border-2 border-slate-500"}`} />
            <button className='flex items-center justify-center lg:gap-x-2 xl:gap-x-3 sm:gap-x-2 gap-x-[0.2rem] px-[0.2rem] sm:px-3 bg-blue-500 xl:px-6 py-2 lg:px-2 rounded-md hover:bg-blue-700 transition-colors duration-300 '>Search <FiSearch className=' font-bold text-lg'></FiSearch></button>
          </form>
          <div className='flex sm:gap-x-2'>
            <button onClick={menuHandler} className=' lg:hidden w-[3rem] h-[3rem] rounded-full font-bold text-5xl my-auto sm:ml-auto -mr-1'>{menu ? <BiMenuAltRight /> : <BiX />}</button>
            <button onClick={modeHandler} className='w-[3rem] h-[3rem] my-auto rounded-full'>{lightMode ? <MdOutlineDarkMode className=' font-bold xl:text-5xl lg:text-4xl text-5xl' /> : <MdOutlineLightMode className=' font-bold text-5xl' />}</button>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Header