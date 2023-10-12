export default function ProfileInfo({
    field, value
}: {
    field: string, value: string
}) {
    return (
        <section>
            <div>
                {field}
            </div>
            <div>
                {value}
            </div>
        </section>
    )
}