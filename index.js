import { searchMovie, getSimilarMovies } from './search.js';

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
	const textInput = document.getElementById('targetMovie').value;
    const movie = textInput.split(' ').join('+');
    const res = await searchMovie(movie);
    Array.isArray(res.results) && res.results.length !== 0
        ? appendData(res.results)
        : handleEmptyResults(textInput);
});

const handleEmptyResults = textInput => {
    clearBase();
    const base = document.getElementById("base");
    let noRes = document.createElement("h4");
    noRes.appendChild(document.createTextNode(`No results for ${textInput}`))
    base.appendChild(noRes);
}

const appendData = results => {
    clearBase();
    const divs = results.map(res => {
        let div = document.createElement('div');
        const movieId = res.id && res.id;
        const title = res.original_title && res.original_title;
        const releaseDate = res.release_date && res.release_date;
        const overView = res.overview && res.overview;
        const posterPath = res.poster_path && res.poster_path;
        let titleElm = document.createElement("h4");
        titleElm.appendChild(document.createTextNode(title));
        let releaseDateElm = document.createElement("p");
        releaseDateElm.appendChild(document.createTextNode(releaseDate));
        let overViewElm = document.createElement("p");
        overViewElm.appendChild(document.createTextNode(overView));
        let posterElm = document.createElement("img")
        posterElm.src = `https://image.tmdb.org/t/p/w185${posterPath}`;
        let btn = document.createElement("button");
        btn.innerText = 'Search similar movies';
        btn.onclick = () => appendSimilarMovies(movieId);
        div.appendChild(posterElm)
        div.appendChild(titleElm)
        div.appendChild(releaseDateElm)
        div.appendChild(overViewElm)
        div.appendChild(btn)
        return div
    });
    let base = document.getElementById('base');
    divs.forEach(div => {
        base.appendChild(div)
    });
}

const appendSimilarMovies = async movieId => {
    clearBase();
    const movies = await getSimilarMovies(movieId);
    console.log(movies)
    movies.results && appendData(movies.results)
}

const clearBase = () => {
    const base = document.getElementById("base");
    base.innerHTML = "";
}
