const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#f5f5dc';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let text = document.getElementById('text');

let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value* -2.5 + 'px';
    gateLeft.style.left = value* 0.5 + 'px';
	gateRight.style.left = value* -0.5 + 'px';








    
})
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
const form = document.querySelector('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  const googleFormsUrl = '';
  const data = new URLSearchParams();

  for (const [key, value] of Object.entries(formValues)) {
    data.append(key, value);
  }

  fetch(googleFormsUrl, {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  })
  .then(response => {
    // Handle success response
  })
  .catch(error => {
    // Handle error response
  });
});
