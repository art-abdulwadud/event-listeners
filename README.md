# Javascript Event Listeners

## Event listeners
Events listeners basically wait for a certain event to occur so that other events can be triggered. There many event listeners and only some of them have been used in this project in order to help us understand how they work
The ones used in this project include:
`onscroll` - activates events on scrolling
`onclick` - activates events on clicking
`onsubmit` - activates events on submit a form
`onkeydown` - activates events when pressing down a key
`onmouseover` - activates events on moving the mouse/cursor over an element
Event listeners can be placed either in the HTML section or or JavaScript section.
Through HTML
```
<div onClick="myFunction()">Hello world</div>
```
```
const myFunction = () => {
	// make changes whenever user clicks this 'div' section
}
```
or through JavaScript
```
document.querySelector('div').addEventListener('click', () => {
	// make changes whenever user clicks this 'div' section
})
```

