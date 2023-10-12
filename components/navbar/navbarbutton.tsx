export default function NavbarButton({
    text
}: {
    text: string
}) {
    return (
        <div className="text-sm font-['Kanit'] text-black">
            {text}
        </div>
    )
}