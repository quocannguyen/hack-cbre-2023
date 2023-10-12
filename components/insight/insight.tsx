import { InsightProps } from "@/models/insight.model"
import styles from "./styles.module.css"

export default function Insight({
    insightProps
}: {
    insightProps: InsightProps
}) {
    console.log(insightProps)

    return (
        <section className={styles.container}>
            {/* <div>
                <h1 className="font-['Kanit'] uppercase text-white">
                    New Update
                </h1>
                <div className={styles.infoContainer}>
                    <div className="text-xs font-['Kanit'] text-white">
                        1 hour ago
                    </div>
                    <div className="text-xs font-['Kanit'] text-white">
                        Critical Level: <span className="text-[#ff0000]">HIGH</span>
                    </div>
                </div>
            </div>
            
            <div>
                <p className={styles.description}>
                    Unusually low energy efficiency at this site. Operating costs have risen by 10% due to increased energy input.
                </p>
            </div> */}
            {insightProps.address} : {insightProps.account} : {insightProps.insight1} : {insightProps.insight2} : {insightProps.driver} : {insightProps.criticality}
            <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                    Learn More?
                </div>
                <div className={styles.button}>
                    Ignore
                </div>
            </div>
        </section>
    )
}