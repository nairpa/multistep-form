import { Text } from "../text/Text"
import './Switch.css';

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
    labelCheck: string,
    labelUncheck: string,
}

export const Switch = ({ labelCheck, labelUncheck, ...rest}: SwitchProps) => {
    return (
        <div className="flex gap-4">
            <Text content={labelCheck} bold />
            <div className="switch">
                <input type='checkbox' {...rest}/>
                <span className="slider"></span>
            </div>
            <Text content={labelUncheck} color="secondary"/>
        </div>

    )
}