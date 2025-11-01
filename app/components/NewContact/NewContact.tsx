import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import Form from '../Form/Form'
import { PersonIcon } from '@radix-ui/react-icons'

const NewContact = () => {
  return (
    <div >
        <div className="flex mt-4 ml-5">
            <PersonIcon className='w-5  h-5 ml-1 text-[#24211C]' />
            <h1 className="text-md ml-2 font-bold text-[#24211C]">Agregar nuevo contacto</h1>
        </div>
        <div>
            <h2 className="text-sm text-gray-500 ml-5">Completa la información del contacto profesional</h2>
        </div>
        <div className='flex flex-col justify-end h-40 items-center'>
        
            <Button className="mt-4 bg-[#E7E4DD] h-8 w-25 rounded-lg mb-2" children={ 
            <>
                <Image src="/upload.png" alt="upload" width={10} height={10} />
                <p className=' text-[#24211C] px-1.5 py-2 text-xs'>Subir foto</p>
            </>
            } />
            </div>
            <div className='flex flex-col items-center w-full'>
                <Form />
            </div>
    </div>
  )
}

export default NewContact