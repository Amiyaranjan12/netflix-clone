const API_KEY = "99efae78fa856ec1d9e4a43613de2b16";

const requests={

    getNetflixOriginal:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTrading:`trending/all/week?api_key=${API_KEY}&language=en-us`,
    getTopRaated:`movie/top_rated?api_key=${API_KEY}&language=en-us`,
    getActionMovie:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovie:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovie:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovie:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentryMovie:`discover/movie?api_key=${API_KEY}&with_genres=99`



}

export default requests;