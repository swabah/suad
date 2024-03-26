import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SubHeadings from '../components/SubHeadings'
import HomeFour from './Depetence/HomeFour'
import img from './img/IMG_2747.JPG'

function KnowUs() {
  return (
    <div className='w-full h-full'>
      <SubHeadings subheading='Know us' />
      <div className='px-3 md:px-7 lg:px-20  text-[#1c415d] mt-10  mb-12 w-full h-full'>
        <div className='items-center w-full h-auto  rounded-lg md:shadow-lg md:border grid grid-cols-1 gap-x-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
          <img className='object-cover w-full lg:w-96 h-full lg:rounded-l-lg drop-shadow-md' src={img} alt="" />
          <div className='md:col-span-3 py-3 md:p-5 lg:px-6 xl:px-10 flex flex-col justify-start space-y-5'>
            <p className='lg:text-lg'>With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education.
              The profound Islamic scholastic system organized by Shuhada Makham at Thathoor Mosque in Kozhikode has gained immense popularity, imparting knowledge to students through seven years of holistic religious and scientific education under the spiritual guidance of the revered Ustad. Ahlussuffa has been instrumental in creating a paradigm shift in the learning opportunities offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs. Ahlussuffa Dars is located at <a class="text-blue-600 after:content-['_↗'] ..." href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.836674895996!2d75.96382071471528!3d11.273413591985483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6453e7574708f%3A0xc26355bb256d416e!2sAhlussuffa%20Dars!5e0!3m2!1sen!2sin!4v1676392700115!5m2!1sen!2sin" >Thathoor Shuhada Maqam</a>, a historical Masjid situated in Thathoor, Near Mavoor, has a history of more than 100 years. With the boundless help of the natives of the Mahall, our Dars has more than 120 students who are pursuing their academic studies includes B.sc Physics, Computer programming, Commerce, Chartered Accountant and psychology courses etc, simultaneously. Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly.</p>
            <Link to='/photos'>
              <button className='bg-[#72bf44] flex items-center shadow-xl drop-shadow-md text-base lg:text-lg p-1.5 px-5 md:p-1.5 md:px-4 opacity-90 text-white drop-shadow-md '><span className='pr-3 lg:text-lg '>EXPLORE</span ><FaArrowRight /></button>
            </Link>
          </div>
        </div>
        <div className='mt-12 w-full border bg-[#72bf44] text-white  h-auto p-5 lg:p-8'>
          <h2 className='uppercase text-2xl lg:text-3xl font-semibold drop-shadow-md py-2'>Vision and Mission</h2>
          <p className='capitalize text-base lg:text-lg'>Ahlussuffa travelling on the right way to forge potential products by conducting efffective trainings and developmental bootcamps of highly qualified experts. And the Spiritual guid- ance of our Nurani&Saquafi Asathida is also moulding a Moral community of virtuosos. We know that Islam is highly misinterpreted in this scenario. Definitely our inten- tion is to keep us the way of prophet Muhammed(S.A. W).</p>
        </div>
        <div>
          <HomeFour />
        </div>
      </div>

    </div>
  )
}

export default KnowUs
