import React from "react";
import preloader from "./../../images/bluepreloader.gif";
import styles from "./Preloader.module.css"

const Preloader = () => {
    return <div className={styles.imgBox} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50 - 10
    }}><img src={preloader} style={{width: 50}} alt="preloader"/></div>;
}
export default Preloader;