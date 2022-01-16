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
// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel({
// 		items:1,
// 		loop:true,
// 		center: true
// 	});
// });

$('.single-item').slick({
	infinite: true,
	dots: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	// responsive: [
	// 	{
	// 		breakpoint: 1200,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 3,
	// 			infinite: true,
	// 			dots: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 576,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	}
	//
	// ]
});

