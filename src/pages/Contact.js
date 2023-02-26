import React from 'react'
import SubHeadings from '../components/SubHeadings'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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
    <div class=" bg-gray-100 flex flex-col items-center justify-center">
      <SubHeadings subheading='Contact Form'/>
      <div class="mt-16 w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-44">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>
    
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <div class="lg:col-span-2">
                <form name='Contact__form' onSubmit={handleOnSubmit}  class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_name">Full Name</label>
                    <input name='user_name' required type="text"  placeholder='Your Name' class="h-10 outline-none  border mt-1 rounded px-4 w-full bg-gray-50"/>
                  </div>
    
                  <div class="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_email">Email Address</label>
                    <input required type="text" name="user_email" class="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50 "
                      placeholder="email@domain.com" />
                  </div>
    
    
                  <div class="md:col-span-3">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_number">Mobile Number</label>
                    <input required type="text" name="user_number" class="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50 "
                      placeholder="+91 0000000000"/>
                  </div>
                  <div class="md:col-span-2">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_birthday">Date of Birth</label>
                    <input required type="date" name="user_birthday" class="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50
                    " />
                  </div>
                  <div class="md:col-span-3">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_subject">Subject</label>
                    <input required type="text"  placeholder='Your Subject' name="user_subject" class="h-10 outline-none border mt-1 rounded px-4 w-full bg-gray-50" />
                  </div>
                  <div class="md:col-span-2">
                    <label  className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_distric">District</label>
                    <select required name="user_distric" placeholder='Your District' class="h-10 outline-none border mt-1 pr-3 rounded px-4 w-full bg-gray-50">
                      <option required className='bg-gray-900 text-white' value="Select District"></option>
                      <option value="Kasaragod">Kasaragod</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Wayanad">Wayanad</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Malappuram">Malappuram</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    </select>
                  </div>
                  <div class="md:col-span-5">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500" for="user_messege">Messege</label>
                    <textarea required class="h-20 py-2 capitalize outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                     name="user_message" id="" rows="10" placeholder='Something...'></textarea>
                  </div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
    
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
