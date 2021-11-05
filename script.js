
// Detecting a mobile browser
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

    if(isMobile.any()) {
        document.body.classList.add("_touch");

        let menuArrows = document.querySelectorAll(".arrow");
        // далее проверяем есть ли такие стрелки, их длина в массиве
        if( menuArrows.length > 0) {
            //    запускаем цикл, чтобы по всем по ним пробежаться
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                //    вешаем событие
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle("_active");

                });
            }
        }

    } else {
        document.body.classList.add("_pc");
    }


// toggle menu
const menuBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");
if (menuBurger) {
    menuBurger.addEventListener("click", function (e){
        menuBurger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("lock");
    });
}


// scroll to sections

jQuery(window).scroll(function(){ // Функция прокручивает страницу до указанного места.
    let $sections = $('section'); // Вводим переменную
    $sections.each(function(i,el){ // Функция для всех $sections
        let top  = $(el).offset().top-100; //ВВодим переменную, top - отступ на 100 пикселей сверху
        let bottom = top + $(el).height(); //
        let scroll = $(window).scrollTop(); // дистанция от верха элемента до верхней точки видимого контента
        let id = $(el).attr('id');

        // если скролл больше значения top и меньше значения bottom, то у ссылки с классом актив убираем класс актив, а у ссылки с атрибутом href+id секции
        // добавляем класс актив
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
    if (menuBurger.classList.contains("active")) {
        menuBurger.classList.remove("active");
        nav.classList.remove("active");
        body.classList.remove("lock");
    }
});

$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    // event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 800);
});



/* Fixed Header */
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    let scrollPos = 10;
    let header = document.querySelector(".header");

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add("fixed");
    }else {
        header.classList.remove("fixed");
    }
}

/* active btn */
function checkParams() {
    let input = document.getElementById("demo__input");
    let btn = document.getElementById("demo__btn");

    if (input.value.length > 0) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "disabled");
    }
}


/* slider */

new Swiper(".section__slider",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 5,
    slidesPerGroup: 5,
    breakpoints: {
        1035: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
        1270: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
    }
});

/* Show more */

    let loadMore = document.getElementById("load__more");
    loadMore.addEventListener("click", function (event){
        event.preventDefault();
        loadMore.classList.toggle("show");
        let mores = document.querySelectorAll(".more");
        if (loadMore.classList.contains("show")) {
            loadMore.innerHTML = "Свернуть";
            for(let i=0; i<mores.length; i++)mores[i].style.display='block';
        } else {
            loadMore.innerHTML = "Поcмотреть ещё";
            for(let i=0; i<mores.length; i++)mores[i].style.display='none';
        }
    });






