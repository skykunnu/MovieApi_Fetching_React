/* eslint-disable no-undef */
import { useState} from "react"
import axios from "axios"

function Week() {
    const [showdata , setShowData] = useState("")


  const API_KEY = import.meta.env.VITE_API_KEY
   const img_base_path="https://image.tmdb.org/t/p/original"

async function toggleday(){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`)
    setShowData(response.data.results)
    console.log(response.data.results);
}



  return (
    <div>
      <button onClick={toggleday}>Week </button>
      <div className="show">
          
          {showdata.length > 0 &&
            showdata.map((item)=>{
            return(
               <div className="imges" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title}</h3>
               </div>
            )
          })

           }
      </div>
    </div>
  )
}

export default Week