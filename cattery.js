let cattery = document.getElementById("cattery");
let editable = document.getElementById("kendrick");
const button = document.getElementById("catteryshuffle");
const catimages = [
    "FoIJ8Y1WQAAVa2I.jpeg",
    "FoIJ8YyX0AE7Frf.jpeg",
    "FoIJ8YyX0AIN8Z4.jpeg",
    "FoIJ8YzXkAAeVI-.jpeg",
    "FoIJy8-WIAAj_vf.jpeg",
    "FoIJy9AXkAAH5FJ.jpeg",
    "FoIJy9BXEAEONCy.jpeg",
    "FoIJy9CXEAIqSzC.jpeg",
    "FoIKaPMWYAAFfek.jpeg",
    "FoIKaPMXkAAHWT-.jpeg",
    "FoIKaPNXwAEDVHk.jpeg",
    "FoIKaPSXgAIWJ39.jpeg",
]

let usedimages = []

function shuffle() {
	function getrandom(chance) {
		return Math.floor(Math.random() * chance);
	}
    let list = catimages.length
	imgassort = getrandom(list);
    cattery.src = catimages[imgassort];
    if (tionaus === 0) {
        editable.src = "KENDRICK MODEKENDRICK MODEKENDRICK MODEKENDRICK MODEKENDRICK MODEKENDRICK MODEKENDRICK MODEKENDRICK MODE";
        cattery.src = "701p7t600zbb1.jpg";
    }
}

button.addEventListener("click", shuffle);