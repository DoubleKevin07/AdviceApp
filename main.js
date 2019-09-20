
function transition_hide()
{
	var elem = document.getElementById("content"); 
	
	// Move left, fade out.
	var pos = 0;
	var id = setInterval(frame, 5);
	var opacity = 1;
	function frame() {
		if (pos == -50) {
			clearInterval(id);
		} else {
			pos--; 
			opacity -= 0.02;
			elem.style.left = pos + 'px'; 
			elem.style.opacity = opacity;
		}
	}	
}

function transition_show()
{
	var elem = document.getElementById("content"); 
	
	// Move from left, fade in.
	var pos = 50;
	var id = setInterval(frame, 5);
	var opacity = 0;
	function frame() {
		if (pos == 0) {
		clearInterval(id);	
		} else {
			pos--; 
			opacity += 0.02;
			elem.style.left = pos + 'px'; 
			elem.style.opacity = opacity;
		}
	}			
}

transition_show();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function call_dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navigation_dropdown')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}