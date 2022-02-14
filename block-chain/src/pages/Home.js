import styles from "./Home.module.css";

function Home(){
    return(
        <>
            <section className={styles.upContainer}>
                <form className={styles.upLeft}>
                    <h1>BitCoin Simulator</h1>
                    <input
                        className={styles.upLeftInput1}
                        placeholder="Block의 Data"
                    />
                    <div className={styles.upLeftDiv1}>
                        <input
                            className={styles.upLeftInput2}
                            placeholder="Nonce"
                            type="number"
                        />
                        <button className={styles.upLeftFireBtn}>fire</button>
                    </div>
                    <div className={styles.upLeftDiv2}>
                        <input
                            className={styles.upLeftInput3}
                            type="number"
                        />
                        <button className={styles.upLeftMineBtn}>Mine block</button>
                    </div>
                </form>
                <div className={styles.upRight}>
                    <h1>Candidate Block</h1>
                    <div className={styles.upRightDiv1}>
                        <div className={styles.upRightDiv2}>
                            <span>Previous Hash:</span>
                            <span>111</span>
                        </div>
                        <div className={styles.upRightDiv2}>
                            <span>Data:</span>
                            <span>222</span>
                        </div>
                        <div className={styles.upRightDiv2}>
                            <span>Hash:</span>
                            <span>333</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.downContainer}>
                블럭들 쌓이는곳
            </section>
        </>
    );
}
export default Home;