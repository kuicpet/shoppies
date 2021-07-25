import React, { useEffect, useState } from 'react';
import { Container } from './components/AddToFavorites/Favourites.styles';

// components
import Grid from './components/Grid';
import { Content, Image } from './components/Grid/Grid.styles';
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner';

// API
import { API_KEY, API_URL } from './config';



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const searchMovies = async (query) => {
        try {
            setError(false);
            setLoading(true);

            const url = `${API_URL}?s=${query}&apiKey=${API_KEY}`;
            const res = await fetch(url);
            const movies = await res.json();

            console.log(movies.Search);

            if(movies.Search){
                setMovies(movies.Search)
            };

        } catch (error) {
            setError(error)
        }
    };

    const handleAddFavorites = (movie) => {
        const favoritesList = [...favorites, movie];
        console.log("added");
        console.log(favoritesList);
        setFavorites(favoritesList);
    }

    useEffect(() => {
        searchMovies(query)
    },[query]);
    
    
    if(error) return <Container>Something went wrong!</Container>

    return (
        <React.Fragment>
            <SearchBar query={query} setQuery={setQuery} />
            <Grid heading ="Movies" >
                {movies.map((item) => (
                    <Content key={item.imdbID}>
                       <Image src={item.Poster} onClick={() => handleAddFavorites(item)}/>
                    </Content>
                ))}
            </Grid>
           <Grid heading ="Favorites">
               {favorites.map((item) => (
                   <Content>
                       <Image src={item.Poster} alt="" />
                   </Content>
               ))}
           </Grid>
        </React.Fragment>
    )
}

export default Home;