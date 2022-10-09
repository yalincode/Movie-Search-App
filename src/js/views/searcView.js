import {elements} from '../base';

export const clearInputs=()=>{
    elements.searchInput.value="";
};

export const clearResults=()=>{
    elements.movieList.innerHTML="";
}

export const displayResults=(keyword,data)=>{
    data.results.forEach(movie => {
    const html=`
        <li class="media mb-3">
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3" alt="${movie.title}">
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5">
                        <span class="badge text-bg-primary">${movie.vote_average}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </div>
        </li>`;

        
        elements.movieListContainer.classList.remove("d-none");
        elements.movieListContainer.classList.add("d-block");
        elements.movieList.insertAdjacentHTML('beforeend',html);
    });
    elements.movieListHeader.innerHTML=`<p class="text-success"><bold>${keyword} arasında ${data.total_results} sonuç bulundu.</bold></p>`
}