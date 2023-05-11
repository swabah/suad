import React from 'react'
import SubHeadings from '../components/SubHeadings'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Location from './Depetence/Contact/Location';
import {  FaMailBulk,FaMobileAlt } from 'react-icons/fa';
import { AiOutlineEnvironment} from 'react-icons/ai';
import img from './img/IMG_2747.JPG'

function Contact() {
const SERVICE_ID = "service_onzqpol";
const TEMPLATE_ID = "template_vg3c00j";
const ID = "qQiiYM7KIuDBrtTuy";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };


  

  return (

    <div className=" bg-white flex flex-col items-center justify-center ">
      <SubHeadings subheading='Get in Touch'/>
      <div className="mt-8 text-[#1c415d] w-full mx-auto  px-2 md:px-7 lg:px-20  py-10">
        <div>
          <div className='w-full  hidden flex-col items-start select-none '>
        		  	<h2  className='text-base md:text-lg uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        		  	   <span className='uppercase '>Get in Touch</span> 
        		  	</h2>
        	</div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-7 gap-y-3 text-sm grid-cols-1 xl:grid-cols-3 grid-rows-auto" >
              <div className="relative  bg-black  space-y-2 w-full h-[300px] xl:h-full rounded flex flex-col items-start justify-center ">
                <img className='absolute inset-0 w-full h-full object-cover rounded brightness-50 opacity-60' src={img} alt="" />
                  {/* <span className='text-2xl'><FaAddressBook/></span> */}
                  <div className='z-20  w-full h-full text-base text-base space-y-1 flex flex-col items-center justify-center px-2 md:px-6 xl:px-3'>
                    <div className='flex font-bold text-lg space-x-1 items-center shadow-md w-full bg-white px-2 xl:px-3 rounded-sm bg-opacity-90'>
                      <AiOutlineEnvironment/>
                     <p className='capitalize text-xs md:text-base xl:text-sm p-2 font-medium tracking-wide drop-shadow-sm '>Ahlussuffa Dars, Shuhada Maqam, Thathoor</p>
                    </div>
                     <div className='flex font-bold text-lg space-x-2 items-center shadow-md w-full bg-white px-2 xl:px-3 rounded-sm bg-opacity-90'>
                      <FaMailBulk/>
                     <a className='cursor-pointer text-xs md:text-base xl:text-sm p-2 font-medium tracking-wide drop-shadow-sm ' href="mailto:ahlussuffa.igs@gmail.com">ahlussuffa.igs@gmail.com</a>
                     </div>
                     <div className='flex font-bold text-lg space-x-2 items-center shadow-md w-full bg-white px-2 xl:px-3 rounded-sm bg-opacity-90'>
                      <FaMobileAlt/>
                     <a className='cursor-pointer text-xs md:text-base xl:text-sm p-2 font-medium tracking-wide drop-shadow-sm '  href="tel:+91 8848080044">+91 8848080044</a>
                     </div>
                  </div>
                {/* <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p> */}
              </div>
              <div className="lg:col-span-2">
                <form name='Contact__form' onSubmit={handleOnSubmit}  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_name">Full Name</label>
                    <input name='user_name' required type="text"  placeholder='Your Name' className="h-10 outline-none  border mt-1 rounded px-4 w-full bg-gray-50"/>
                  </div>
    
                  <div className="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_email">Email Address</label>
                    <input required type="text" name="user_email" className="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50 "
                      placeholder="Example.io@gmail.com" />
                  </div>
                  <div className="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_subject">Subject</label>
                    <input required type="text"  placeholder='Your Subject' name="user_subject" className="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>
                  <div className="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_messege">Messege</label>
                    <textarea required className="h-20 py-2 capitalize outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                     name="user_message" id="" rows="10" placeholder='Something...'></textarea>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end w-full">
                      <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
    
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location/>
    </div>
  )
}

export default Contact
