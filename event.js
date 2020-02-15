const colors = ["#fad0c4", "#f99185", " #84fab0", "#30cfd0", "#9795f0"];
let x = 0;
// The body element changes color on scroll
const changeColor = () => {
	x+1 > 1 ? x = 0: x += 1;
	document.body.style.background = colors[x];
}
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
		newBook.setAttribute('class', 'book');
		newBook.appendChild(bookName);
		list.appendChild(newBook);
		// clearing form
		form.reset()
	}
}
// change backgournd while typing with onkeydown event
bookEntry.addEventListener('keydown', () => {
	x+1 > 4 ? x = 0: x += 1;
	return bookEntry.style.background = colors[x]
})
// Changing color background with onmouseover event
const colorChanger = document.querySelector('#color-changer');
colorChanger.addEventListener('mouseover',() => {
	x+1 > 4 ? x = 0: x += 1;
	return colorChanger.style.background = colors[x]
})
