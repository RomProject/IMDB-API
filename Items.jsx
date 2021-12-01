import React from 'react'
import {useState} from 'react'
import Modal from 'react-modal'


export default function Items({title,img,year,movieid}) {

    const [movieInfo, setmovieInfo] = useState([])
    const [modal, setmodal] = useState(false)

    const toggleModal = ()=>{
        setmodal(!modal)

    }
    const getInfo = async()=>{
        try {
            const res = await fetch(`https://www.omdbapi.com/?i=${movieid}&apikey=d27040d0`)
            const data = await res.json()
            setmovieInfo(data)
            console.log(data);
            
  
        } catch (err) {
            console.log(err);
        }

    }
    
    return (
        <div>
        <div className="movies">
        <h1>{title}</h1>
        <img id="pic" src={img} alt=""/>  
        <h4>{year}</h4>

        <button onClick={()=>{getInfo();toggleModal()} } className="btn-modal">More Info</button>
        </div>
        
        {modal &&(

    <div className="modal">
    <div  onClick={toggleModal}  className="overlay">
    <div className="modal-content">
        <img id="modal-img" src={img} alt=""/>
        <h3>{movieInfo.Title}</h3>
        <h4>Ratings:{movieInfo.imdbRating}</h4>
        <p>Genre:{movieInfo.Genre}</p>
        <p>Awards:{movieInfo.Awards}</p>  
        <p>Actors:{movieInfo.Actors}</p>
        <button onClick={toggleModal} className="close-modal">Close</button>
    </div>
    </div>
    </div>
             )} 
        </div>
    )
}
