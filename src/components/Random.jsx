import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Api_key ='HAIKWOfPd8q2SYcirLdLDBOlitqAa5Xl'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_key}`;
 
function Random() {
  const [gifUrl,setGifUrl] = useState('')
  const [loading ,setLoading] = useState(true);
  const handleClick=()=>{
    setLoading(true); 
    fetchData(url)
       
  }
  async function fetchData(url){
   const {data} = await axios.get(url);
   const imageUrl = data.data.images.downsized.url;
   setGifUrl(imageUrl);
  setLoading(false)

  }
  useEffect(()=>{
     fetchData(url)
  },[])
  return (
    <div className=' mx-auto my-5 bg-green-400 w-1/2 flex flex-col gap-4 place-content-center p-4'>
      <h1 className="text-xl font-bold mx-auto w-fit px-2 text-center mt-10 bg-opacity-50 backdrop-blur-lg rounded-lg p-1 shadow-lg bg-gradient-to-br from-red-500 via-yellow-500 to-orange-500 text-white transition-all hover">Example Heading</h1>
     {
      loading? <p>Loading...</p> :<img src={gifUrl} alt="" />
     }
        <button
        className='bg-gray-700 text-white p-3 rounded-s-sm w-fit mx-auto '
         onClick={handleClick}>Genrate Random </button>
    </div>
  )
}

export default Random