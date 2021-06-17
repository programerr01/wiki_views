import React from "react";
import styles from './AppBar.module.css'


export default function AppBar(){
    return (
        <>  
        <div className={styles.header}>
            <div style={{cursor:'pointer'}}onClick={()=>{window.location.href="/"}}>
                <h3>Wikipedia Views</h3>

            </div>
        </div>

        </>
    )

}