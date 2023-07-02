import { useForm } from "react-hook-form"
import { Input } from "../input/Input"
import { useEffect } from "react"

export const PersonaInfoForm = (props: any) => {
    useEffect(() => {
        console.log(props.errors)
    })
    return (
        <>
            <Input 
                {...props.register('name', { required: "The field is required" })} 
                error={props?.errors['name']?.message} 
                label="Name" 
                id="name" 
                fullWidth
            />
            <Input 
                {...props.register('email', { required: "The field is required" })} 
                error={props?.errors['email']?.message} 
                label="Email" 
                id="email" 
                fullWidth
            />
            <Input 
                {...props.register('phone', { required: "The field is required" })} 
                error={props?.errors['phone']?.message} 
                label="Phone number" 
                id="phone" 
                fullWidth
            />
        </>
    )
}