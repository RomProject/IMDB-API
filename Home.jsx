import React from 'react';
import Items from './Items'

import {useState,useEffect} from 'react'

export default function Home() {
    const [homelist, sethomelist] = useState([])
    const [inpvalue, setinpvalue] = useState("")
  
    const findMoive = async ()=>{
        try {
       const res = await fetch(`http://localhost:2323/movies/${inpvalue}`)     
       const data = await res.json()
       sethomelist(data.Search)
       console.log(data.Search);
            
        } catch (err) {
            console.log(err);
            alert("Cant find any movies!")
            window.location.reload(false)
          
        }


    }

    return (
        <div>
            <div className="head">
            <h1>IMDB-Menora</h1>
            <input id="inp" type="text" placeholder="Find a movie" onChange={(e)=>{setinpvalue(e.target.value);console.log(inpvalue)}}/>
            <button id="srchbtn" onClick={()=>{findMoive()}}>Lets start!</button>
            </div>
            <div className="movie-list">
            {homelist.map(m=><Items key={m.imdbID} title={m.Title} img ={m.Poster} year ={m.Year} movieid={m.imdbID}/>)}
            </div>
            
        </div>
    )
}
