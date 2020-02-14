// Adding an eventListener on an image
const allImages = document.querySelectorAll('img');
allImages.forEach(image => {
	image.addEventListener('click', () => {
		window.open(image.src)
	})
})

// Adding item to a list
const list = document.querySelector('#books')
const submit = document.querySelector('#submit')

submit.addEventListener('click', (event) => {
	event.preventDefault()
	let newBook = document.createElement('li')
	newBook.setAttribute('id', 'book')
	list.appendChild(newBook)
})