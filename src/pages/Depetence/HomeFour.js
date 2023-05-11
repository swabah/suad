import React from 'react'

function HomeFour() {
  const data =[
    { 
      item : 'Our noorani,saquafi asathida are much distinctive with unique teaching skills to forge an imitative culture'
    },
    { 
      item : 'Our students are educated to achieve leadership skills, confidence and self esteemso that they develop multi faceted talents which can enable them to face the challenges of the modern world.'
    },
    { 
      item : 'Result oriented training programmes and co-curricular activities that will keep the students alive with a global standard.'
    },
    { 
      item : 'Our comprehensive moral education engages with modern educational'
    },
    { 
      item : 'Our research based curriculum encourages students to deliver their interests and strengths fostering positive attitudes'
    },
  ]
  
  return (
    <div   className='bg-fixed bg-cover bg-brightness-50 bg-no-repeat w-full h-full'>
     <div className='w-full text-[#1c415d] h-full   bg-opacity-60 bg-white  py-10 md:py-12 lg:py-16 xl:py-20 '>
     <div className='w-full flex items-center md:pt-1  pb-2 justify-between'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>How Ahlussuffa Distinct from others?</h2>
     </div>
     <div className='pt-1 md:pt-8 w-full h-auto grid grid-cols-1 grid-rows-auto gap-y-1 md:gap-y-4 items-center justify-center'>
        {data.map((item)=>(
          <h2 className='text-sm md:text-sm lg:text-base w-full h-auto md:px-3 lg:px-5 py-3 lg:py-5 md:drop-shadow-lg border-b md:border-t md:shadow-md rounded md:uppercase' >{item.item}</h2>
          ))}
     </div>
   </div>
    </div>
  )
}

export default HomeFour