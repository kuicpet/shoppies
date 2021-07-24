import { useEffect, useState } from "react";

import API from './API';

const InitialState = {
    results: [],
}

export const useMovieFetch = () => {

    const [query, setQuery] = useState("");
    const [state, setState] = useState(InitialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   // const [loadMore, setLoadMore] = useState(false);


    const getMovies = async ( query = "" ) => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.searchMovies(query);
            //console.log("movies" ,movies);

            setState(prev => ({
                ...movies,
                
            }))

        } catch (error) {
            setError(true)
        }

        setLoading(false);
    };

    console.log(state)

    useEffect(() => {
        setState(InitialState);
        getMovies(query)
    }, [query]);

    return { state, loading, error, setQuery, query  }
};