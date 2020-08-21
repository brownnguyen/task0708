let menuUl = document.querySelector('.menu-ul');
let drawer = document.querySelector('.drawer');
let newsLi = document.querySelectorAll('.news .block-left ul li');
let newsContentLi = document.querySelectorAll('.news .block-right ul li');
console.log(newsContentLi)
menuUl.onclick = function () {
    menuUl.classList.toggle('active');
    if (menuUl.classList.contains('active')) {
        drawer.classList.add('active')
    }
    else {
        drawer.classList.remove('active')
    }
}
for (let i = 0; i < newsLi.length; i++) {
    console.log(i)
    newsLi[i].onclick = function () {
        switch (i) {
            case 1: {
                newsContentLi[0].classList.remove('hide');
                newsContentLi[1].classList.add('hide');
                newsContentLi[2].classList.add('hide');
                newsContentLi[3].classList.remove('hide');
            }
            case 2: {
                newsContentLi[0].classList.add('hide');
                newsContentLi[1].classList.remove('hide');
                newsContentLi[2].classList.add('hide');
                newsContentLi[3].classList.remove('hide');
            }
        }
    }
}