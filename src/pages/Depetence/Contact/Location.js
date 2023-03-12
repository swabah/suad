import React from 'react'

function Location() {
  return (
    <div className='w-full  text-[#1c415d] h-[600PX] bg-gray-100  px-2 md:px-7 lg:px-20  py-10 '>
    <div className='w-full items-start font-light text-gray-700'>
      <h1 className='text-sm md:text-base uppercase'><span className='font-bold lg:text-lg pr-1'>#</span>READY TO VISIT  </h1>
    </div>
    <div className='w-full flex items-center  pt-3 pb-2 justify-between'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Our Location</h2>
    </div>
    <div className='w-full pt-8 drop-shadow-lg'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.836674895996!2d75.96382071471528!3d11.273413591985483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6453e7574708f%3A0xc26355bb256d416e!2sAhlussuffa%20Dars!5e0!3m2!1sen!2sin!4v1676392700115!5m2!1sen!2sin"
        className='w-full h-72'
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
  )
}

export default Location
