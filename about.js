console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form has been submited successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const image = document.querySelector('#img')

// image.addEventListener('click', image => {
// 	evt.preventDefault
// 	alert('This cat is cute but not as cute as you')
// })

	// function getAlert(img) {
	// 	evt.preventDefault()
	// 	alert('This cat is cute! But not as much as you')
	// }
	
image.addEventListener('click', () => {
	alert('This cat is cute but not as cute as you')
})


