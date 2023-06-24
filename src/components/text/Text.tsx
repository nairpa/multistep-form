import './Text.css';

type TextProps = {
    content: string,
    type?: 'heading' | 'body',
    bold?: boolean,
    color?: 'primary' | 'secondary' | 'light' | 'error'
}

export const Text = ({content, type="body", bold, color="primary"}: TextProps) => {
    return (
        <span className={`${type} ${bold ? 'font-bold' : ''} ${color}`}>{content}</span>
    )
}