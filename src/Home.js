import React from 'react' 
// components
import Grid from './components/Grid';
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner';

import { useMovieFetch } from './useMovieFetch';




const Home = () => {
    const { state, loading, error, setQuery, query } = useMovieFetch()
    console.log("state", state);

    if(error) return <div>Something went wrong!</div>

    return (
        <React.Fragment>
            <SearchBar setQuery={setQuery} />
            <Grid>
              
            </Grid>
            {loading && <Spinner/>}
        </React.Fragment>
    )
}

export default Home;