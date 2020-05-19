import React from "react";
import styles from "./startup-page.module.scss";
import HeroSection from "./HeroSection"
import SecondFold from "./SecondFold"

const StartupPage = ({dataObject}) =>{
    return(
        <div className={styles.container}>
                <HeroSection body={dataObject}/>
                <SecondFold body = {dataObject}/>
        </div>
    )
}

export default StartupPage;