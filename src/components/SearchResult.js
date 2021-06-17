import React from "react";
import styles from "../../styles/searchResult.module.css"
import Link from "next/link";
export default function SearchResult({result}){
    console.log(result)
    if(!result.length)return ''
    return (
        <div className={styles.searchContainer} >
        {result[1].map((each,index)=>(
            <Link href={`/insight/${each.replace(" ","_")}`}>
            <div className={styles.item}>
                {each}
            </div>
            </Link>
        ))}

        </div >
    )
}