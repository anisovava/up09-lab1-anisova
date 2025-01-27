import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../../pages/MovieList';
import React, {useEffect, useState} from 'react';
import './Home.css';
import MovieListHeading from '../MovieListHeading';
import SearchBox from '../../Search/SearchBox';
import AddFavourites from '../../Favorite/AddFavourites';
import RemoveFavourites from '../../Favorite/RemoveFavourites';

 const Home = () => {
 const [movies, setMovies] = useState([]);
 const [searchValue, setSearchValue] = useState('');
 const [favourites, setFavourites] = useState([]);

 const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=505480d7`

    const response = await fetch(url);
    const responseJson = await response.json();
    
    if (responseJson.Search) {
        setMovies(responseJson.Search);
    }
 };

useEffect(() => {
    getMovieRequest(searchValue);
}, [searchValue]);

useEffect(() => {
    const movieFavourites = JSON.parse(
        localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
        setFavourites(movieFavourites);
    }
}, []);

const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
};

const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
};

const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
        (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
};

return (
    <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Movies' />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
            <MovieList
                movies={movies}
                handleFavouritesClick={addFavouriteMovie}
                favouriteComponent={AddFavourites}
            />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Favourites' />
        </div>
        <div className='row'>
            <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
            />
        </div>
    </div>
);
};

 export default Home;