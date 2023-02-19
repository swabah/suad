import React from 'react'

function HomeCard(props) {
  return (
    <div className=''>
    <article class="rounded-xl   duration-300 h-auto max-w-[350px]">
      <a href="#" className='flex flex-col items-center relative'>
        <div class="drop-shadow-xl hover:drop-shadow-xl  flex items-center overflow-hidden w-full">
          <img className='absolute w-60 -top-10 rotate-12 -right-16' src={props.arrow} alt="" />
          <img className='h-44 w-auto  w-full object-fill' src={props.img} alt="Naseeha" />
        </div>
        <div class="mt-4 p-2 text-start ">
          <h1 className='  font-semibold text-2xl py-3 pb-4'>{props.title}</h1>
          <p className='pt-4 text-gary-300 whitespace-normal font-light text-lg leading-relaxed'>{props.para}</p>
        </div>
      </a>
    </article>
    </div>

  )
}

export default HomeCard
