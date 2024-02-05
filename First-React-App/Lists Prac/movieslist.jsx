import { useState } from 'react';
import Movie from './Movie.jsx'
import AddMovieForm from '../forms Prac/addMovieForm.jsx';

const movies = [
    {
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
    },
    {
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
    },
    {
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
    },
    ];

function MoviesList() {

    const [currentMovies, setCurrentMovies] = useState(movies);

    const movieItems = currentMovies.map(movie => (
        <Movie key={movie.id}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis} />
    ))

    const handleReverseMovies = () => {
        // first clone the original, so we don't mutate it
        let newMovies = [...currentMovies];
        newMovies.reverse(); // 2. modify the clone
        setCurrentMovies(newMovies); // 3. set updated clone in state
    }

    const handleUpdateMovies = () => {
        // currentMovies[0].title = 'New Title';// no good

        // right way
        let newMovies = currentMovies.map((movie, i) => i === 0 ? { ...movie, title: 'New Title' } : movie);
        setCurrentMovies(newMovies);
    }
    const handleAddMovie = (newMovie) => {
        newMovie.id = currentMovies.length + 1; 
        setCurrentMovies([...currentMovies, newMovie])}

    return (
        <>
            <div className="MoviesList">
                <ul>
                    {movieItems}
                </ul>
                <button onClick={handleReverseMovies}>Reverse List</button>
                <button onClick={handleUpdateMovies}>Update</button>
                <AddMovieForm onAddMovie={handleAddMovie}/>
            

                
            </div>
            

        </>
    )
}



export default MoviesList