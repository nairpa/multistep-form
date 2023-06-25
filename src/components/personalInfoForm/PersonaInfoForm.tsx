import { Input } from "../input/Input"

export const PersonaInfoForm = () => {
    return (
        <>
            <Input label="Name" fullWidth/>
            <Input label="Email" fullWidth/>
            <Input label="Phone number" fullWidth/>
        </>
    )
}