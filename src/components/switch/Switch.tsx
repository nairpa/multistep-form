import { Text } from "../text/Text"
import './Switch.css';

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
    label: string,
}

export const Switch = ({ label, ...rest}: SwitchProps) => {
    return (
        <div className="switch">
            <Text content={label} />
            <input type='checkbox' {...rest}/>
            <span className="slider"></span>
        </div>
    )
}