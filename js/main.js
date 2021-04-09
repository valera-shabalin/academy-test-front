window.addEventListener('DOMContentLoaded', () => {
	buttonArrowsAdd()
	initOpenMenu()
	initScrollHeader()
	initBtnUp()
})

function buttonArrowsAdd() {
	let buttonsLite = document.querySelectorAll('.btn_lite'),
		buttonsBig = document.querySelectorAll('.btn_big')

	buttonsLite.forEach((element) => {
		element.innerHTML += `<svg width=\"68\" height=\"16\" viewBox=\"0 0 68 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
									<path d=\"M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9H67V7H0V9Z\" fill=\"#0063DD\"/>
							  </svg>`
	})
	buttonsBig.forEach((element) => {
		element.innerHTML += `<svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
							  </svg>`
	})
}

function initOpenMenu() {
	let button = document.querySelector('.header__humb'),
		menu = document.querySelector('.mobile-menu')

	button.addEventListener('click', event => {
		event.preventDefault()

		if ( !menu.classList.contains('js_active') ) {
			menu.classList.add('js_active')
			button.classList.add('js_active')
			document.body.style.overflow = 'hidden'
		} else {
			menu.classList.remove('js_active')
			button.classList.remove('js_active')
			document.body.style.overflow = 'hidden auto'
		}
	})
}

function initScrollHeader() {
	let header = document.querySelector('.header')

	window.addEventListener('scroll', () => {
		if ( window.pageYOffset > 150 ) {
			header.classList.add('js_scroll')
		} else {
			header.classList.remove('js_scroll')
		}
	})
}

function initBtnUp(btn) {
	let button = document.querySelector('.btn_up')

	window.addEventListener('scroll', () => {
		if ( window.pageYOffset > 300 ) {
			button.classList.add('js_scroll')
		} else {
			button.classList.remove('js_scroll')
		}
	})
}

$('.owl-carousel').owlCarousel({
	dots: true,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
    	1000: {
    		items: 2
    	},
    	1600: {
    		items: 3
    	},
    	2000: {
    		items: 4
    	}
    }
})

$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href');
    if ( dest !== undefined && dest !== '' ) { 
        $('html').animate({ 
            scrollTop: $(dest).offset().top - 50
        }, 1000);
    }
    return false;
});