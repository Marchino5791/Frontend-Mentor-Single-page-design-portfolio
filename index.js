const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const slideImg = document.querySelectorAll(".work__slideshow__img");

let slideSrc = [];
let slideAlt = [];

// fill the array "slideSrc" with images src attributes
for (let index = 0; index < slideImg.length; index++) {
    slideSrc.push(slideImg[index].attributes.src.value);
}

// fill the array "slideAlt" with images alt attributes
for (let index = 0; index < slideImg.length; index++) {
    slideAlt.push(slideImg[index].attributes.alt.value);
}

rightBtn.addEventListener("click", function() {
    const firstSrc = slideSrc.shift();
    slideSrc.push(firstSrc);
    const firstAlt = slideAlt.shift();
    slideAlt.push(firstAlt);
    changeImg(slideSrc, slideAlt, slideImg);
})

leftBtn.addEventListener("click", function () {
    const lastSrc = slideSrc.pop();
    slideSrc.unshift(lastSrc);
    const lastAlt = slideAlt.pop();
    slideAlt.unshift(lastAlt);
    changeImg(slideSrc, slideAlt, slideImg);
})

// change the attributes
function changeImg(arraySrc, arrayAlt, element) {
    for (let index = 0; index < element.length; index++) {
        element[index].setAttribute("src", arraySrc[index])
        element[index].setAttribute("alt", arrayAlt[index])
    }
}