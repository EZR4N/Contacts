import React from 'react'
import Image from 'next/image'
const Title = () => {
  return (
    <div>
        <div className="flex">
            <Image src="/contacts.png" alt="contact" width={40} height={40} className="mr-2" />
            <h1 className="text-4xl font-bold text-[#24211C]">Gestión de contactos</h1>
        </div>
        <div>
            <h2 className="text-lg text-gray-500 mb-7">Administra tu red de profesional de manera eficiente</h2>
        </div>
    </div>
  )
}

export default Title