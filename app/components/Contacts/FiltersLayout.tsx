import React from 'react'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'
import { MixerVerticalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

const FiltersLayout = () => {
  return (
    <div className='flex flex-row justify-between border-2 border-gray-300 rounded-lg p-2'>
        <div className='w-4/5'>
            <Input icon={MagnifyingGlassIcon} type="text" placeholder="Buscar por nombre, apellido o email" className="w-full" label="Buscar" name="search" />
        </div>
        <div>
            <div className='flex flex-row'>
                <MixerVerticalIcon className='w-3 mt-1 mr-1 h-3 text-[#24211C]' />
                <h4 className='text-sm text-[#24211C]'>Ordenar por</h4>
            </div> 
            <Dropdown />
        </div>
    </div>
  )
}

export default FiltersLayout