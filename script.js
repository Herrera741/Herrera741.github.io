/*==========ON PAGE LOAD==========*/
window.onload = function() {
    getChronOrder();
};

/*==========CONSTANTS==========*/
// movies in chronological order by default 
const MOVIES = [
    {chronNum: 0, year: "2011", title: "Captain America: The First Avenger", path: "/images/cap-america-bg.jpg"},
    {chronNum: 1, year: "2019", title: "Captain Marvel", path: "/images/cap-marvel-bg.jpg"},
    {chronNum: 2, year: "2008", title: "Iron Man", path: "/images/iron-man-bg.jpg"},
    {chronNum: 3, year: "2010", title: "Iron Man 2", path: "/images/iron-man-2-bg-v2.jpg"},
    {chronNum: 4, year: "2008", title: "Incredible Hulk", path: "/images/incredible-hulk-bg-v2.jpg"},
    {chronNum: 5, year: "2011", title: "Thor", path: "/images/thor-bg.jpg"},
    {chronNum: 6, year: "2012", title: "Avengers", path: "/images/avengers-bg.jpg"},
    {chronNum: 7, year: "2013", title: "Thor: The Dark World", path: "/images/thor-dw-bg.jpg"},
    {chronNum: 8, year: "2013", title: "Iron Man 3", path: "/images/iron-man-3-bg.jpg"},
    {chronNum: 9, year: "2014", title: "Captain America: The Winter Soldier", path: "/images/cap-america-ws-bg.jpg"},
    {chronNum: 10, year: "2014", title: "Guardians of the Galaxy", path: "/images/gotg-bg.png"},
    {chronNum: 11, year: "2017", title: "Guardians of the Galaxy Vol.2", path: "/images/gotg-vol2-bg.jpg"},
    {chronNum: 12, year: "2015", title: "Avengers: Age of Ultron", path: "/images/avengers-aou-bg.jpg"},
    {chronNum: 13, year: "2015", title: "Ant-man", path: "/images/antman-bg.jpg"},
    {chronNum: 14, year: "2016", title: "Captain America: Civil War", path: "/images/cap-america-cw-bg.jpg"},
    {chronNum: 15, year: "2017", title: "Spider-Man: Homecoming", path: "/images/spiderman-bg-v2.jpg"},
    {chronNum: 16, year: "2016", title: "Doctor Strange", path: "/images/doc-strange-bg.jpg"},
    {chronNum: 17, year: "2018", title: "Black Panther", path: "/images/black-panther-bg.jpg"},
    {chronNum: 18, year: "2017", title: "Thor: Ragnarok", path: "/images/thor-ragnarok-bg.jpg"},
    {chronNum: 19, year: "2018", title: "Ant-Man and The Wasp", path: "/images/antman-wasp-bg.jpg"},
    {chronNum: 20, year: "2019", title: "Avengers: Infinity War", path: "/images/avengers-inf-war-bg.jpg"},
    {chronNum: 21, year: "2019", title: "Avengers: Endgame", path: "/images/avengers-endgame-bg.jpg"},
    {chronNum: 22, year: "2019", title: "Spiderman: Far From Home", path: "/images/spiderman-ffh-bg-v2.jpg"}
]

const BATCH = 5; // number of movies per screen
const TIMELINE_CONTAINER = document.querySelector(".timeline-container"); // timeline container holding movie items

/*==========GLOBALS==========*/
let batchIndex = 0; // index to keep track of movies batch current viewing
let movieBatches = []; // array to hold movie batches

/*==========CONSTRUCTORS==========*/
// movie object constructor
function Movie(chronNum, year, title, path) {
    this.chronNum = chronNum;
    this.year = year;
    this.title = title;
    this.path = path;
}

/*==========MOVIE FUNCTIONS==========*/
// return array of batches of movies split up by batch count
function getMovieBatches(movies) {
    result = []
    for (var index = 0; index < movies.length; index += BATCH) {
        result.push(movies.slice(index, BATCH + index));
    }
    return result;
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
function insertionSort(movies, value) {
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

function resetIndex() {
    batchIndex = 0;
}

function resetMovieBatches() {
    movieBatches.length = 0;
}

function updateMovieValues(movies) {
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

        TIMELINE_CONTAINER.appendChild(item);
    }
}

// get sequential order of movies
function getYearOrder() {
    clearInnerContent(TIMELINE_CONTAINER);
    resetIndex();
    resetMovieBatches();
    hidePrevButton();  
    let moviesByYear = insertionSort([...MOVIES], "year");
    movieBatches = getMovieBatches(moviesByYear);
    updateMovieValues(movieBatches[batchIndex]);
}

// get chronological order of movies
function getChronOrder() {
    clearInnerContent(TIMELINE_CONTAINER);
    resetIndex();
    resetMovieBatches();
    hidePrevButton();
    movieBatches = getMovieBatches(MOVIES);
    updateMovieValues(movieBatches[batchIndex]);
}

// get alphabetical order of movies
function getTitleOrder() {
    clearInnerContent(TIMELINE_CONTAINER);
    resetIndex();
    resetMovieBatches();
    hidePrevButton();
    let moviesByTitle = insertionSort([...MOVIES], "title");
    moviesByTitle.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1:-1);
    movieBatches = getMovieBatches(moviesByTitle);
    updateMovieValues(movieBatches[batchIndex]);
}

/*==========SLIDESHOW FUNCTIONS==========*/
function prevSlide() {
    batchIndex = batchIndex - 1;
    clearInnerContent(TIMELINE_CONTAINER);
    updateMovieValues(movieBatches[batchIndex]);
    showNextButton();
    if (batchIndex == 0) {
        hidePrevButton();
    } else {
        showPrevButton();
    }
    console.log("index is " + batchIndex.toString());
}

function nextSlide() {
    batchIndex = batchIndex + 1;
    clearInnerContent(TIMELINE_CONTAINER);
    updateMovieValues(movieBatches[batchIndex]);
    showPrevButton();
    if (batchIndex == (movieBatches.length-1)) {
        hideNextButton();
    } else {
        showNextButton();
    }
    console.log("index is " + batchIndex.toString());
}

function hidePrevButton() {
    let prevBtn = document.querySelector("#prev-btn");
    prevBtn.style.visibility = "hidden";
}

function showPrevButton() {
    let prevBtn = document.querySelector("#prev-btn");
    prevBtn.style.visibility = "visible";
}

function hideNextButton() {
    let nextBtn = document.querySelector("#next-btn");
    nextBtn.style.visibility = "hidden";
}

function showNextButton() {
    let nextBtn = document.querySelector("#next-btn");
    nextBtn.style.visibility = "visible";
}