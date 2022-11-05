import styles from './css/ProfitLoss.module.css'
import LineGraph from './LineGraph';

export default function ProfitLoss() {
    return (
        <div>
        <div className={styles.box}>
            <div>
                <LineGraph></LineGraph>
            </div>
        </div>
        </div>
    );
}