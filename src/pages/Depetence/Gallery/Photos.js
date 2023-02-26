import React from 'react'
import photo from './photos/photo1.jpeg'

function Photos() {
  return (
    <div class="container mx-auto w-full  px-4"> 
                
    <section class="py-8">
      <div class="flex flex-wrap  mb-5 ">
        <div class="w-full md:w-1/2  h-full px-3 mb-8 md:mb-0"><img class="rounded w-full h-full object-cover shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/2 h-auto px-3">
          <div class="mb-8"><img class="rounded shadow-md" src={photo} alt=""/></div>
          <div><img class="rounded shadow-md" src={photo} alt=""/></div>
        </div>
      </div>
    </section>
              
    <section class="pb-3">
      <div class="flex flex-wrap  mb-5 ">
        <div class="md:w-1/2 mb-4 px-3 md:mb-0"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/2 mb-4 px-3 md:mb-0"><img class="rounded shadow-md" src={photo} alt=""/></div>
      </div>
    </section>
              
    <section class="pb-3">
      <div class="flex flex-wrap  mb-5 ">
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/3 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
      </div>
    </section>
              
    <section class="pb-14 ">
      <div class="flex flex-wrap  mb-5 ">
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
        <div class="md:w-1/4 mb-4 px-3"><img class="rounded shadow-md" src={photo} alt=""/></div>
      </div>
    </section>
  </div>

  )
}

export default Photos
