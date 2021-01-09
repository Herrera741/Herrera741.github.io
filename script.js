const MOVIES = [
    {chronNum: 0, year: "2011", title: "Captain America: The First Avenger", path: "/images/cap-america-bg.jpg"},
    {chronNum: 1, year: "2008", title: "Iron Man", path: "/images/iron-man-bg.jpg"},
    {chronNum: 2, year: "2013", title: "Iron Man 3", path: "/images/iron-man-3-bg.jpg"},
    {chronNum: 3, year: "2016", title: "Doctor Strange", path: "/images/doc-strange-bg.jpg"},
    {chronNum: 4, year: "2017", title: "Spider-Man: Homecoming", path: "/images/spiderman-bg-v2.jpg"},
    {chronNum: 5, year: "2018", title: "Ant-Man and The Wasp", path: "/images/antman-wasp-bg.jpg"},
    {chronNum: 6, year: "2019", title: "Avengers: Endgame", path: "/images/avengers-endgame-bg.jpg"}
]

// timeline container access
const timelineContainer = document.querySelector(".timeline-container")

// movie object constructor
function Movie(chronNum, year, title, path) {
    this.chronNum = chronNum;
    this.year = year;
    this.title = title;
    this.path = path;
}

// // get sequential order of movies
// function seqOrder() {

// }

// get chronological order of movies
function chronOrder() {
}

// button access variables
const SEQ_BTN = document.querySelector("#seq-btn");
const CHRON_BTN = document.querySelector("#chron-btn");
const ALPHA_BTN = document.querySelector("#alpha-btn");

SEQ_BTN.addEventListener("click", seqOrder);
// CHRON_BTN.addEventListener("click", chronOrder);
// ALPHA_BTN.addEventListener("click", alphaOrder);
