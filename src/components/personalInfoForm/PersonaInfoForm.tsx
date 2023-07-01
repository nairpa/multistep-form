import { IStep } from "../../models/Step.model"
import { Input } from "../input/Input"

export const PersonaInfoForm = (props: any) => {
    return (
        <>
            <Input label="Name" fullWidth/>
            <Input label="Email" fullWidth/>
            <Input label="Phone number" fullWidth/>
        </>
    )
}