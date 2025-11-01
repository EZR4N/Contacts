import { IconProps } from '@radix-ui/react-icons/dist/types';
import React from 'react'

interface inputProps {
    type: string;
    name: string;
    className: string;
    label?: string;
    placeholder?: string;
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const Input = ({ type, placeholder, className, label, name, icon: Icon }: inputProps) => {
  return (
    <div className={`flex flex-col  ${className}`}>
        <div className='flex flex-row'>  
          {Icon && <Icon className='w-3 mt-1 h-3 ml-1 text-[#24211C]' />}
          <label htmlFor={name} className={`text-sm text-[#24211C] ${Icon ? 'ml-1' : 'ml-5'}`}>{label}</label>
        </div>
        <input id={name} type={type} placeholder={placeholder} className={`border-2 focus:outline-[#00653E] border-gray-300 p-2 rounded-lg h-8 `} />
    </div>
  )
}

export default Input