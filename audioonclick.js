let meow = new Audio("cat-made-with-Voicemod.mp3");
let header = document.getElementById("kendrickalarm");
const catteryshuffle = document.getElementById("catteryshuffle");
const songs = [
	"musics/Kendrick Lamar - euphoria.mp3",
	"musics/Kendrick Lamar - heart pt. 6.mp3",
	"musics/Kendrick Lamar - King Kunta.mp3",
	"musics/Kendrick Lamar - meet the grahams.mp3",
	"musics/Kendrick Lamar - Money Trees.mp3",
	"musics/Kendrick Lamar - Not Like Us.mp3",
	"musics/Kendrick Lamar - PRIDE.mp3",
	"musics/Kendrick Lamar - reincarnated.mp3",
	"musics/Kendrick Lamar - The Heart Part 5.mp3",
	"musics/Kendrick Lamar - tv off.mp3",
]

const songlist = songs.map(src => new Audio(src));

var tionaus = 0;
window.onload = function() {
	(console.log(tionaus));
};
	
function playclick() {
	function getrandom(chance) {
		return Math.floor(Math.random() * chance);
	}
	tionaus = getrandom(50);
	console.log(tionaus)
	if (tionaus === 0) {
		for (var i = 0; i < songlist.length; i++) {
			songlist[i].play();
		};
		header.textContent = "KENDRICK MODE";
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
		alert(header.innerHTML + "\nENJOY SOME KENDRICK LAMAR");
	} else {
		let newmeow = meow.cloneNode();
		newmeow.play();
	}
};

catteryshuffle.addEventListener("click", playclick);
