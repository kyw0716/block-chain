import { useEffect, useState } from "react";
import sha256 from "sha256";
import styles from "./Home.module.css";

function Home(){
    const [inputData, setInputData] = useState("");
    const [level, setLevel] = useState(0);
    const [nonce, setNonce] = useState("");
    const [mineBtn, setMineBtn] = useState(true);
    const [hashList, setHashList] = useState([]);
    const [hash, setHash] = useState("");

    useEffect(() => {
        hashFunction();
    },[inputData, nonce, hashList]);
    useEffect(()=>{
        let str = "0";
        for(let i = 0; i < level; i++){
            str += "0";
        }
        if(hash.slice(0,parseInt(level) + parseInt(1)) === str){
            setMineBtn(false);
        }
        else{
            setMineBtn(true);
        }
    },[hash, level]);

    const dataOnChange = (e) => {
        setInputData(e.target.value);
    }
    const nonceOnChange = (e) => {
        setNonce(e.target.value);
    }
    const levelChange = (e) => {
        setLevel(e.target.value);
    }
    const hashFunction = () => {
        if(inputData !== "" & nonce !== ""){
            if(hashList.length !== 0){
                setHash(sha256(inputData + nonce + hashList[hashList.length - 1]));
            }
            else{
                setHash(sha256(inputData + nonce));
            }
        }
    }
    const mineBtnOnClick = (e) => {
        e.preventDefault();
        if(hashList.length !== 0){
            setHashList((current) => [...current,[hash,inputData,(hashList[hashList.length - 1])[0]]]);
            setInputData("");
            setNonce("");
            setLevel(0);
            setMineBtn(true);
        }
        else{
            setHashList((current) => [...current,[hash,inputData,null]]);
            setInputData("");
            setNonce("");
            setLevel(0);
            setMineBtn(true);
        }
    }
    return(
        <>
            <section className={styles.upContainer}>
                <form className={styles.upLeft}>
                    <h1>BitCoin Simulator</h1>
                    <input
                        className={styles.upLeftInput1}
                        placeholder="Block의 Data"
                        value={inputData}
                        onChange={dataOnChange}
                    />
                    <div className={styles.upLeftDiv1}>
                        <input
                            className={styles.upLeftInput2}
                            placeholder="Nonce"
                            type="number"
                            value={nonce}
                            onChange={nonceOnChange}
                        />
                        <button className={styles.upLeftFireBtn}>fire</button>
                    </div>
                    <div className={styles.upLeftDiv2}>
                        <input
                            className={styles.upLeftInput3}
                            type="number"
                            value={level}
                            onChange={levelChange}
                        />
                        <button 
                            className={styles.upLeftMineBtn}
                            disabled={mineBtn}
                            onClick={mineBtnOnClick}
                        >
                            Mine block
                        </button>
                    </div>
                </form>
                <div className={styles.upRight}>
                    <h1>Candidate Block</h1>
                    <div className={styles.upRightDiv1}>
                        <div className={styles.upRightDiv2}>
                            <span>Previous Hash:</span>
                            <span>{hashList.length !== 0 ? (hashList[hashList.length - 1])[0] : null}</span>
                        </div>
                        <div className={styles.upRightDiv2}>
                            <span>Data:</span>
                            <span>{inputData}</span>
                        </div>
                        <div className={styles.upRightDiv2}>
                            <span>Hash:</span>
                            <span>
                                {inputData !== "" & nonce !== "" ? hash : null}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.downContainer}>
                {hashList.map((item, index)=>{
                    return (
                        <div className={styles.mapDiv} key={index}>
                            <div className={styles.mapSpan}>
                                <span>previous hash:</span>
                                <span>{item[2]}</span>
                            </div>
                            <span>
                                +
                            </span>
                            <div className={styles.mapSpan}>
                                <span>data:</span>
                                <span>{item[1]}</span>
                            </div>
                            <span>
                                +
                            </span>
                            <div className={styles.mapSpan}>
                                <span>current hash:</span>
                                <span>{item[0]}</span>    
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    );
}
export default Home;