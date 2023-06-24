import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import './Button.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
}

export const Button = ({text, ...rest}: ButtonProps) => {
    return (
        <button className="text-white hover:opacity-80 font-bold rounded-md px-4 py-2" {...rest}>{text}</button>
    )
}