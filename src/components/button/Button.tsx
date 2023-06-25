import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import './Button.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    fullWidth?: boolean,
    customClass?: string,
}

export const Button = ({text, fullWidth, customClass='', ...rest}: ButtonProps) => {
    return (
        <button className={`${fullWidth ? 'w-full' : 'w-max'} action-btn text-white hover:opacity-80 font-bold rounded-md px-4 py-2 ${customClass}`} {...rest}>{text}</button>
    )
}