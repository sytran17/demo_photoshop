// When scroll change background header
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header').addClass('header-background');
    }
    else {
        $('.header').removeClass('header-background');
    }
});

// When scroll change padding-bar-background header
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.padding-bar').addClass('padding-bar-background');
    }
    else {
        $('.padding-bar').removeClass('padding-bar-background');
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 1 ) {
        $('.logo').addClass('logo-background');
    }
    else {
        $('.logo').removeClass('logo-background');
    }
});



// Autoplay slick slider
$('.slick-slide-move').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 5000,
});


//  prev and next slick slider
$(document).ready(function () {
    $(".section-list-box").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        variableHeight: true,
        arrows: false,
        infinite: false,
    });
    $(".btn-prev").click(function () {
        $(".section-list-box").slick("slickPrev");
    });

    $(".btn-next").click(function () {
        $(".section-list-box").slick("slickNext");
    });
    $(".btn-prev").addClass("slick-disabled");
    $(".section-list-box").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".btn-prev").addClass("slick-disabled");
        } else {
            $(".btn-prev").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".btn-next").addClass("slick-disabled");
        } else {
            $(".btn-next").removeClass("slick-disabled");
        }
    });
});

// Show and hide upload- content description slide
$(document).ready(function () {
    $('.title-container-arrow_down').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).parent().siblings().find('.title-container-arrow_down').removeClass('active').siblings('.upload-content').slideUp();
        } else {
            $(this).addClass('active').siblings('.upload-content').slideDown();
            $(this).parent().siblings().find('.title-container-arrow_down').removeClass('active').siblings('.upload-content').slideUp();
        }
    }
    );

});


// show Image photo
function showImages() {
    var showImgPhoto = document.querySelector('.show-img');
    var itemFirst = document.querySelector('.item-first')
    var itemSecond = document.querySelector('.item-second')
    var itemThird = document.querySelector('.item-third')
    var itemFourth = document.querySelector('.item-fourth')


    // Event click
    itemFirst.addEventListener('click', function () {
        showImgPhoto.src = './assets/img/photo/photo-img_1.png'
    })

    itemSecond.addEventListener('click', function () {
        showImgPhoto.src = './assets/img/photo/photo-img_2.png'
    })

    itemThird.addEventListener('click', function () {
        showImgPhoto.src = './assets/img/photo/photo-img_3.png'
    })

    itemFourth.addEventListener('click', function () {
        showImgPhoto.src = './assets/img/photo/photo-img_4.png'
    })
}
showImages();

