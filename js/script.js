AOS.init();


const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

myBurger.addEventListener('click', ()=>{
	myMenu.classList.toggle('show')
	document.body.classList.toggle('o-hidden')

})
menuLinks.forEach(oneLink => {
	oneLink.addEventListener('click', () =>{
		myMenu.classList.remove('show')
		document.body.classList.remove('o-hidden')
	})
})




$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:2,
		dots: true,
		nav: true,
		loop: true,
		merge: false,
		responsive:{
			1200:{
				items:2
			},
			992:{
				items:2
			},
			768:{
				items:2,
			},
			576:{
				items:2
			},
			320:{
				items:2
			}
		}


	});
});