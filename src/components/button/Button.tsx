import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import './Button.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    fullWidth?: boolean,
    customClass?: string,
    color?: 'primary' | 'secondary'
}

export const Button = ({text, fullWidth, customClass='', color="primary", ...rest}: ButtonProps) => {
    return (
        <button className={`${fullWidth ? 'w-full' : 'w-max'} action-btn text-white hover:opacity-80 font-bold rounded-md px-4 py-2 ${customClass} ${color}`} {...rest}>{text}</button>
    )
}