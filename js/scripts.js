$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //main-gallery-box
    if (!!$('.main-gallery-box').offset()) {
        $('.main-gallery-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }

    //main-brands-box
    if (!!$('.main-brands-box').offset()) {
        $('.main-brands-box .slider').slick({
            dots: false,
            infinite: false,
            slidesToShow: 6,
            variableWidth: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        infinite: true,
                    }
                },
            ]
        });
    }
    
    
/*
    $(window).scroll(function () {
        let windowTop = $(window).scrollTop();
        let bodyHeight = $(window).innerHeight();
        let rHeight = $('.js-box').outerHeight();
        let rOTop = $('.js-box').offset().top; //позиция верха блока от верха <body>
        let rPTop = $('.js-box').position().top; //позиция верха блока от верха родительсого блока с relative
        let rBTop = rOTop - windowTop; //позиция верха блока от верха браузера
        if (((bodyHeight+windowTop) > rOTop) && ((windowTop) < (rOTop + rHeight))) {
            console.log('блок в поле зрения')
        }
        if ((bodyHeight+windowTop) < rOTop) {
            console.log('блок ниже нижней границы')
        }
        if ((windowTop) > (rOTop + rHeight)) {
            console.log('блок выше верхней границы')
        }
    });
*/
});

//animation
//animate round
$(window).scroll(function () {
    let windowTop = $(window).scrollTop();
    let bodyHeight = $(window).innerHeight();
    
    //animation black round
    let rHeight = $('.js-decor-round').outerHeight();
    let rOTop = $('.js-decor-round').offset().top; //позиция верха блока от верха <body>
    let rPTop = $('.js-decor-round').position().top; //позиция верха блока от верха родительсого блока с relative
    let rBTop = rOTop - windowTop; //позиция верха блока от верха браузера
    let rPercentAnimation=1;
    if (((bodyHeight+windowTop) > rOTop) && ((windowTop) < (rOTop + rHeight))) {
        if ((rPercentAnimation < 100) && (rPercentAnimation > 0)) {
            rPercentAnimation = (rBTop/bodyHeight)*9;
        $('.js-decor-round .decor-element').css('top', rPercentAnimation+'%')
        }
    }
    
    //animation phone right
    let pHeight = $('.js-decor-phone').outerHeight();
    let pOTop = $('.js-decor-phone').offset().top; //позиция верха блока от верха <body>
    let pPTop = $('.js-decor-phone').position().top; //позиция верха блока от верха родительсого блока с relative
    let pBTop = pOTop - windowTop; //позиция верха блока от верха браузера
    let pPercentAnimation=1;
    if (((bodyHeight+windowTop) > pOTop) && ((windowTop) < (pOTop + pHeight))) {
        
        if ((pPercentAnimation < 100) && (pPercentAnimation > 0)) {
            pPercentAnimation = ((pBTop)/bodyHeight)*80;
        }
        $('.js-decor-phone').css('transform', 'translateX('+pPercentAnimation+'%)')
    }

    //animation money right
    let mrHeight = $('.js-decor-right').outerHeight();
    let mrOTop = $('.js-decor-right').offset().top; //позиция верха блока от верха <body>
    let mrPTop = $('.js-decor-right').position().top; //позиция верха блока от верха родительсого блока с relative
    let mrBTop = mrOTop - windowTop; //позиция верха блока от верха браузера
    let mrPercentAnimation=1;
    if (((bodyHeight+windowTop) > mrOTop) && ((windowTop) < (mrOTop + pHeight))) {

        if ((mrPercentAnimation < 100) && (mrPercentAnimation > 0)) {
            mrPercentAnimation = ((mrBTop)/bodyHeight)*80;
        }
        $('.js-decor-right').css('transform', 'translateX('+mrPercentAnimation+'%)')
    }

    //animation money bottom
    let mbHeight = $('.js-decor-bottom').outerHeight();
    let mbOTop = $('.js-decor-bottom').offset().top; //позиция верха блока от верха <body>
    let mbPTop = $('.js-decor-bottom').position().top; //позиция верха блока от верха родительсого блока с relative
    let mbBTop = mbOTop - windowTop; //позиция верха блока от верха браузера
    let mbPercentAnimation=1;
    if (((bodyHeight+windowTop) > mbOTop) && ((windowTop) < (mbOTop + pHeight))) {

        if ((mbPercentAnimation < 100) && (mbPercentAnimation > 0)) {
            mbPercentAnimation = ((mbBTop)/bodyHeight)*80;
        }
        $('.js-decor-bottom').css('transform', 'translateX('+mbPercentAnimation+'%)')
    }

    //animation money left
    let mlHeight = $('.js-decor-left').outerHeight();
    let mlOTop = $('.js-decor-left').offset().top; //позиция верха блока от верха <body>
    let mlPTop = $('.js-decor-left').position().top; //позиция верха блока от верха родительсого блока с relative
    let mlBTop = mlOTop - windowTop; //позиция верха блока от верха браузера
    let mlPercentAnimation=1;
    if (((bodyHeight+windowTop) > mlOTop) && ((windowTop) < (mlOTop + pHeight))) {

        if ((mlPercentAnimation < 100) && (mlPercentAnimation > 0)) {
            mlPercentAnimation = -((mlBTop)/bodyHeight)*80;
        }
        $('.js-decor-left').css('transform', 'translateX('+mlPercentAnimation+'%)')
    }


    //animation scroll-main
    let scMHeight = $('.js-scroll-main').outerHeight();
    let scMOTop = $('.js-scroll-main').offset().top; //позиция верха блока от верха <body>
    let scMPTop = $('.js-scroll-main').position().top; //позиция верха блока от верха родительсого блока с relative
    let scMBTop = scMOTop - windowTop; //позиция верха блока от верха браузера
    let scMPercentAnimation=1;
    if (((bodyHeight+windowTop) > scMOTop) && ((windowTop) < (scMOTop + pHeight))) {

        if ((scMPercentAnimation < 100) && (scMPercentAnimation > 0)) {
            scMPercentAnimation = -((bodyHeight-scMBTop)/bodyHeight)*40;
        }
        $('.js-scroll-main').css('top', scMPercentAnimation+'%')
    }


    //animation scroll-second
    let scSHeight = $('.js-scroll-second').outerHeight();
    let scSOTop = $('.js-scroll-second').offset().top; //позиция верха блока от верха <body>
    let scSPTop = $('.js-scroll-second').position().top; //позиция верха блока от верха родительсого блока с relative
    let scSBTop = scSOTop - windowTop; //позиция верха блока от верха браузера
    let scSPercentAnimation=1;
    if (((bodyHeight+windowTop) > scSOTop) && ((windowTop) < (scSOTop + pHeight))) {

        if ((scSPercentAnimation < 100) && (scSPercentAnimation > 0)) {
            scSPercentAnimation = -((bodyHeight-scSBTop)/bodyHeight)*40;
        }
        $('.js-scroll-second').css('top', scSPercentAnimation+'%')
    }
});
$(window).on('load',function () {
    let windowTop = $(window).scrollTop();
    let bodyHeight = $(window).innerHeight();


    //animation black round
    let rHeight = $('.js-decor-round').outerHeight();
    let rOTop = $('.js-decor-round').offset().top; //позиция верха блока от верха <body>
    let rPTop = $('.js-decor-round').position().top; //позиция верха блока от верха родительсого блока с relative
    let rBTop = rOTop - windowTop; //позиция верха блока от верха браузера
    let rPercentAnimation=1;
    if (((bodyHeight+windowTop) > rOTop) && ((windowTop) < (rOTop + rHeight))) {
        if ((rPercentAnimation < 100) && (rPercentAnimation > 0)) {
            rPercentAnimation = (rBTop/bodyHeight)*9;
        }
        $('.js-decor-round .decor-element').css('top', rPercentAnimation+'%')
    }
});