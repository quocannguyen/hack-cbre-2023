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
        <section>
            <input 
                name={name} 
                type={type} 
                id={id} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className={
                    // `w-full p-4 pt-6 font-light bg-white border-2 outline-none text-black ${big ? "w-[400px] pb-[6rem]" : ""}`
                    // "text-base font-['Kanit'] leading-[16px] mx-4 w-full border-solid border-[rgba(28,_115,_80,_0.85)] bg-white"
                    "text-base text-black font-['Kanit'] \
                    border-solid border-[rgba(28,_115,_80,_0.85)] bg-white border-4 rounded-lg \
                    self-stretch h-12 shrink-0 px-4"
                } 
            />
            {/* <div className="border-solid border-[rgba(28,_115,_80,_0.85)] bg-white self-stretch h-12 shrink-0 border-4 rounded-lg" /> */}
            {
                type=="password" && 
                <div className="text-xs font-['Kanit'] underline leading-[16px] mt-4">
                    Forgot Password?
                </div>
            }
        </section>
        
    )
}