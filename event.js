// Adding an eventListener on an image
const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
	image.addEventListener('click', () => {
		window.open(image.src);
	})
})

// Adding item to a list
const list = document.querySelector('#books');
const bookEntry = document.querySelector('#book-entry');
const submit = document.querySelector('#submit');
const addBook = (event) => {
	event.preventDefault();
	let bookName = document.createTextNode(bookEntry.value);
	// Check if input is not empty
	if(bookName.length != 0){
		let newBook = document.createElement('li');
		newBook.setAttribute('id', 'book');
		newBook.appendChild(bookName);
		list.appendChild(newBook);
	}
}