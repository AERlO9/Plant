const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("change");
  });
  

//panels//

const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

function setActivePanel(index) {
    removeActiveClasses();
    panels[index].classList.add('active');
}

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function autoScroll() {
    currentIndex++;
    if (currentIndex >= panels.length) {
        currentIndex = 0;
    }
    setActivePanel(currentIndex);
}

setActivePanel(currentIndex);

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');
        currentIndex = Array.from(panels).indexOf(panel);
    });
    panel.addEventListener('mouseout', () => {
        removeActiveClasses();
        setActivePanel(currentIndex);
    });
    panel.addEventListener('click', () => {
        const link = panel.getAttribute('data-link');
        window.open(link, '_blank');
    });
});

setInterval(autoScroll, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.5}s`;
    });
});


//join//

document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.hurry').style.background = '#cc683c';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.hurry').style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(images/bg1.jpeg) center no-repeat; background-size: cover';
});










