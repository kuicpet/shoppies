import { API_KEY, API_URL } from './config';

const apiSettings = {
    // Search movies
    searchMovies: async ( query ) => {
        const endPoint = `${API_URL}?s=${query}&${API_KEY}`; // http://www.omdbapi.com/?s=querys&apiKey=API_KEY
        return await (await fetch(endPoint)).json();
    }
};

export default apiSettings;