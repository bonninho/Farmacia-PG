import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
        <div className="flex justify-center  bg-teal-700 text-teal-100">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Drogaria PeshBreja | Copyright: Bianka Bonete Staianof</p>
            <p className='text-lg'>Outras redes</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
              <a href='https://github.com/bonninho' target='_blank' >
              <GithubLogo size={48} weight='bold'/>
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer