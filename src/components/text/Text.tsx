import './Text.css';

type TextProps = {
    content?: string,
    bold?: boolean,
    color?: 'primary' | 'secondary' | 'light' | 'error' | 'accent',
    size?: 'sm' | 'md' | 'lg',
    customClass?: string
}

export const Text = ({content, size="md", bold, color="primary", customClass=''}: TextProps) => {
    return (
        <span className={`${size} ${bold ? 'font-bold' : ''} ${color} ${customClass} leading-5`}>{content}</span>
    )
}