jQuery(document).ready(function () {
    var btn = $('#upButton');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            btn.addClass('show');
            document.body.style.backgroundColor = '#0c4459';
        } else {
            btn.removeClass('show');
            document.body.style.backgroundColor = '';
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
});
