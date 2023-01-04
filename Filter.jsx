import { useEffect } from "react";

function Filter({setActiveGenre , setFiltered , activeGenre, popular}){

useEffect(()=>{
    if(activeGenre === 0){
        setFiltered(popular)
        return ;
    }
    const filtered = popular.filter((movie)=>movie.genre_ids.includes(activeGenre))

    setFiltered(filtered)
}, [activeGenre])


    return(
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ''} onClick={()=>{
                setActiveGenre(0)
            }}>All </button>
            <button className={activeGenre ===28 ? "active" : ''} onClick={()=>{
                setActiveGenre(28)
            }}>Action</button>
            <button className={activeGenre ===80 ? "active" : ''} onClick={()=>{
                setActiveGenre(80)
            }}>Crime</button>
            <button className={activeGenre ===878 ? "active" : ''} onClick={()=>{
                setActiveGenre(878)
            }}>Sciense fiction</button>
        </div>
    )
}

export default Filter