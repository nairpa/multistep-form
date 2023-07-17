import React, { useEffect } from "react";
import { Text } from "../text/Text"
import './Switch.css';

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
    labelCheck: string,
    labelUncheck: string,
    isChecked: boolean,
}

export const Switch = React.forwardRef(function swtich({ labelCheck, labelUncheck, isChecked, ...rest}: SwitchProps, ref: any) {
    
    return (
        <div className="flex gap-4">
            <Text content={labelCheck} bold={!isChecked} color={isChecked ? 'secondary' : 'primary'}/>
            <div className="switch">
                <input type='checkbox' className={`${isChecked ? 'isChecked' : ''} switch-input`} ref={ref} {...rest}/>
                <span className="slider"></span>
            </div>
            <Text content={labelUncheck} color={isChecked ? 'primary' : 'secondary'} bold={isChecked}/>
        </div>
    )
})