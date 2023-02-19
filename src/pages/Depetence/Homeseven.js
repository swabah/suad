import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import EventsCard from './Events/EventsCard'
import oneE from '../img/events/tazyin.jpg'
import twoE from '../img/events/ilalvisal.jpg'
import threeE from '../img/events/multhaka.jpg'
import fourE from '../img/events/prashnothary.jpg'
import { Link } from 'react-router-dom'


function Homeseven() {
    const link = 'www.facebook.com/ahlussuffadars/'
  return (
    <div className='w-full space-y-3 text-[#1c415d] h-auto bg-gray-100 px-44 py-20 '>
     <div className='w-full flex items-center  pt-4 justify-between'>
       <h2 className='text-4xl font-bold'>Program & Occasions</h2>
       <Link to='/Event'>
       <div className='w-auto h-auto py-1 border-gray-400  border-b-[1px] hover:border-[#1c415d] transition flex items-center space-x-3'>
           <a href="">View All
           </a>
           <FaArrowRight/>
       </div>
       </Link>
     </div>
     <div className='w-full flex items-center justify-between pt-4'>
      <Link to='/event'>
      <EventsCard imgE={oneE} link={link} head='Thazyin' title='അഹ്‌ലുസ്സുഫയിലെ  മുപ്പതിലേറെ വരുന്ന ഹാഫിളുകൾക്കായി സംഘടിപ്പിക്കുന്ന..... രണ്ടാഴ്ചകാലത്തെ തസ് യീൻ ദൗറ കാമ്പയിൻ ഹാഫിള് അബൂബക്കർ അദനിയുടെ നേതൃത്വത്തിൽ ഫെബ്രുവരി 13 മുതൽ ആരംഭിക്കുന്നു.'/>
      </Link>
      <Link to='/event'>
      <EventsCard imgE={twoE} link={link} head='ilal visal' title='In search of spiritual ecstasy ഇലല്‍ വിസ്വാൽ 2023'/>
      </Link>
      <Link to='/event'>
      <EventsCard imgE={threeE} link={link} head='Arabic day' title='World Arabic Language Day, അഹ്ലുസ്സുഫ്ഫയും ഇതിനോടകം സന്തോഷിച്ചു '/>
      </Link>
      <Link to='/event'>
      <EventsCard imgE={fourE} link={link} head='Aksharakkoottam' title='അക്ഷരകൂട്ടം മലയാള ഭാഷ സമിതിയുടെ വാരാന്ത പ്രശ്നോത്തരി വിജയകരമായ പത്താം വാരത്തിലേക്ക് പാദമൂന്നുന്നു. '/>
      </Link>
        
     </div>
   </div>
  )
}

export default Homeseven
