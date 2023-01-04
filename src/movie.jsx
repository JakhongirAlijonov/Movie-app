import {motion} from 'framer-motion'

function Movie({movie}){
    return(
        <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0} } transition={{duration:0.45}}>
            <img src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path} alt=""/>
            <div className='movie-details'>
            <h2>{movie.title}</h2>
                <p className='movie-overwiev' ><span className='highlight'>Overview:</span> {movie.overview} </p>
                <p>
                    <span className='highlight'>Released:</span> {movie.release_date}
                </p>
                <p className='movie-rating'>


                    <span className='highlight'>Rating:</span> {movie.vote_average}
                </p>
            </div>
        </motion.div>
    )
}

export default Movie