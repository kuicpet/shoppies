import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        searchMovies(query)
    },[query]);
    
    
    if(error) return <div>Something went wrong!</div>

    return (
        <React.Fragment>
            <SearchBar query={query} setQuery={setQuery} />
            <Grid>
                {movies.map((item) => (
                    <Content>
                       <Image src={item.Poster} />
                    </Content>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Home;