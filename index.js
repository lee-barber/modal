// defines a variable named modal that
// applies to the HTML document by selecting
// the ID of #box-1
var modal = document.querySelector('#box-1')

// creates a variable for the button so that
// ..... ???
var btn = document.getElementById('btn')

// tells the window to timeout for a set period
// of time 
window.setTimeout (function(){
	// console.log("JS is working")
	modal.classList.remove('hide')
	}, 3000)

// tells the window that when the button is 
// clicked to close the window
btn.addEventListener('click', function(){
	modal.classList.add('hide')
})

