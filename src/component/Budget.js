import styles from "./css/Budget.module.css";

export default function Budget() {
    const myStocks = ['Naver','Kakao','Samsung'];
    const myStocksList = myStocks.map((myStock)=>
        <li>{myStock}</li>
    );

    return (
        <div className={styles.box}>
            <div style={{textAlign: "center"}}>
                <ul style={{color: 'white'}}>{myStocksList}</ul>
            </div>
        </div>
    );
}