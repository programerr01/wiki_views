import Layout from "../components/layout";
import style from '../../styles/Home.module.css'
import { useState } from "react";
import Request from "../utils/request";
import globalUrl from "../config/globalUrl";
import SearchShower from "../components/SearchResult";
export default function Home(){
  const [searchField , setSearch ] = useState('')
  const [result, setResult ] = useState([]);
  const showResult = (value)=>{
    setSearch(value);
    if(value == ""){
      setResult([])
      return;
    }
    console.log(value);
    Request.request('GET',globalUrl.searchUrl+value)
    .then((res)=> {
      console.log(res)
      setResult(res)
    })
  }
  return(
    <>
    <Layout>
      <div>
          <p>
              Find Out the views of the particular Wikipedia Pages
          </p>
      </div>
      <div className={style.search}>
        <input onChange={(e)=> {showResult(e.target.value)}} className={style.input} id="search" type="search" placeholder="Search..." autoFocus required />
        <button className={style.button} type="submit">Go</button>  
        <SearchShower result={result} />
  
    </div>
    </Layout>
    </>
  )
}