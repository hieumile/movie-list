import MovieCard from "../components/MovieCard"
import { useState } from "react";


function Home(){ {/*Contains the entire user interface for the home page*/}
    const [searchQuery, setSearchQuery] = useState(""); {/*searchQuery defines the state and setSearchQuery is the function to update the state. Every time the state is updated, the component is going to render itself*/}
    const movies = [
        {id: 1, title: "Lemok's story", release_date: "2006"},
        {id: 2, title: "Plink's story", release_date: "2005"},
        {id: 3, title: "Nlink's story", release_date: "2005"},
        {id: 4, title: "Two's story", release_date: "2005"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("----")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search_input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit" className="search_button"></button>
        </form>
        <div className="movie-grid">
            {movies.map(
                (movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home