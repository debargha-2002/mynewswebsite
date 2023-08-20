import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, setPage, totalPage, lightMode } = useContext(AppContext)
  console.log(totalPage)
  return (
    <div className={` w-screen flex lg:h-[18vh] items-center justify-center bg-slate-900 text-white sm:gap-x-7 font-semibold text-lg sm:h-[20vh] h-[24vh] gap-x-3 ${lightMode ? "" : " bg-[#020202] shadow-[0_-2px_10px_0_rgb(107,114,128)]"}`}>
      {/* <div>{page > 1 && <button onClick={() => (setPage(page - 1))} className=' border-2 sm:px-6 sm:py-2 rounded-md px-2 py-1'  >Previous</button>}</div>
      <div>Page {page} of {totalPage}</div>
      <div>{page < totalPage && <button onClick={() => { setPage(page + 1) }} className=' border-2 rounded-md sm:px-10 sm:py-2 px-4 py-1'>Next</button>}</div>
        */}
        <div>Copyright &copy; Deb News 2023</div>
    </div>
  )
}

export default Pagination