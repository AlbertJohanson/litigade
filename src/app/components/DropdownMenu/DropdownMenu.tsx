import React from 'react'

interface DropdownMenuProps {
    isOpen: boolean;
}
const DropdownMenu = ({isOpen}:DropdownMenuProps) => {
  return (
    <nav className={isOpen ? '"flex py-[90px] bg-[#F6F6F6] md:hidden justify-center space-x-4"': 'hidden'}>
        <ul className="flex flex-col justify-between ">
            <li className='text-3xl text-center text-[#737373] mb-[30px]'>
                <a href="/">Home</a>
            </li>
            <li className='text-3xl text-center text-[#737373] mb-[30px]'>
                <a href="#">Product</a>
            </li>
            <li className='text-3xl text-center text-[#737373] mb-[30px]'>
                <a href="#">Pricing</a>
            </li>
            <li className='text-3xl text-center text-[#737373]'>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default DropdownMenu