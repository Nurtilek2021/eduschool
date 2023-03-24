function preloader() {
    $(() => {
        setInterval(() => {

            let p = $('.preloader');

            p.css('opacity', 0);


            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );

        }, 1000);
    });
}

setInterval(() => preloader(), 2000);

window.onload = () => {
    window.onscroll = function (e) {
        let winY = window.scrollY;

        if (winY > 300) {

            progressBar();

            scrollbarAnimation();

            winY = null;
        }
    };
    const scrollBtn = document.querySelector('.isShowBtn');
    window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('isShow-hide')
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShow-hide')
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0)
    }
};


$(window).scroll(function () {
    if ($(this).scrollTop() > -1) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }
});

let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});


$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 3,
        margin: 100,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

$(document).ready(function () {
    $(".carousel1").owlCarousel({
        items: 3,
        margin: 100,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");

    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}


const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.classList.add('active1');
    setTimeout(() => {
        btn.classList.remove('active1')
    }, 13000);
});