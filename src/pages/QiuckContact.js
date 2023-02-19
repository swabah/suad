import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Qiucklist from './Depetence/QiuckForm/Qiucklist'

function QiuckContact() {
  return (
    <div className='w-full h-auto'>
      <SubHeadings subheading='Qiuck Contact'/>
      <div className='w-full h-auto px-5 md:px-12 lg:px-20 xl:px-44 mt-16'>
      <Qiucklist/>
      </div>
    </div>
  )
}

export default QiuckContact
