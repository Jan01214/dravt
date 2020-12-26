var mySwiper = new Swiper('.page__slide-list', {
autoplay: {
    delay: 1000,
  },
  	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
   		bulletElement: true,
   		slideToClickedSlide:true,
   	},
   	slidesPerView: 1,
   	slidesPerGroup: 1,
   	speed: 1000,	
})

var mySwiper = new Swiper('.galery__section', {
	autoplay: {
	    delay: 1000,
	  },

	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev',
	},

   	slidesPerView: 4,
   	slidesPerGroup: 1,
   	speed: 1000,
   	spaceBetween: 30,	
})

var mySwiper = new Swiper('.galery__section', {
autoplay: {
    delay: 1000,
  },

   	slidesPerView: 4,
   	slidesPerGroup: 1,
   	speed: 1000,
   	spaceBetween: 30,	
})






const tabsBtn   = document.querySelectorAll(".search__item");
const tabsItems = document.querySelectorAll(".search__body");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();


