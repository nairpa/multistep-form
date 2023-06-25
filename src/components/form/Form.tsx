import { Button } from "../button/Button"
import { Input } from "../input/Input"
import { Stepper } from "../stepper/Stepper"
import { Text } from "../text/Text"

export const Form = () => {
    return(
        <div className="flex bg-white p-4 gap-4 rounded-lg shadow-xl">
            <Stepper />
            <div className="flex flex-col gap-6 py-8 px-12">
                <div className="flex flex-col leading-8">
                    <Text size="lg" content="Personal info" />
                    <Text color="secondary" content="Please provide your name, email adredd, and phone number."/>
                </div>
                <form className="flex flex-col gap-4">
                    <Input label="Name" fullWidth/>
                    <Input label="Email" fullWidth/>
                    <Input label="Phone number" fullWidth/>
                </form>
                <Button text='Next step' customClass="self-end" />
            </div>
        </div>
    )
}