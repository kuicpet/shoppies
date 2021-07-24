import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import { API_KEY, API_URL } from './config';

const Home = () => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);

    const getMovies = async (query) => {
        try {
            setError(false);
            
            const url = `${API_URL}?s=${query}&apikey=${API_KEY}`;
            const movies = await (await fetch(url)).json();
            
            console.log(movies)
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        getMovies(query)
    },[query])

    return (
        <React.Fragment>
            <SearchBar query={query} setQuery={setQuery} />
        </React.Fragment>
    )
}

export default Home;