import React from 'react'
import EventsCard from './Depetence/Events/EventsCard'
import tazyin from '../pages/img/events/tazyin.jpg'
import ilalvisal from '../pages/img/events/ilalvisal.jpg'
import multhaka from '../pages/img/events/multhaka.jpg'
import prashnothary from '../pages/img/events/prashnothary.jpg'
import congratulation from '../pages/img/events/congratulation.jpg'
import metaWin1 from '../pages/img/events/metaWin1.jpg'
import metaWin2 from '../pages/img/events/metaWin2.jpg'
import metaWin3 from '../pages/img/events/metaWin3.jpg'
import metaWin4 from '../pages/img/events/metaWin4.jpg'
import KalaYZone from '../pages/img/events/KalaYZone.jpg'
import KalaCZone from '../pages/img/events/KalaCZone.jpg'
import KalaBZone from '../pages/img/events/KalaBZone.jpg'
import SargaYZone from '../pages/img/events/SargaYZone.jpg'
import SargaCZone from '../pages/img/events/SargaCZone.jpg'
import SargaBZone from '../pages/img/events/SargaBZone.jpg'
import GoGreenThanks from '../pages/img/events/GoGreenThanks.jpg'
import SubHeadings from '../components/SubHeadings'

function Events() {
    const link = 'www.facebook.com/ahlussuffadars/'
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <SubHeadings subheading='Events'/>
    <div className='w-full h-full px-5 md:px-12 xl:px-44 mt-16 py-12 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex justify-center'>
      <EventsCard imgE={tazyin} link={link} head='Thazyin' title='അഹ്‌ലുസ്സുഫയിലെ  മുപ്പതിലേറെ വരുന്ന ഹാഫിളുകൾക്കായി സംഘടിപ്പിക്കുന്ന..... രണ്ടാഴ്ചകാലത്തെ തസ് യീൻ ദൗറ കാമ്പയിൻ ഹാഫിള് അബൂബക്കർ അദനിയുടെ നേതൃത്വത്തിൽ ഫെബ്രുവരി 13 മുതൽ ആരംഭിക്കുന്നു.'/>
      <EventsCard imgE={ilalvisal} link={link} head='ilal visal' title='In search of spiritual ecstasy ഇലല്‍ വിസ്വാൽ 2023'/>
      <EventsCard imgE={multhaka} link={link} head='Arabic day' title='World Arabic Language Day'/>
      <EventsCard imgE={prashnothary} link={link} head='Aksharakkoottam' title='അക്ഷരകൂട്ടം മലയാള ഭാഷ സമിതിയുടെ വാരാന്ത പ്രശ്നോത്തരി വിജയകരമായ പത്താം വാരത്തിലേക്ക് പാദമൂന്നുന്നു. '/>
      <EventsCard imgE={congratulation} link={link} head='Congratulations ' title='Congratulations Muhammed Bin Umer'/>
      <EventsCard imgE={metaWin1} link={link} head='META OCTOBER' title='mr.MUhammed Salman For being eligible for the monthly ASSIST scholaship by achieving 1st rank in META OCTOBER'/>
      <EventsCard imgE={metaWin2} link={link} head='META OCTOBER' title='mr.Hafiz safvan Sidhique For being eligible for the monthly ASSIST scholaship by achieving 2st rank in META OCTOBER'/>
      <EventsCard imgE={metaWin3} link={link} head='META OCTOBER' title='mr.Sajid Ali For being eligible for the monthly ASSIST scholaship by achieving 4st rank in META OCTOBER'/>
      <EventsCard imgE={metaWin4} link={link} head='META OCTOBER' title='mr.HAfiz Thasneem For being eligible for the monthly ASSIST scholaship by achieving 3st rank in META OCTOBER'/>
      <EventsCard imgE={GoGreenThanks} link={link} head='Go green' title="Thanks Go green; പുക'യരുത്', കലയാവണം 'ലഹരി'"/>
      <EventsCard imgE={KalaYZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
      <EventsCard imgE={KalaCZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
      <EventsCard imgE={KalaBZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
      <EventsCard imgE={SargaYZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
      <EventsCard imgE={SargaCZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
      <EventsCard imgE={SargaBZone} link={link} head='#Suffamehfil22 ' title="Individual champions of Go Green; The ninth edition of Suffa Mehfil"/>
    </div>
    </div>
  )
}

export default Events
