import { ChangeEvent, FormEventHandler } from "react";
import Input from "./input";

interface InputProps {
    id: string,
    value: any,
}

export default function InputForm({
    onSubmit,
    onChange,
    inputs,
    buttonString,
}: {
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    inputs: InputProps[],
    buttonString: string
}) {

    return (
        <form 
            className="text-center self-stretch flex flex-col mx-6 gap-12" 
            onSubmit={onSubmit}
        >
            <section className="flex flex-col justify-center h-[450px] mx-auto gap-6 self-stretch">
                {inputs.map(({id, value}) => (
                    <Input 
                        key={id}
                        name={id}
                        type={id}
                        id={id}
                        value={value} 
                        onChange={onChange} 
                        placeholder={id} 
                    />
                ))}
                <button 
                    type="submit"
                    className="border-solid border-[#104f36] bg-[#104f36] h-12 py-2 shrink-0 border-4 rounded-lg mx-2 text-white text-xl font-['Kanit']">
                    {buttonString}
                </button>
            </section>
        </form>
    )
}