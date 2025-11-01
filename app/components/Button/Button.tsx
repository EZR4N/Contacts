import React from 'react'


interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void; // optional by now (developing ui)
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div className={`flex items-center justify-center hover:brightness-80 ease-in-out hover:cursor-pointer transition-all duration-300 ${className}`} onClick={onClick}>
        {children}
    </div>  
  )
}

export default Button