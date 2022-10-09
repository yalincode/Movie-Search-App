// api: 
// url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&page=1&include_adult=false

// model-view-controller

import Search from './models/Search';
import {elements,renderLoader,clearLoader} from './base';
import * as searchView from './views/searcView';
import * as movieView from './views/movieView';
import { Movie } from './models/Movie';

//Search Controller
const state={};
const searchController= async ()=>{
    const keyword=elements.searchInput.value;
    if (keyword) {
        
        state.search=new Search(keyword);

        searchView.clearInputs();
        searchView.clearResults();

        renderLoader(elements.movieListContainer);

        await state.search.getResults();
        searchView.displayResults(keyword,state.search.data);

        setTimeout(()=>{
            clearLoader(elements.movieListContainer);
        },1000);
    }else{
        alert('anahtar kelime girmelisiniz')
    }
}

elements.searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("form-submitted");
    searchController();
});


//Movie Controller

const movieController=async ()=>{
    const id=window.location.hash.replace('#','');
    if (id) {
        state.movie=new Movie(id);

        renderLoader(elements.movieDetailsContainer);

        await state.movie.GetMovie();
        movieView.backToTop();
        movieView.displayMovie(state.movie.data);
        
        setTimeout(()=>{
            clearLoader(elements.movieDetailsContainer);
        },1000);
    }
}
window.addEventListener('hashchange', movieController);

elements.movieDetailsClose.addEventListener('click',movieView.closeDetails)

