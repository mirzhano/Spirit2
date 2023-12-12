const header = document.getElementById("tf-menu")
const link = document.getElementById('scrollButton')


// nav_links
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const navLinks = document.querySelectorAll('.navLinks a');

window.addEventListener('scroll', function () {
    navLinks.forEach((link) => {
        const targetId = link.getAttribute('href').substring(1); // Уберите символ '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement && isElementInViewport(targetElement)) {
            navLinks.forEach((l) => l.style.color='white');
            link.style.color='#FCAC45'
        }
    })
})

// navbar
window.addEventListener("scroll", ()=> {
    if (window.pageYOffset > 790) {
        header.style.backgroundColor = "#222222";
        header.style.height = '50px'
        header.style.padding= '0'
    } else {
        header.style.backgroundColor = "transparent";
        header.style.padding= '20px'
    }
});

// arrow
link.addEventListener('click', (e)=>{
    e.preventDefault()

    const scrollBut =800
    const scrollInt= 35
    const scrollSpeed = scrollBut / scrollInt

    let scrollAmount = 0
    const scrollAnimation =()=>{
        if(scrollAmount< scrollBut){
            window.scrollBy(0, scrollSpeed)
            scrollAmount += scrollSpeed
            requestAnimationFrame(scrollAnimation)
        }else {
            window.scrollTo(0, scrollBut)
        }
    }

    scrollAnimation()

})

// scroll_img_client
const slider = document.querySelector('.scroll_images');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imageWidth = slider.querySelector('.client_img').clientWidth;
const visibleImages = 5;
const scrollWidth = imageWidth;
let currentIndex = 0;

function moveToSlide(index) {
    currentIndex = index;
    const translateX = -currentIndex * scrollWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 2.7);
        prevButton.style.backgroundColor='orange'
        nextButton.style.backgroundColor='white'


    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - visibleImages) {
        moveToSlide(currentIndex + 2.7);
        nextButton.style.backgroundColor='orange'
        prevButton.style.backgroundColor='white'


    }
});

// slider_team
const slider_2 = document.querySelector('.team_slider');
const prevButton_2 = document.getElementById('prevButtons');
const nextButton_2 = document.getElementById('nextButtons');
const visibleImages_2 = 4;
const imageWidth_2 = slider_2.querySelector('.client_img_2').clientWidth;
let currentIndex_2 = 0;

function moveToSlide_2(index) {
    currentIndex_2 = index;
    const translateX = -currentIndex_2 * imageWidth_2;
    slider_2.style.transform = `translateX(${translateX}px)`;
}

prevButton_2.addEventListener('click', () => {
    if (currentIndex_2 > 0) {
        moveToSlide_2(currentIndex_2 - 4);
        prevButton_2.style.backgroundColor='orange'
        nextButton_2.style.backgroundColor='white'

    }
});

nextButton_2.addEventListener('click', () => {
    if (currentIndex_2 < slider_2.children.length - visibleImages_2) {
        moveToSlide_2(currentIndex_2 + 4);
        nextButton_2.style.backgroundColor='orange'
        prevButton_2.style.backgroundColor='white'


    }
});


//slider-taestimonials

let currentQuote = 1;

// document.getElementById('first').addEventListener('click', goToQuote1);
// document.getElementById('second').addEventListener('click', goToQuote2);
// document.getElementById('third').addEventListener('click', goToQuote3);

// Функция для отображения текущей цитаты
function showCurrentQuote(id = 1) {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach((quote, index) => {
        if (index + 1 === +id) {
            quote.style.display = 'block';
        } else {
            quote.style.display = 'none';
        }
    });
}

const btnGroup = document.querySelector(".btn_group_3");

  btnGroup.addEventListener("click", function(event) {
    // Получить элемент, который был нажат
    const clickedElement = event.target;

    // Добавить активный класс
    clickedElement.classList.add("active");
    showCurrentQuote(clickedElement.id);
    // Удалить активный класс с других элементов
    btnGroup.querySelectorAll("span").forEach(element => {
      if (element !== clickedElement) {
        element.classList.remove("active");
      }
    });
  });


showCurrentQuote();


var filterizd = $('.filter-container').filterizr({
       // options here
    });

    $('.type li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
      });