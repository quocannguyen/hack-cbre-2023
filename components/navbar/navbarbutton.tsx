import Link from "next/link"

export default function NavbarButton({
    link,
    text
}: {
    link: string
    text: string
}) {
    return (
        <div className="text-sm font-['Kanit'] text-black">
            <Link href={link}>{text}</Link>
        </div>
    )
}