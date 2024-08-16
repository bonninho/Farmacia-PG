import React from 'react'
import peshLogo from '../../assets/peshbrejalogo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-white flex justify-center">
      <div className='container grid grid-cols-2 text-teal-700'>
        <div className="flex flex-col items-center justify-center">
          <h2 className='text-5xl font-bold'>Preço baixo é aqui!</h2>
          <div className="flex justify-end flex-col border-y-4">
            <button className='rounded bg-teal-700 text-teal-100 py-2 px-4 '>Ver produtos</button>
          </div>
          <div className="flex justify-end flex-col border-y-4">
            <Link to='/categorias'>
              <button className='rounded bg-teal-700 text-teal-100 py-2 px-4'>Ver categorias</button>
            </Link>
          </div>
        </div>

        <div className="flex justify-end ">
          <img src={peshLogo} alt="" className='w-2/3' />

        </div>
      </div>
    </div>
  )
}

export default Home