let menuUl = document.querySelector('.menu-ul');
let drawer = document.querySelector('.drawer');
menuUl.onclick = function () {
    menuUl.classList.toggle('active');
    if (menuUl.classList.contains('active')) {
        drawer.classList.add('active')
    }
    else {
        drawer.classList.remove('active')
    }
}
$('.LiList').click(function (e) {
    e.preventDefault();

    var _label = $(this).attr('data-list');
    $('.LiList').removeClass('active');
    $(this).addClass('active');
    $.each($('.all'), function (indexInArray, valueOfElement) {
        let _this = $(this);
        if (_label !== 'all') {
            if (!_this.hasClass(_label)) {
                _this.slideUp('slow');
            }
            else {
                _this.slideDown('slow');
            }
        }
        else {
            _this.slideDown('slow');
        }

    });
});

$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
window.onscroll = function () {
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 0.8;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}