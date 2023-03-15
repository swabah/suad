import React from 'react'

function ChooseCard(props) {
  return (
    <article className="rounded-xl   duration-300 h-auto w-auto">
    <a href="#" className='flex text-center flex-col items-center justify-center relative'>
      <div className="drop-shadow-xl hover:drop-shadow-xl  flex items-center overflow-hidden w-auto">
        <img className='w-28 h-28 object-cover' src={props.iconimg} alt="" />
      </div>
      <div className="mt-4 p-2 text-center ">
        <h1 className=' text-[#1c415d]  font-semibold text-2xl py-3 '>{props.title}</h1>
        <p className='pt-0 text-gray-500 font-thin text-lg leading-relaxed max-w-[250px]'>{props.para}</p>
      </div>
    </a>
  </article>
  )
}

export default ChooseCard
