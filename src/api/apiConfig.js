const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '85bc37b3f1d569801fa2c708ee3476f5',
    orginalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}


export default apiConfig;