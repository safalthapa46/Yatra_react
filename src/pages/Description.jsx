import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { data } from '../data/data'


const Description = () => {
    const { id } = useParams()
    
    const [info, setInfo] = useState({
        category: '',
        name: '',
        image: '',
        price: '',
        paragraph:''
    })
useEffect(() => {
    data.map((item) => {
        if (item.id == id) {
            setInfo( {
                    category: item.category,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    paragraph:item.paragraph
                }
            )
            console.log(info)
        }
    })
}, [])
    return (
        <div>
            {id}
            <div className='text-red-600'>
                {info.paragraph}
            </div>
            {/* {info.category} */}
            {/* {info.name} */}
            {/* {info.image} */}
            {/* {info.price} */}
        </div>
    )
}

export default Description
