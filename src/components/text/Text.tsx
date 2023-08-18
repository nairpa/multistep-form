import './Text.css';

type TextProps = {
    content?: string,
    bold?: boolean,
    color?: 'primary' | 'secondary' | 'light' | 'error' | 'accent',
    size?: 'sm' | 'md' | 'lg',
    customClass?: string,
    onClick?: (event: any) => void;
}

export const Text = ({content, size="md", bold, color="primary", customClass='', onClick}: TextProps) => {
    return (
        <span className={`${size} ${onClick ? 'isLink' : ''} ${bold ? 'font-bold' : ''} ${color} ${customClass} leading-5`} onClick={onClick}>{content}</span>
    )
}