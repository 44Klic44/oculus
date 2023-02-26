const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabcontent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function (element) {
    element.addEventListener('click', open)
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item-active');
    })
    tabcontent.forEach(function (item) {
        item.classList.remove('tabs__content-item--active')
    })

    tabTarget.classList.add('tabs__btn-item-active')
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}






/*nav mob*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100)
        $("#drop").addClass("active");
    else if (scroll < 80)
        $("#drop").removeClass("active");
});

$("#drop, nav ~ ul li").click(function () {
    $("nav, #drop span").toggleClass("open");
    $("body").toggleClass("hidden");
    $(window).scrollTop(0); //cheating
});
