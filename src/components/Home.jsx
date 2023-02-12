import React from 'react'



const Home = () => {
  return (
    <div  name='home' className=' bg-image h-screen overflow-x-hidden w-full bg-[#0a192f] bg-no-repeat bg-cover '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'> 
        <h1 className='text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6]'>Mero Yatra</h1>
        <p className='text-[#8892b0] text-center pl-10 py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, impedit similique? Consequuntur facere eos eaque maiores in, aperiam totam quo aspernatur vel nam tempore minima necessitatibus incidunt fuga eveniet harum!</p>
        <div className='item-center pl-[400px]'>
          <button className='text-white all group border-2 px-6 py-3 my-9 flex items-center  hover:bg-pink-600 hover:border-pink-600'>
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
