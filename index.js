import { IMG_URL_MEDIUM, IMG_URL_SMALL } from './config.js';
import { searchMovie, getSimilarMovies } from './search.js';

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
	const textInput = document.getElementById('targetMovie').value;
    const movie = textInput.split(' ').join('+');
    const res = await searchMovie(movie);
    Array.isArray(res.results) && res.results.length !== 0
        ? displaySearchedMovie(res.results[0])
        : handleEmptyResults(textInput);
});

const handleEmptyResults = textInput => {
    clearDiv(3);
    const searched = document.getElementById('searched');
    let noRes = document.createElement('h4');
    noRes.appendChild(document.createTextNode(`No results for ${textInput}`))
    searched.appendChild(noRes);
}

const displaySearchedMovie = async movie => {
    clearDiv(1);
    const searched = document.getElementById('searched');
    let div = document.createElement('div');
    const movieId = movie.id && movie.id;
    const title = movie.original_title && movie.original_title;
    const releaseDate = movie.release_date && movie.release_date;
    const overView = movie.overview && movie.overview;
    const posterPath = movie.poster_path && movie.poster_path;
    let titleElm = document.createElement('h4');
    titleElm.appendChild(document.createTextNode(title));
    let releaseDateElm = document.createElement('p');
    releaseDateElm.appendChild(document.createTextNode(`Release date: ${releaseDate}`));
    let overViewElm = document.createElement('p');
    overViewElm.appendChild(document.createTextNode(overView));
    let posterElm = document.createElement('img');
    posterElm.src = `${IMG_URL_MEDIUM}${posterPath}`;
    div.appendChild(posterElm);
    div.appendChild(titleElm);
    div.appendChild(releaseDateElm);
    div.appendChild(overViewElm);
    searched.appendChild(div);
    const similarMovies = await getSimilarMovies(movieId);
    appendReccomendations(title, similarMovies.results.slice(1));
}

const appendReccomendations = (searchedMovie, movies) => {
    clearDiv(2);
    const divs = movies.map(m => {
        let div = document.createElement('div');
        const title = m.original_title && m.original_title;
        const posterPath = m.poster_path && m.poster_path;
        let titleElm = document.createElement('h4');
        titleElm.appendChild(document.createTextNode(title));
        let posterElm = document.createElement('img');
        posterElm.src = `${IMG_URL_SMALL}${posterPath}`;
        let btn = document.createElement('button');
        btn.innerText = 'Get recommendation';
        btn.onclick = () => getNewRecommedations(m);
        div.appendChild(posterElm);
        div.appendChild(titleElm);
        div.appendChild(btn);
        return div;
    });
    let content = document.getElementById('content');
    const header = document.createElement('h3');
    header.appendChild(document.createTextNode(`Movie recommendation based on ${searchedMovie}`));
    content.appendChild(header);
    divs.forEach(div => {
        content.appendChild(div);
    });
}

const getNewRecommedations = async movie => {
    clearDiv(3);
    displaySearchedMovie(movie);
}

const clearDiv = (x = 2) => {
    switch(x) {
        case 1:
            document.getElementById('searched').innerHTML = '';
            break;
        case 2:
            document.getElementById('content').innerHTML = '';
            break;
        case 3:
            document.getElementById('searched').innerHTML = '';
            document.getElementById('content').innerHTML = '';
            break;
    }
}
