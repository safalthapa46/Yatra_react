import React, { useState } from 'react'
import {data} from "../data/data.jsx"
import Category from './Category.jsx';
import {Link} from 'react-router-dom'


function Dest() {
  const [dest, setDests]=useState(data);

  const filterType=(categories)=>{
    setDests(
      data.filter((item)=>{
        return item.category===categories;
      })
    )
  }

  const filterPrice=(prices)=>{
    setDests(
      data.filter((item)=>{
        return item.price===prices
      })
    )
  }


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      
        <h1 className='text-orange-600 font-bold text-4xl text-center pt-[15px]'>Destinations In Nepal</h1>
      
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
            <p className='font-bold  text-2xl pl-[120px] text-orange-600  pb-3'>Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=> setDests(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>All</button>
                <button onClick={()=> filterType('Trekking')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Trekking</button>
                <button onClick={()=> filterType('Hiking')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Hiking</button>
                <button onClick={()=> filterType('Camping')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Camping</button>
            </div>
        </div>


        <div>
            <p className='font-bold  text-2xl pl-[150px] text-orange-600  pb-3'>Types</p>
            <div className='flex justify-between max-w-[400px] w-full'>
                <button onClick={()=> filterPrice('Himalayas')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Himalayas</button>
                <button onClick={()=> filterPrice('Lakes')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Lakes</button>
                <button onClick={()=> filterPrice('Temples')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>Temples</button>
                <button onClick={()=> filterPrice('National Parks')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-lg bg-red-200'>National parks</button>

            </div> 
        </div>
      </div>
      
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {dest.map((item, index)=>(
              <div key={index} className=' border shadow-lg  rounded-lg  hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'
                />
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-bold'>{item.name}</p>
                <Link to={`/description/${item.id}`}>
                  <button   className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-1 rounded-md bg-red-200'>Read Me</button>
                  </Link> 
                </div>
              </div>
          ))}
      </div>

      <Category />

    </div>
  )
}

export default Dest