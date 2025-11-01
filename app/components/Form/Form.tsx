import React from 'react'
import Input from '../Input/Input'
import Image from 'next/image'
import Button from '../Button/Button'
import Attach from '../Attach/Attach'
const Form = () => {
  return (
    <div className='flex flex-col border-t-2 border-gray-300 items-center w-19/20 mb-2'>
            <div className='flex flex-col md:flex-row w-full items-center gap-2'>
                <Input type="text" placeholder="Juan" className="w-full md:w-1/2 " label="Nombre *" name="name" />
                <Input type="text" placeholder="Pérez" className="w-full md:w-1/2" label="Apellido *" name="lastname" />
            </div>
            <Input type="text" placeholder="Juan.perez@ejemplo.com" className="w-full" label="Email *" name="email" />
            <div className="flex mb-2 justify-start w-full ">
                <Attach name="attach" label="Subir archivo" />
            </div>
            <Button className="w-full bg-[#00653E] text-white rounded-lg h-8 mt-2" children={
                <>
                <div className="mb-0.5 mr-1">
                <Image src="/icons8-agregar-contacto-48.png" alt="add" width={20} height={20} />
                </div>
                <p>Agregar contacto</p>
                </>
                } />
    </div>
  )
}

export default Form