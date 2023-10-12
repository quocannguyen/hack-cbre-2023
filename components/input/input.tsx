'use client'

interface InputProps {
    name: string
    type: any
    id: string
    value: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    textarea?: boolean
    big?: boolean
}

export default function Input({
    name, type, id, value, onChange, placeholder, textarea, big
}: InputProps) {
    return (
        <input 
            name={name} 
            type={type} 
            id={id} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            className={
                // `w-full p-4 pt-6 font-light bg-white border-2 outline-none text-black ${big ? "w-[400px] pb-[6rem]" : ""}`
                "text-base font-['Kanit'] leading-[16px] mx-4 w-full bg-white"
            } 
        />
    )
}