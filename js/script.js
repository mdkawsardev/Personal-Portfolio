// //? Preloader operation here
// let loader = document.querySelector('.loader');
// let mySpinner = document.querySelector('.mySpinner');
// let spinner = document.querySelector('.spiContainer');
// let body = document.body;
// body.classList.add('overflow-hidden');
// //? First of all I made a promise using asynchronous callback function
// const preload = async (value, callback) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value)
//             callback?callback():'error';
//         }, 2000);
//     })
// }
// (async () => { //? promise chaining by async-await using IIFE function
//     await preload(spinner) // This function first runs, after 2seconds second function runs
//     await preload(spinner.classList.add('d-none'), mySpinner.classList.remove('d-none'),body.classList.remove('overflow-hidden'))
// })()
// //? When user reloads page, page will automatically go on top of the page
// window.addEventListener('load', () => {
//     window.scrollTo({ top: 0 })
// })

let toggle = document.querySelector('.toggle');
let point = 0;
let menus = document.querySelector('.menus');
// menus.classList.add('d-none')
(()=>{
    toggle.addEventListener('click', () => {
        point++;
        if(point %2 !== 0) {
            toggle.classList.add('active')
            document.querySelector('.menus').classList.remove('hide')
            // menus.classList.remove('d-none')
        } else {
            toggle.classList.remove('active')
            document.querySelector('.menus').classList.add('hide')
            // menus.classList.add('d-none')
        }
    })
})()


