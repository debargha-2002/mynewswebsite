import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Cards = () => {
  const { loading, setLoading, posts, lightMode } = useContext(AppContext)
  return (
    <div className={`w-screen md:pb-[14vh] pb-[12vh] md:pt-[9.5vh] mt-[17vh] sm:pt-[19vh] pt-[16.8vh] ${lightMode ? "" : " bg-[#101010ee]"}`}>
      <div className=' w-[85%] max-w-[1550px] mx-auto'>
        {
          loading ? <Spinner /> :
            <div>
              {
                posts.length > 0 ? <div className=' grid min-[1040px]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-10'>{posts.filter((post) => (post.image != null)).map((post, index) => (<Card post={post} key={index}></Card>))}</div> : <div className='w-screen h-screen flex items-center justify-center'> Currently no News to show</div>
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Cards