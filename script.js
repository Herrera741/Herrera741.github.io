const MOVIES = [
    {chronNum: 0, year: "2011", title: "Captain America: The First Avenger", path: "/images/cap-america-bg.jpg"},
    {chronNum: 1, year: "2008", title: "Iron Man", path: "/images/iron-man-bg.jpg"},
    {chronNum: 2, year: "2013", title: "Iron Man 3", path: "/images/iron-man-3-bg.jpg"},
    {chronNum: 3, year: "2016", title: "Doctor Strange", path: "/images/doc-strange-bg.jpg"},
    {chronNum: 4, year: "2017", title: "Spider-Man: Homecoming", path: "/images/spiderman-bg-v2.jpg"},
    {chronNum: 5, year: "2018", title: "Ant-Man and The Wasp", path: "/images/antman-wasp-bg.jpg"},
    {chronNum: 6, year: "2019", title: "Avengers: Endgame", path: "/images/avengers-endgame-bg.jpg"}
]

// movie object constructor
function Movie(chronNum, year, title, path) {
    this.chronNum = chronNum;
    this.year = year;
    this.title = title;
    this.path = path;
}

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

    // attack children nodes
    infoElem.appendChild(yearElem);
    infoElem.appendChild(titleElem);
    itemElem.appendChild(imageElem);
    itemElem.appendChild(infoElem);

    return itemElem;
}

function clearInnerContent(element) {
    element.innerHTML = "";
    return element;
}

function insertionSort() {
    
}

function selectionSort() {
    sortedList = [...MOVIES];
    for (let i = 0; i < sortedList.length; i++) {
        let min = i;
        for (let j = i + 1; j < sortedList.length; j++) {
            if (sortedList[min] > sortedList[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = sortedList[i];
            sortedList[i] = sortedList[min];
            sortedList[min] = temp;
        }
    }
    return sortedList;
}

// get sequential order of movies
function seqOrder() {
    let timelineContainer = document.querySelector(".timeline-container");
    clearInnerContent(timelineContainer);
    
    // sort MOVIES list in sequential order
    let sequenceList = selectionSort();

    for (i = 0; i < sequenceList.length; i++) {
        // create item element to store movie values
        let item = createItemElements();

        // update path value
        let path = item.querySelector(".tl-bg");
        let pathString = "background-image: url(" + sequenceList[i]["path"] + ");"; 
        path.setAttribute("style", pathString);

        // update year value
        let year = item.querySelector(".movie-year");
        year.innerHTML = sequenceList[i]["year"];

        // update title value
        let title = item.querySelector(".movie-title");
        title.innerHTML = sequenceList[i]["title"];

        timelineContainer.appendChild(item);
    }
}

// get chronological order of movies
function chronOrder() {
    let timelineContainer = document.querySelector(".timeline-container");
    clearInnerContent(timelineContainer);
    for (i = 0; i < MOVIES.length; i++) {
        // create item element to store movie values
        let item = createItemElements();

        // update path value
        let path = item.querySelector(".tl-bg");
        let pathString = "background-image: url(" + MOVIES[i]["path"] + ");"; 
        path.setAttribute("style", pathString);

        // update year value
        let year = item.querySelector(".movie-year");
        year.innerHTML = MOVIES[i]["year"];

        // update title value
        let title = item.querySelector(".movie-title");
        title.innerHTML = MOVIES[i]["title"];

        timelineContainer.appendChild(item);
    }
}

// get alphabetical order of movies
function alphaOrder() {
    let timelineContainer = document.querySelector(".timeline-container");
    clearInnerContent(timelineContainer);
    for (i = 0; i < MOVIES.length; i++) {
        // create item element to store movie values
        let item = createItemElements();

        // update path value
        let path = item.querySelector(".tl-bg");
        let pathString = "background-image: url(" + MOVIES[i]["path"] + ");"; 
        path.setAttribute("style", pathString);

        // update year value
        let year = item.querySelector(".movie-year");
        year.innerHTML = MOVIES[i]["year"];

        // update title value
        let title = item.querySelector(".movie-title");
        title.innerHTML = MOVIES[i]["title"];

        timelineContainer.appendChild(item);
    }
}

// button access variables
const SEQ_BTN = document.querySelector("#seq-btn");
const CHRON_BTN = document.querySelector("#chron-btn");
const ALPHA_BTN = document.querySelector("#alpha-btn");

SEQ_BTN.addEventListener("click", seqOrder);
CHRON_BTN.addEventListener("click", chronOrder);
ALPHA_BTN.addEventListener("click", alphaOrder);
