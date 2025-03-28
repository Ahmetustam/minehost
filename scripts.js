//wow
wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
});
wow.init();
//wow-end


// MAIN SWLİDER
var swiper = new Swiper(".mainslider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});
// MAINSLİDER END



//swiper partner
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});
// swiper partner



// dark mode
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "dark-theme") {
        setTheme("light-theme");
        document.getElementById("toggleThemeIcon").classList.add("bx-moon");
        document.getElementById("toggleThemeIcon").classList.remove("bx-sun");
    } else {
        setTheme("dark-theme");
        document.getElementById("toggleThemeIcon").classList.add("bx-sun");
        document.getElementById("toggleThemeIcon").classList.remove("bx-moon");
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "dark-theme") {
        setTheme("dark-theme");
        document.getElementById("toggleThemeIcon").classList.add("bx-sun");
        document.getElementById("toggleThemeIcon").classList.remove("bx-moon");
    } else {
        setTheme("light-theme");
        document.getElementById("toggleThemeIcon").classList.add("bx-moon");
        document.getElementById("toggleThemeIcon").classList.remove("bx-sun");
    }
})();
//dark-mode-end


// backtotop
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction()
};

var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//backtotopend


// menu
const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
menuSection.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});
menuArrow.addEventListener('click', () => {
    hideSubMenu();
});
menuTrigger.addEventListener('click', () => {
    toggleMenu();
});
menuClosed.addEventListener('click', () => {
    toggleMenu();
});
menuOverlay.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}

function hideSubMenu() {
    //subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
}
window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};
//menu end



document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

document.querySelectorAll('.disabled').forEach(element => {
    element.style.pointerEvents = 'none';
});




const itemsPerPage = 6;
let currentCategory = 'all';
let currentPage = 1;

function renderItems() {
    const allItems = document.querySelectorAll('#item-container .item');
    const filteredItems = Array.from(allItems).filter(item =>
        currentCategory === 'all' || item.getAttribute('data-category') === currentCategory
    );

    allItems.forEach(item => item.classList.add('hidden'));

    const start = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(start, start + itemsPerPage);
    paginatedItems.forEach(item => item.classList.remove('hidden'));

    renderPagination(filteredItems.length);
}

function renderPagination(totalItems) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.disabled = i === currentPage;
        button.onclick = () => {
            currentPage = i;
            renderItems();
        };
        pagination.appendChild(button);
    }
}

function filterItems(category) {
    currentCategory = category;
    currentPage = 1;
    renderItems();
}

renderItems();



$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});




/*
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
    }
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
    }
    // "U" key 
    if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
    }
    if (event.keyCode == 123) {
        disabledEvent(e);
    }
    if (e.ctrlKey && event.keyCode == 67) {
        disabledEvent(e);
    }
}, false);

function disabledEvent(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
}






*/

