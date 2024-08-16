import React from 'react'
import { User, SignOut, ShoppingCart, HouseLine } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-teal-700  text-teal-100 justify-center py-4'>
                <div className='container flex justify-between text-lg'>
                    <div className='text-2x font-bold uppercase'>
                        <img src='src\assets\peshbrejaicon.png' className='h-10'></img>
                        <h1>Drogaria PeshBreja</h1>
                    </div>
                    <div className='flex gap-4'>
                        <Link to='/home'>
                        <HouseLine size={32} weight='bold'/>
                        </Link>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/categorias'>
                        <div className='hover:underline'>Categorias</div>
                        </Link>
                        <ShoppingCart size={32} weight='bold'/>
                        <User size={32} weight='bold'/>
                        <SignOut size={32} weight='bold'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar