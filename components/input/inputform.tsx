import { ChangeEvent, FormEventHandler } from "react";
import Input from "./input";

interface InputProps {
    id: string,
    value: any,
}

export default function InputForm({
    onSubmit,
    onChange,
    inputs
}: {
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    inputs: InputProps[]
}) {

    return (
        <form className="text-center" onSubmit={onSubmit}>
            <section className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
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
                <button type="submit">Submit</button>
            </section>
        </form>
    )
}