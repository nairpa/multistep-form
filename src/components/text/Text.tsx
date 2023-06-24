import './Text.css';

type TextProps = {
    content?: string,
    bold?: boolean,
    color?: 'primary' | 'secondary' | 'light' | 'error',
    size?: 'sm' | 'md' | 'lg'
}

export const Text = ({content, size="md", bold, color="primary"}: TextProps) => {
    return (
        <span className={`${size} ${bold ? 'font-bold' : ''} ${color}`}>{content}</span>
    )
}