import React from 'react'
import * as Select  from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

const Dropdown = () => {
  return (
    <div>
        <Select.Root defaultValue="">
      <Select.Trigger
        className="flex items-center justify-between w-[160px] border-2 border-gray-300 rounded-lg h-8 px-3 text-sm text-[#24211C]  focus:outline-none focus:border-[#00653E]"
        aria-label="Ordenar por"
      >
        <Select.Value placeholder="Seleccionar" />
        <Select.Icon>
          <ChevronDownIcon className="text-[#24211C]" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        className="overflow-hidden rounded-md border border-gray-200 shadow-md bg-white"
        position="popper"
      >
        <Select.Viewport className="p-1">
          <Select.Item
            value="1"
            className="flex items-center justify-between px-3 py-2 text-sm text-[#24211C] rounded cursor-pointer focus:bg-[#E8E4DE] outline-none"
          >
            <Select.ItemText>Más recientes</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon className="w-4 h-4 text-[#00653E]" />
            </Select.ItemIndicator>
          </Select.Item>

          <Select.Item
            value="2"
            className="flex items-center justify-between px-3 py-2 text-sm text-[#24211C] rounded cursor-pointer hover:bg-[#E8E4DE] focus:bg-[#E8E4DE] outline-none"
          >
            <Select.ItemText>A-Z</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon className="w-4 h-4 text-[#00653E]" />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
    </div>
  )
}

export default Dropdown