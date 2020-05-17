$(document).ready(function() {
    // 導覽列按鈕
    $('#nav-toggle').on('click', function(e) {

            $('#nav-content').toggleClass('hidden')
                // $('.js-m-navbar__list').toggleClass('is-active')
            e.preventDefault()
        })
        // 導覽列按鈕 end

    // 固定導覽列
    const setFixed = $('#header')
    let menuTop = setFixed.offset().top

    $(window).on('load scroll resize', function() {
            if ($(window).scrollTop() > menuTop) {
                setFixed.addClass('is-fixtop')
            } else {
                setFixed.removeClass('is-fixtop')
            }
        })
        // 固定導覽列 end

    // 至頂按鈕
    const backtopBtn = $('.js-e-backtop-btn')

    backtopBtn.hide()

    backtopBtn.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow')
        return false
    });
    $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                backtopBtn.fadeIn()
            } else {
                backtopBtn.fadeOut()
            }
        })
        // 至頂按鈕 end
});
var helpMenuDiv = document.getElementById("menu-content");
var helpMenu = document.getElementById("menu-toggle");

document.onclick = check;
//Help Menu
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);
    if (!checkParent(target, helpMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, helpMenu)) {
            // click on the link
            if (helpMenuDiv.classList.contains("hidden")) {
                helpMenuDiv.classList.remove("hidden");
            } else { helpMenuDiv.classList.add("hidden"); }
        } else {
            // click both outside link and outside menu, hide menu
            helpMenuDiv.classList.add("hidden");
        }
    }

}

function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}