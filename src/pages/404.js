import {useRouter} from 'next/router'

import Layout from "../components/layout";
import Request from "../utils/request";
import globalUrl from "../config/globalUrl";
import { useState } from "react";

export default function Article({ params }){
    const [Views,setViews] = useState('')
    const [summary, setSummary ] = useState('')
    const router = useRouter();
    console.log(router.asPath)
    if(router.asPath.indexOf("/insight/") != 0 && router.asPath.split("/").length != 3){
        return ""
    }
    console.log("params")
    params = {id:router.asPath.split("/")[2]}
    var today = new Date();
    var dd = String(today.getDate()-1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var d= yyyy+mm+dd
    Request.request('GET',globalUrl.viewsUrl+`${params.id}/daily/${d}/${d}`)
    .then((res)=> {
      console.log(res)
      if(res.items){
        setViews(res.items[0].views)
        Request.request('GET',globalUrl.summaryUrl+`\\${params.id}`)
        .then((res) => {
            console.log(res)
            setSummary(res.extract_html)
            console.log(summary)
        })
      }
      else{
        setViews("Not Found")
      }
    })
    if(Views == "Not Found"){
        console.log('here')
        return "Not Found"
    }
    else if(Views == ""){
        console.log('here')
        return ''
    }
    console.log('final')
    return (
        <>
            <Layout>
            <div style={{textAlign:'center',margin:'auto 10px'}}>
                <h2>{params ? params.id :''}</h2>
            </div>
            <div dangerouslySetInnerHTML={{__html:summary}} >

            </div>

           
            <div className="stats" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                This Article got&nbsp; <b> {Views}</b> &nbsp; Views
            </div>
        
            </Layout>
        </>
    )
}