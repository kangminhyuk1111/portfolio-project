window.addEventListener('scroll', () => {
    headerScrollEvent()
})


const skillBoxTg = document.querySelectorAll('.skill_flexbox');
const progress_bar = document.querySelector('.progress-bar');
skillBoxTg[0].addEventListener('mouseover', () => {
    progress_bar.style.width = '95%';
    progress_bar.innerText = '95%';
})
skillBoxTg[1].addEventListener('mouseover', () => {
    progress_bar.style.width = '90%';
    progress_bar.innerText = '90%';
})
skillBoxTg[2].addEventListener('mouseover', () => {
    progress_bar.style.width = '80%';
    progress_bar.innerText = '80%';
})
skillBoxTg[3].addEventListener('mouseover', () => {
    progress_bar.style.width = '75%';
    progress_bar.innerText = '75%';
})
skillBoxTg[4].addEventListener('mouseover', () => {
    progress_bar.style.width = '70%';
    progress_bar.innerText = '70%';
})
skillBoxTg[5].addEventListener('mouseover', () => {
    progress_bar.style.width = '65%';
    progress_bar.innerText = '65%';
})
skillBoxTg[6].addEventListener('mouseover', () => {
    progress_bar.style.width = '60%';
    progress_bar.innerText = '60%';
})
skillBoxTg[7].addEventListener('mouseover', () => {
    progress_bar.style.width = '50%';
    progress_bar.innerText = '50%';
})

const headerScrollEvent = () => {
    const headerTg = document.querySelector(".header")
    if (window.scrollY >= 100) {
        console.log('HIGH');
        headerTg.style.backgroundColor = '#222831';
    }
    else if (window.scrollY <= 100) {
        console.log('LOW');
        headerTg.style.backgroundColor = '';
    }
}

scrollTopBtn = () => {
    window.scroll(0, 0);
}

onclickMove1 = () => {
    window.scroll(0, 611);
    return false;
}
onclickMove2 = () => {
    window.scroll(0, 1220);
    return false;
}
onclickMove3 = () => {
    window.scroll(0, 1745);
    return false;
}
onclickMove4 = () => {
    window.scroll(0, 2377);
    return false;
}