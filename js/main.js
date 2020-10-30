window.addEventListener('load', () => {
	buttonArrows()
	openMenu('.header__humb', '.mobile-menu')
	scrollHeader('.header')
	checkButton('.btn_up')
})

function buttonArrows() {
	let buttonsLite = document.querySelectorAll('.btn_lite'),
		buttonsBig = document.querySelectorAll('.btn_big')

	buttonsLite.forEach((element) => {
		element.innerHTML += "<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='268 112 412 256 268 400' style='fill:none;stroke:#0f7bff;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px'/><line x1='392' y1='256' x2='100' y2='256' style='fill:none;stroke:#0f7bff;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px'/></svg>"
	})
	buttonsBig.forEach((element) => {
		element.innerHTML += "<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='268 112 412 256 268 400' style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px'/><line x1='392' y1='256' x2='100' y2='256' style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px'/></svg>"
	})
}

function openMenu(btn, menuBody) {
	let button = document.querySelector(btn),
		menu = document.querySelector(menuBody)

	button.addEventListener('click', (e) => {
		if ( e ) {
			e.preventDefault()
		}
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

function scrollHeader(headerItem) {
	let header = document.querySelector(headerItem)

	window.addEventListener('scroll', () => {
		if ( window.pageYOffset > 150 ) {
			header.classList.add('js_scroll')
		} else {
			header.classList.remove('js_scroll')
		}
	})
}

function checkButton(btn) {
	let button = document.querySelector(btn)

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