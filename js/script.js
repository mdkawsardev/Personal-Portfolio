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
            callback ? callback : 'error';
        }, time);
    })
}
(async () => { //? promise chaining by async-await using IIFE function
    await preload(spinner) // This function first runs, after 2seconds second function runs
    await preload((spinner.classList.add('invisible'), mySpinner.classList.remove('invisible'), body.classList.remove('overflow-hidden')), 100)
    await preload(loader.classList.add('invisible'), 100)
})()
//? When user reloads page, page will automatically go on top of the page
window.addEventListener('load', () => {
    window.scrollTo({ top: 0 })
})
// Animation for skills
let runningAnimation = Array.from(document.querySelectorAll('.runningAnimation'));
runningAnimation.forEach((item) => {
    setInterval(() => {
        item.classList.toggle('run')
    }, 2000)

})
// Animation for skills
let commonTitle = Array.from(document.querySelectorAll('.common_title h2'));
const sliding = () => {
    commonTitle.forEach((h2) => {
        let divIntoH2 = document.createElement('div');
        divIntoH2.className = 'slideAnimation';
        h2.appendChild(divIntoH2);
        setInterval(() => {
            divIntoH2.classList.toggle('slideAnimation');
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
            document.querySelector('.menus').classList.remove('hide');
            document.querySelector('.menubar').classList.remove('hide')
            // menus.classList.remove('d-none')
        } else {
            toggle.classList.remove('active')
            document.querySelector('.menubar').classList.add('hide')
            document.querySelector('.menus').classList.add('hide')
            // menus.classList.add('d-none')
        }
    })
}
toggleBtn()

// TypeWriter effect
const titles = [
    "Web Designer",
    "Web Developer",
    "Freelancer"
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 500;

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLooping() {
    const target = document.getElementById("typewriter-text");
    const currentTitle = titles[titleIndex];

    if (!isDeleting && charIndex <= currentTitle.length) {
        target.textContent = currentTitle.substring(0, charIndex);
        charIndex++;
        setTimeout(typeLooping, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
        target.textContent = currentTitle.substring(0, charIndex);
        charIndex--;
        setTimeout(typeLooping, erasingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            titleIndex = (titleIndex + 1) % titles.length;
        }
        setTimeout(typeLooping, delayBetween);
    }
}
window.addEventListener('DOMContentLoaded', typeLooping)
// TypeWriter effect

window.addEventListener('scroll', () => {
    let windowHeight = window.scrollY;
    if (windowHeight >= 500) {
        document.querySelector('.header').classList.add('sticky');
        document.querySelector('.header').classList.remove('unsticky');
        document.querySelector('.toTop').classList.remove('d-none');
    } else if (windowHeight < 500) {
        document.querySelector('.header').classList.remove('sticky');
        document.querySelector('.header').classList.add('unsticky');
    }
    if (windowHeight === 0) {
        document.querySelector('.header').classList.remove('unsticky');
        document.querySelector('.header').classList.add('sticky');
        document.querySelector('.toTop').classList.add('d-none');
    }
})

// ToTop button
let toTop = document.querySelector('.toTop');
let toTopBtn = toTop.querySelector('.topBtn');
let home = document.querySelector('#top');
// This function has been made to pass any argument but operation is same
const toToP = (element) => {
    element.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}
// Passing two argument
toToP(toTopBtn)
toToP(home)
// ToTop button

// Skills animation
function animateSkillBar(bar) {
    const percent = parseInt(bar.getAttribute('data-percent'));
    const span = bar.querySelector('.skill-percent');
    let current = 0;

    const interval = setInterval(() => {
        if (current <= percent) {
            bar.style.width = current + '%';
            span.textContent = current + '%';
            current++;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBar(entry.target);
            observer.unobserve(entry.target); // prevent re-trigger
        }
    });
}, { threshold: 0.8 });

document.querySelectorAll('.skill-level').forEach(bar => {
    observer.observe(bar);
});
// Skills animation

// Code typeWriter for one item
const text = `Welcome to my personal website!`;
const speed = 100; // typing speed
const pause = 3500; // pause before deleting
let i = 0;
let booliean = false;

function typeLoop() {
    const targets = document.getElementById("typwriter");

    if (!booliean) {
        targets.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
            booliean = true;
            setTimeout(typeLoop, pause);
            return;
        }
    } else {
        targets.textContent = text.substring(0, i - 1);
        i--;
        if (i === 0) {
            booliean = false;
        }
    }

    setTimeout(typeLoop, speed);
}

typeLoop();
// Code typeWriter for one item

// This is for mixItUp/filter
let list = document.querySelectorAll('.list');
let allItems = document.querySelectorAll('.items');
list.forEach(l => {
            l.addEventListener('click', () => {
                list.forEach(i => {
                    i.classList.remove('active');
                })
                l.classList.add('active');
                let dataFilter = l.getAttribute('data-filter');
                allItems.forEach(item => {
                    item.classList.remove('active');
                    item.classList.remove('itemAni')
                    item.classList.add('d-none');
                    if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                        item.classList.add('active');
                        item.classList.add('itemAni');
                        item.classList.remove('d-none');
                    }
                })
            })
        })
list.forEach((l) => {
    l.addEventListener('click', () => {
        list.forEach((k) => {
            k.classList.remove('active');
        })
        l.classList.add('active')
    })
})
// This is for mixItUp/filter