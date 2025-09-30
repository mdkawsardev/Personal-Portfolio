//? Preloader operation here
let loader = document.querySelector('.loader');
let mySpinner = document.querySelector('.mySpinner');
let spinner = document.querySelector('.spiContainer');
let body = document.body;
body.classList.add('overflow-hidden');
//? First of all I made a promise using asynchronous callback function
const preload = async (value, callback, time = 1500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
            callback?callback():'error';
        }, time);
    })
}
(async () => { //? promise chaining by async-await using IIFE function
    await preload(spinner) // This function first runs, after 2seconds second function runs
    await preload((spinner.classList.add('invisible'), mySpinner.classList.remove('invisible'),body.classList.remove('overflow-hidden')), 100)
    await preload(loader.classList.add('invisible'), 100)
})()
//? When user reloads page, page will automatically go on top of the page
window.addEventListener('load', () => {
    window.scrollTo({ top: 0 })
})
let commonTitle = Array.from(document.querySelectorAll('.common_title h2'));
const sliding = () => {
    commonTitle.forEach((h2) => {
        let divIntoH2 = document.createElement('div');
divIntoH2.className = 'slideAnimation';
h2.appendChild(divIntoH2);
setInterval(() => {
    divIntoH2.classList.toggle('slideAnimation')
}, 2500);
    })
}
sliding()
let toggle = document.querySelector('.toggle');
let point = 0;
let menus = document.querySelector('.menus');
let linkItem = Array.from(document.querySelectorAll('.link'));
linkItem.forEach((item) => {
    item.addEventListener('click', () => {
        linkItem.forEach((list) => {
            list.classList.remove('active');
        })
        item.classList.add('active')
    })
})
// menus.classList.add('d-none')
const toggleBtn = () => {
    toggle.addEventListener('click', () => {
        point++;
        if (point % 2 !== 0) {
            toggle.classList.add('active')
            document.querySelector('.menus').classList.remove('hide')
            // menus.classList.remove('d-none')
        } else {
            toggle.classList.remove('active')
            document.querySelector('.menus').classList.add('hide')
            // menus.classList.add('d-none')
        }
    })
}
toggleBtn()


