import { elements } from "../base";

export const backToTop=()=>{
    window.scroll({top:0,behavior:'smooth'});
}

export const closeDetails=()=>{
    elements.movieDetailsContainer.classList.remove('d-block');
    elements.movieDetailsContainer.classList.add('d-none');
    window.location.href="#";
    
}

export const displayMovie=movie=>{

    var genres="";
    movie.genres.forEach(genre => {
        genres+=`<span class="badge text-bg-secondary" style="margin-left:2px"">${genre.name}</span>`
    });

    var html=`<div class="row mb-1 ml-1">`
    html+=`
        <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3 img-fluid" alt="${movie.title}">
        </div>
        <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="badge text-bg-primary">${movie.vote_average}</small></p>
                <hr>
                <div>
                    ${genres}
                </div>
                
            </div>
        </div>
    `;
    html+='</div>';

    
    elements.movieDetailsContainer.classList.add("d-block");
    elements.movieDetailsContainer.classList.remove("d-none");
    elements.movieDetails.innerHTML=html;
}