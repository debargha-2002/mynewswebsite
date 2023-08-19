import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Card = ({ post }) => {
  const { lightMode } = useContext(AppContext)
  return (
    <div className={`flex flex-col md:hover:scale-[1.0005] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_40px] transition-all duration-700 border-2 shadow-lg rounded-md relative h-[88vh] 2xl:h-[70vh] xl:h-[92vh] lg:h-[97vh] ${lightMode ? "" : " bg-[#363940] shadow-slate-600"}`}>

      <div className=' w-full xl:h-[40%] sm:h-[39%] lg:h-[32%] md:h-[37%] h-[35%]'><img src={post.image} className=' rounded-tl-md rounded-tr-md w-full min-h-[175px] h-[100%]' ></img></div>
      <div className=' mx-auto py-3 px-2 flex flex-col'>
        <p className={` font-extrabold text-lg leading-[1.35rem] mb-2 ${lightMode ? "" : " text-[#ffffff]"}`}>{post.title}</p>

        <p className={` text-sm font-semibold text-slate-800 ${lightMode ? "" : " text-gray-300"}`}>Published on: <span className={` text-slate-500 font-medium ${lightMode ? "" : " text-gray-400"}`}>{new Date(post.publishedAt).toLocaleString("en-IN", { hour12: true, timeStyle: "short", dateStyle: "medium" })}</span></p>

        <p className={` text-sm font-semibold text-slate-800 -mt-[2px] ${lightMode ? "" : " text-gray-300"}`}>Source : <span className={` text-slate-500 font-medium ${lightMode ? "" : " text-gray-400"}`}>{post.source.name}</span></p>

        <p className={` font-semibold text-slate-600 mt-2 leading-5 mb-2 ${lightMode ? "" : " text-[#e7e5e5]"}`}>{post.description.split(" ").slice(0, 35).join(" ") + `...`}</p>

        <a href={post.url} target='_blank'>
          <button className={` bg-blue-600 px-5 py-2 rounded-md font-semibold text-white absolute bottom-4 hover:bg-blue-800 transition-colors duration-300 ${lightMode ? "" : " bg-[#45ADFF] hover:bg-blue-500"}`}>
            Read more
          </button>
        </a>


      </div>
    </div>
  )
}

export default Card