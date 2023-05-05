import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (
    <div className='w-[100vw] overflow-x-hidden m-0 h-screen background  '>
<h1 class="text-3xl font-bold text-center mt-10 bg-opacity-50 backdrop-blur-lg rounded-lg py-4 shadow-lg bg-gradient-to-br font-mono w-[80%] m-auto from-red-500 via-yellow-500 to-orange-500 text-white transition-all hover:border-2 hover:border-red-500 hover:shadow-xl hover:rounded-lg">Random Gif</h1>

      <Random/>
      <Tag/>
    </div>
  )
}

export default App