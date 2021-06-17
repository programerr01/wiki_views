import Head from "next/head";
import Link from "next/link";
import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer"
export default function Layout({children , home}){
    return (
        <div>
            <Head>
                <meta 
                    name="description"
                    content="Find Out Wikipedia Views on the page"
                    />
                <meta 
                    name="og:title" content="Wikipedia Views"
                    />
                <meta 
                    name="og:description" content="Daily Wikipedia Pages Views"
                />

            </Head>
            {/* <header className={styles.header}> */}
            <AppBar />
            {/* </header> */}
            <main style={{minHeight:"85vh"}}>
                {children}
            </main>
            {/* <main>
                {children}
            </main> */}
            <Footer />
        </div>
    )
}