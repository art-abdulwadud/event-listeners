const colors = ["#fad0c4", "#f99185", " #84fab0", "#30cfd0", "#9795f0"];
let x = 0;
let y = 0;
// Adding an eventListener on an image onclick event
const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
	image.addEventListener('click', () => {
		window.open(image.src);
	})
})

// Adding item to a list with onsubmit event
const list = document.querySelector('#books');
const bookEntry = document.querySelector('#book-entry');
const submit = document.querySelector('#submit');
const form = document.querySelector('form')
const addBook = (event) => {
	event.preventDefault();
	let bookName = document.createTextNode(bookEntry.value);
	// Check if input is not empty
	if(bookName.length != 0){
		let newBook = document.createElement('li');
		newBook.setAttribute('id', 'book');
		newBook.appendChild(bookName);
		list.appendChild(newBook);
		// clearing form
		form.reset()
	}
}
// change backgournd while typing with onkeydown event
bookEntry.addEventListener('keydown', () => {
	y+1 > 4 ? y = 0: y += 1;
	return bookEntry.style.background = colors[y]
})
// Changing color background with onmouseover event
const colorChanger = document.querySelector('#color-changer');
colorChanger.addEventListener('mouseover',() => {
	x+1 > 4 ? x = 0: x += 1;
	return colorChanger.style.background = colors[x]
})
