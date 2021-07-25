import React, { useEffect, useState } from 'react';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/react-toastify.esm';
import { Container } from './components/AddToFavorites/Favourites.styles';

// components
import Grid from './components/Grid';
import { Content, Image } from './components/Grid/Grid.styles';
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner';

// API
import { API_KEY, API_URL } from './config';

// Icons


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [message, setMessage] = useState(false);

    //toast.configure();

    const searchMovies = async (query) => {
        try {
            setError(false);
            setLoading(true);

            const url = `${API_URL}?s=${query}&apiKey=${API_KEY}`;
            const res = await fetch(url);
            const movies = await res.json();

            // console.log(movies.Search);

            if(movies.Search){
                setTimeout(() => {
                    setMovies(movies.Search);
                }, 500);
            };

        } catch (error) {
            setError(error)
        }
    };

    // retreive from localstorage
    useEffect(() => {
        const movieFavorites = JSON.parse(
            localStorage.getItem("favorites")
        );
        setFavorites(movieFavorites);
    }, [])

    // save to localstorage
    const saveToLocalStorage = (items) => {
        localStorage.setItem("favorites", JSON.stringify(items))
    }

    // add to favorites
    const handleAddFavorites = (movie) => {
        const favoritesList = [...favorites, movie];
        //console.log("added");
        //console.log(favoritesList);
       if(favoritesList.length > 5){
           //toast.warning("Maximum of 5 movies allowed", {position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
           setMessage(message);
           return;
       }
        setFavorites(favoritesList);
        saveToLocalStorage(favoritesList);
    }

    // remove from favorites
    const handleRemoveFavorites = (movie) => {
        const favoritesList = favorites.filter(
            (favorite) => favorite.imdbID !== movie.imdbID
        );
        //console.log("removed");
        //console.log(favoritesList);
        setFavorites(favoritesList);
    }

    // search saved to state
    useEffect(() => {
        searchMovies(query)
    },[query]);
    
    
    if(error) return (
        <Container>
            Something went wrong
        </Container>
    )
    {loading  && <Spinner/>}

    return (
        <React.Fragment>
            <SearchBar query={query} setQuery={setQuery} />
            {message && (<Container>Maximum of 5 movies allowed</Container>)}
            <Grid heading ="Movies" >
                {movies.map((item) => (
                    <Content key={item.imdbID}>
                       <Image 
                        src={item.Poster} 
                        onClick={() => handleAddFavorites(item)}
                        alt=""
                        />
                    </Content>
                ))}
            </Grid>
           <Grid heading ="Favorites">
               {favorites.map((item) => (
                   <Content>
                       <Image 
                        src={item.Poster} 
                        onClick={() => handleRemoveFavorites(item)}
                        alt="" />
                   </Content>
               ))}
           </Grid>
          
        </React.Fragment>
    )
}

export default Home;