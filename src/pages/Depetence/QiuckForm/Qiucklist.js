import React from 'react'
import QiuckPerson from './QiuckPerson'
import person1 from './PersonImg/arshadusthad.jpg'
import person2 from './PersonImg/Aliusthad.jpg'
import person3 from './PersonImg/shafeequsthad.jpg'
import '../../Depetence/Style.css'

function Qiucklist() {
  return (
    <div  id='scrollshade' className="overflow-y-hidden md:rounded-lg border border-gray-200 shadow-md my-16 md:my-24">
      <table className="w-full border-collapse  bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-base text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-base text-gray-900">State</th>
            <th scope="col" className="px-6 py-4 font-medium text-base text-gray-900">Contact</th>
            <th scope="col" className="px-6 py-4 font-medium text-base text-gray-900">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <QiuckPerson status='Usthads' img={person1} name='Usthad Arshad Nurani Assaqafi' email='person@gmail.com' number='+91 9746431108'/>
          <QiuckPerson status='sub usthad' img={person2} name='Muhammed Ali Nurani' email='person@gmail.com' number='+91 9961159173'/>
          <QiuckPerson status='sub usthad' img={''} name='Hafil Muhammed Nurani' email='person@gmail.com' number='+91 0000000000'/>
          <QiuckPerson status='sub usthad' img={''} name='Abdu Raoof saquafi' email='person@gmail.com' number='+91 0000000000'/>
          {/* <QiuckPerson status='usthad' img={person4} name='Salahudheen Nurani' email='person@gmail.com' number='+91 85940 25204'/>
          <QiuckPerson status='President' img={''} name='~𝐇𝐚𝐟𝐞𝐳 𝐅𝐚𝐫𝐢𝐳 𝐇𝐮𝐳𝐚𝐢𝐧' email='person@gmail.com' number='+91 7559901251'/>
          <QiuckPerson status='President' img={''} name='~Sabith' email='person@gmail.com' number='+91 7356654044'/>
          <QiuckPerson status='President' img={''} name='~Suhailmuhammed' email='person@gmail.com' number='+91 8156962394'/>
          <QiuckPerson status='President' img={''} name='~Shuaib' email='person@gmail.com' number='+91 79027 90313'/> */}
        </tbody>
      </table>
    </div>
  )
}

export default Qiucklist
