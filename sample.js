const movies = document.getElementById("Movies");
const searchBar = document.getElementById("searchBar");
const finalResults = document.getElementById("finalResults");
let movieCharacters = [];

let baseURL = "https://api.themoviedb.org/3/";
let configData = null;
let baseImageURL = null;



let getConfig = function(){
    let url = "".concat(baseURL, "configuration?api_key=0856ec3389bcfb69993ffb5e032fc056")
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((data) =>{
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        //runSearch(searchString);
    })
    .catch(function(err){
        alert(err);
    });
}


$("#Start").click(function () {

    var searchstring = $("#searchBar").val()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=0856ec3389bcfb69993ffb5e032fc056&language=en-US&query=" +searchstring)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data.results[0].title);
        // console.log(data.results[0].overview);
        // console.log(data.results[0].poster_path);
        for(let i=0; i<1000; i++){
        finalResults.innerHTML+=
        "<ul>\
        <li>\
        <h2><a href = '#'>" + data.results[i].title + "</a></h2>\
        <img  src = 'https://image.tmdb.org/t/p/w300" + data.results[i].poster_path + "'/>\
        <h3>Overview</h3>\
        <p>" + data.results[i].overview + "</p>\
        <h3>Release Date</h3> <p>" + data.results[i].release_date + "</p> \
        <h3>Popularity</h3> <p>" + data.results[i].popularity + "</p>\
        <h3>Vote Average</h3> <p>" + data.results[i].vote_average + "</p>  <h3>Vote Count</h3> <p>" + data.results[i].vote_count + "</p> \
        </li>\
        </ul>"     
        }
    });
});
