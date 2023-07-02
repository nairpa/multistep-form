import { useForm } from "react-hook-form"
import { Input } from "../input/Input"
import { useFormContext } from "../../context/FormContext";

export const PersonaInfoForm = (props: any) => {
    const { register, handleSubmit } = useForm();
    const { updateForm } = useFormContext();

    const onSubmit = (data: any) => {
        console.log(data)
        updateForm(data);
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('name')} label="Name" id="name" fullWidth/>
            <Input {...register('email')} label="Email" id="email" fullWidth/>
            <Input {...register('phone')} label="Phone number" id="phone" fullWidth/>
        </form>
    )
}