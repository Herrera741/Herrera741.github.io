window.addEventListener("DOMContentLoaded", getYearOrder);

// current list of movies in chronological order by default 
let MOVIES = [
    {chronNum: 0, year: "2011", title: "Captain America: The First Avenger", path: "/images/cap-america-bg.jpg"},
    {chronNum: 1, year: "2008", title: "Iron Man", path: "/images/iron-man-bg.jpg"},
    {chronNum: 2, year: "2011", title: "Thor", path: "/images/thor-bg.jpg"},
    // {chronNum: 3, year: "2013", title: "Iron Man 3", path: "/images/iron-man-3-bg.jpg"},
    // {chronNum: 4, year: "2014", title: "Guardians of the Galaxy", path: "/images/gotg-bg.jpg"},
    {chronNum: 5, year: "2016", title: "Doctor Strange", path: "/images/doc-strange-bg.jpg"},
    {chronNum: 6, year: "2017", title: "Spider-Man: Homecoming", path: "/images/spiderman-bg-v3.jpg"},
    {chronNum: 7, year: "2018", title: "Black Panther", path: "/images/black-panther-bg.jpg"},
    {chronNum: 8, year: "2018", title: "Ant-Man and The Wasp", path: "/images/antman-wasp-bg.jpg"},
    {chronNum: 9, year: "2019", title: "Avengers: Endgame", path: "/images/avengers-endgame-bg.jpg"}
]

// movie object constructor
function Movie(chronNum, year, title, path) {
    this.chronNum = chronNum;
    this.year = year;
    this.title = title;
    this.path = path;
}

// create all elements under parent container
function createItemElements() {
    // create elements
    let itemElem = document.createElement("section");
    let imageElem = document.createElement("div");
    let infoElem = document.createElement("div");
    let yearElem = document.createElement("p");
    let titleElem = document.createElement("p");

    // assign class names to elements
    itemElem.classList.add("tl-item");
    imageElem.classList.add("tl-bg");
    infoElem.classList.add("movie-info");
    yearElem.classList.add("movie-year");
    titleElem.classList.add("movie-title");

    // attach children nodes
    infoElem.appendChild(yearElem);
    infoElem.appendChild(titleElem);
    itemElem.appendChild(imageElem);
    itemElem.appendChild(infoElem);

    return itemElem;
}

// clear inner content in parent container
function clearInnerContent(element) {
    element.innerHTML = "";
}

// sort movies by year
let insertionSort = (movies, value) => {
    for (let i = 1; i < movies.length; i++) {
        let key = movies[i];
        let j = i - 1;
        while (j >= 0 && movies[j][value] > key[value]) {
            movies[j+1] = movies[j];
            j--;
        }
        movies[j+1] = key;
    }
    return movies;
}

// timeline container holding movie items
const TIMELINE_CONTAINER = document.querySelector(".timeline-container");

let updateMovieValues = (movies) => {
    for (i = 0; i < movies.length; i++) {
        // create item element to store movie values
        let item = createItemElements();

        // update path value
        let path = item.querySelector(".tl-bg");
        let pathString = "background-image: url(" + movies[i]["path"] + ");"; 
        path.setAttribute("style", pathString);

        // update year value
        let year = item.querySelector(".movie-year");
        year.innerHTML = movies[i]["year"];

        // update title value
        let title = item.querySelector(".movie-title");
        // title.innerHTML = movies[i]["title"];

        TIMELINE_CONTAINER.appendChild(item);
    }
}

// get sequential order of movies
function getYearOrder() {
    clearInnerContent(TIMELINE_CONTAINER);
    // sort movies by year   
    let movies = insertionSort([...MOVIES], "year");
    // update container items with sorted movie values
    updateMovieValues(movies);
}

// get chronological order of movies
function getChronOrder() {
    clearInnerContent(TIMELINE_CONTAINER);
    updateMovieValues(MOVIES);
}

// get alphabetical order of movies
function getTitleOrder() {
    clearInnerContent(TIMELINE_CONTAINER);

    // sort MOVIES list in sequential order   
    let movies = insertionSort([...MOVIES], "title");
    movies.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1:-1);
    updateMovieValues(movies);
}

// button access variables
const YEAR_BTN = document.querySelector("#year-btn");
const CHRON_BTN = document.querySelector("#chron-btn");
const TITLE_BTN = document.querySelector("#title-btn");

YEAR_BTN.addEventListener("click", getYearOrder);
CHRON_BTN.addEventListener("click", getChronOrder);
TITLE_BTN.addEventListener("click", getTitleOrder);