import React from 'react'
import Image from 'next/image'
interface AttachProps {
    onClick?: () => void; // optional by now (developing ui)
    className?: string;
    name: string;
    label: string;
}

const Attach = ({ onClick, className, name, label }: AttachProps) => {
  return (
    <div>
        <label className='text-sm text-gray-500 ml-5'>{label}</label>
        <div className={`flex border-dotted border-2 border-gray-300 w-40 rounded-lg p-2 items-center justify-center hover:brightness-60 hover:transform hover:scale-101 hover:cursor-pointer transition-all duration-300 ${className}`}>
            <div className="mb-0.5 mr-2">
            <Image src="/icons8-agregar-archivo-50.png" alt="add" width={20} height={20} />
            </div>
            <p className="text-sm text-gray-500">Subir archivo</p>
        </div>
    </div>
  )
}

export default Attach