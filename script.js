$(document).ready(function(){
    var selected = $('.selected');
    var dropdown = $('.dropdown-list');
    var optionList = $('.dropdown-list li');

    selected.click(function() {
        dropdown.toggleClass('active');
        $('.method-table').removeClass('mt-active');
        if(dropdown.hasClass('active')) {
            optionList.click(function() {
                var c_code = $(this).attr('id');
                if (c_code == 'us' || c_code == 'nz' || c_code == 'au' || c_code == 'us' || c_code == 'sg' || c_code == 'jp' || c_code == 'ca') {
                    $('.s-st .m-price').text('$19.00');
                    $('.s-ex .m-price').text('$29.00');
                    $('.s-fr .m-desc').text('* enjoy free standard tracked shipping on orders over $200.');
                } else {
                    $('.s-st .m-price').text('$20+');
                    $('.s-ex .m-price').text('$30+');
                    $('.s-fr .m-desc').text('* enjoy free standard tracked shipping on orders over $250.');
                }
                // $('.s-st:before').css('background-image', 'url(img/' + c_code + '.png)');
                $('<style>.s-st:before {background-image: url(img/' + c_code + '.png); }</style>').appendTo('head');
                $('.method-table').addClass('mt-active');
                if(optionList.hasClass('active')) {
                    $(this).siblings().removeClass('active');
                } else {
                    $(this).addClass('active');
                }
                dropdown.removeClass('active');
                selected.children('span').html($(this).html());
            })
        }
    })
});
