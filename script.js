let btnScroll = document.querySelector(".learn-btn");
let Features = document.querySelector(".features");
let openAccountBtn = document.querySelectorAll(".open-account");
let closeBtn = document.querySelector(".close-icon");
let modalSection = document.querySelector(".modal-section");
let navBar = document.querySelector(".nav-bar");
let infoButtonDiv = document.querySelector(".info");
let buttons = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".info2");
let transferBtn = document.querySelector(".transfer");
let loanBtn = document.querySelector(".loan");
let closeAccountBtn = document.querySelector(".close");

let content2 = document.querySelector(".content-2");
let content3 = document.querySelector(".content-3");
let header = document.querySelector("header");
let navLinks = document.querySelectorAll(".nav-link");









btnScroll.addEventListener("click", (event) => {
    event.preventDefault();
    Features.scrollIntoView({behavior: "smooth"});
})


openAccountBtn.forEach(open => {
    open.addEventListener("click", (event) => {
        event.preventDefault();
        modalSection.classList.add("show-modal");
    })
})


closeBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    modalSection.classList.remove("show-modal");
});


//doesn't work fine 
// infoButtonDiv.addEventListener("click", (event) => {
//     event.preventDefault();

//     if(event.target.classList.contains("transfer")){
//         content1.classList.add("content-active");
//     }

//     if(event.target.classList.contains("loan")){
//         content2.classList.add("content-active");
//         content1.classList.remove("content-active");
        
//     }

//     if(event.target.classList.contains("close")){
//         content3.classList.add("content-active");
//         content1.classList.remove("content-active");
//         content2.classList.remove("content-active");
        
//     }
// })



//using event delegation 
infoButtonDiv.addEventListener("click", (event) =>{
    event.preventDefault();

    let clicked = event.target.closest(".btn");
    console.log(clicked);

    //guard clause
    if(!clicked)return;

        //deactivate tabs
        buttons.forEach(btn => {
            btn.classList.remove("btn-active");
        });
        contents.forEach(cont => {
            cont.classList.remove("content-active");
        })

        //activate tabs
        clicked.classList.add("btn-active");
        //activate contents
        document.querySelector(`.content-${clicked.dataset.tab}`).classList.add("content-active");
})


// function eventHandle(event, opacity){
//     if(event.target.classList.contains("nav-link")){
//         let links = event.target;
//         console.log(links);
//         let sibling = links.closest(".nav-bar").querySelector(".nav-link");
//         console.log(sibling);
//         sibling.style.opacity = opacity;
//         }
//     }


//Hover has been done in CSS

// navLinks.forEach(navlink =>{
//     navlink.addEventListener("mouseover", (event) =>{
//         event.preventDefault();
//         navlink.style.opacity = "0.5";
//     })
    
// })

// navLinks.forEach(navlink =>{
//     navlink.addEventListener("mouseout", (event) =>{
//         event.preventDefault();
//         navlink.style.opacity = "1";
//     })
    
// })


// let feature2 = document.querySelector(".features2");
// let section1 = document.querySelector(".section1");
// //stickly navigation
// let navHeight = header.getBoundingClientRect().height;
// console.log(navHeight);

// function stickyNav(entries){
//     let [entry] = entries;

//     if(!entry.isIntersecting){
//         header.classList.add("header-sticky")
//     }else{header.classList.remove("header-sticky")}
// }

// let stickyOPtion = {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${navHeight}px`
// }

// let featureObserver = new IntersectionObserver(stickyNav, stickyOPtion)
// featureObserver.observe(Features);
// console.log(featureObserver);



// navBar.addEventListener("click", (event) => {
//     event.preventDefault();
//     if(event.target.classList.contains("nav-link")){
//         let id = event.target.getAttribute("href");
//         document.querySelector(id).scrollIntoView({behavior: "smooth"});
//     }
// })


let sections = document.querySelectorAll(".section");

function revealSection(entries, observer){
    let  [entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting)return
    entry.target.classList.remove("hide-section");
    observer.unobserve(entry.target);
}


let sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold:0.15,
});

sections.forEach(section => {
    sectionObserver.observe(section)
    section.classList.add("hide-section");
})

//lazy loading image
let imageTarget = document.querySelectorAll("img[data-src]");

function loading(entries, observer){
    let [entry] = entries

    if(!entry.isIntersecting)return;
        //replacing src with data src
    entry.target.src = entry.target.dataset.src;
        //Add load event to the target
    entry.target.addEventListener("load", (event) =>{
        event.target.classList.remove("lazy-image");
    })

    observer.unobserve(entry.target)
}

let loadOption ={
    root: null,
    threshold: 0,
    rootMargin: "30px",
}


let loadingObserver = new IntersectionObserver(loading, loadOption)

imageTarget.forEach(image => {
    loadingObserver.observe(image);
})


//slider

let slides = document.querySelectorAll(".swiper-slide");
let leftSlide = document.querySelector(".left-btn");
let rightSlide = document.querySelector(".right-btn");


let curSlide = 0;
let maxSlide = slides.length;

let goToSlide = function(slide){
    slides.forEach((s, i) =>{
        s.style.transform = `translatex (${100 * (i - slide)}%)`
    })
}

goToSlide(0);

//next slide
let nextSlide = function(){
    if(curSlide === maxSlide){
        ;urSlide = 0
    }else{
        curSlide ++;
    }
    goToSlide(curSlide);
}

//previous slide

let prevSlide = function(){
    if(curSlide == 0){
        curSlide = maxSlide - 1
    }else{
        curSlide --;
    }
    goToSlide(curSlide);
}

rightSlide.addEventListener("click", nextSlide);
leftSlide.addEventListener("click", prevSlide);








