menu__item = document.querySelectorAll('.menu__item-mobile');
menu__row = document.querySelectorAll('.menu__row-mobile');
menu__title = document.querySelectorAll('.menu__title-mobile');

document.querySelector(".burger").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active-body");
    document.querySelector(".menu-mobile").classList.toggle("active");
    setTimeout(() => { document.querySelector(".burger").classList.toggle("active-burger"); }, 100);
})

document.querySelector(".burger-mobile").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active-body");
    document.querySelector(".menu-mobile").classList.toggle("active");
    setTimeout(() => { document.querySelector(".burger").classList.toggle("active-burger"); }, 400);
})

for(let i = 0; i < menu__item.length; i++){

    let key = menu__item[i]
    let keySub = menu__row[i]
    let arrowKey = menu__title[i]

    key.addEventListener('click', () => {
        keySub.classList.toggle('menu__row-mobile-active');
        arrowKey.classList.toggle('tool')
    });
}
