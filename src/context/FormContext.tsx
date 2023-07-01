import { createContext, useContext, useState } from "react";

const FormContext = createContext<any>(null);

export const useFormContext = () => {
    return useContext(FormContext)
}

export const FormProvider = ({children}:React.PropsWithChildren) => {
    const [form, setForm] = useState({});

    const updateForm = (updated: any) => {
        setForm((prev) => ({...prev, ...updated}));
    };

    return (
        <FormContext.Provider value={{ form, updateForm }}>
            { children }
        </FormContext.Provider>
    )
}