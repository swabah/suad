import React from 'react'

function HomeCard(props) {
  return (
    <article class="rounded-xl   duration-300 h-auto max-w-[300px]">
      <div href="#" className='flex flex-col items-center  relative'>
        <div class="drop-shadow-xl hover:drop-shadow-xl  flex items-center md:justify-center lg:justify-start overflow-hidden w-full">
          {/* <img className='absolute w-32 md:w-60 -top-10 rotate-12 -right-16' src={props.arrow} alt="" /> */}
          <img className='h-32 md:h-12 lg:h-32 xl:h-44 w-auto  w-full object-fill' src={props.img} alt="Naseeha" />
        </div>
        <div class="mt-4 p-2 text-start md:text-center ">
          <h1 className='  font-semibold text-lg lg:text-2xl py-3 md:pb-4'>{props.title}</h1>
          <p className='lg:pt-4 text-gary-300 whitespace-normal font-light text-sm lg:text-base xl:text-lg leading-relaxed'>{props.para}</p>
        </div>
      </div>
    </article>

  )
}

export default HomeCard
