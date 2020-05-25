import React from "react";
import styles from "./post-solution.module.scss";
import HeroSection from "./HeroSection"
//import SecondFold from "./SecondFold"

const PostSolution = () =>{
    return(
        <div className={styles.container}>
                <HeroSection />
                {/* <SecondFold body = {dataObject}/> */}
        </div>
    )
}

export default PostSolution;