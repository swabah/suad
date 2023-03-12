import React from 'react'
import SubHeadings from '../components/SubHeadings'
import Qiucklist from './Depetence/QiuckForm/Qiucklist'
import { motion } from 'framer-motion'

function QiuckContact() {
  return (

    <div className='w-full h-auto   mt-[60px] md:mt-[77px] lg:mt-[90px]'>
      <SubHeadings subheading='Qiuck Contact'/>
      <div className='w-full h-auto  px-2 md:px-7 lg:px-20  mt-12'>
      <Qiucklist/>
      </div>
    </div>
  )
}

export default QiuckContact
