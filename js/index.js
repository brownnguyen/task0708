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
$('.LiList').click(function (e) { 
    e.preventDefault();
  
    var _label = $(this).attr('data-list');
    $('.LiList').removeClass('active');
    $(this).addClass('active');
    console.log(_label)
    $.each($('.all'), function (indexInArray, valueOfElement) { 
        let _this = $(this);
        if(_label !== 'all'){
            if(!_this.hasClass(_label)){
                _this.slideUp('slow');
            }
            else{
                _this.slideDown('slow');
            }
        }
        else{
            _this.slideDown('slow');
        }
        
    });
  });