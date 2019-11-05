$(function(){"use strict";$('.menu-area .nav li .dropdown-menu li').attr('data-aos','fade-right');$('.menu-area .nav a.dropdown-toggle').on('click',function(){var $this=$(this),$parent=$this.parent(),$timer;if(!$parent.hasClass('open')){$timer=100;$parent.find('.dropdown-menu:first > li').removeClass('aos-animate').each(function(){var $li=$(this);setTimeout(function(){$li.addClass('aos-animate');},$timer);$timer+=100;});}});$.fn.toggleAttr=function(attr){return this.each(function(){var $this=$(this);$this.attr(attr)?$this.removeAttr(attr):$this.attr(attr,attr);});};$(function(){$('#loader-wrapper').css('width',window.innerWidth);$('.sk-circle').css('visibility','visible');});$(document).ready(function(){$(".quick-book-open, .overlay-close, .final-message").on('click',function(e){$('.quick-booking .overlay').toggleClass("open");return false;});$(".open-mobile-menu, .side-nav-overlay").on('click',function(e){$('.side-nav-overlay, .side-nav, .open-mobile-menu').toggleClass("active");return false;});$(".side-nav-dropdown").on('click',function(e){$(this).toggleClass("active");return false;});$('.navbar-nav a.dropdown-toggle').on('click',function(e){var $el=$(this);var $parent=$el.offsetParent(".dropdown-menu");$(this).parent("li").toggleClass('open');if(!$parent.parent().hasClass('nav')){$el.next().css({"top":$el[0].offsetTop,"right":$parent.outerWidth()-4});}
$('.nav li.open').not($(this).parents("li")).removeClass("open");return false;});$('#owl-slider').owlCarousel({items:1,loop:true,rtl:true,center:false,dots:true,nav:false,margin:0,autoplay:false,autoplayTimeout:0,});$('#owl-slider').on('changed.owl.carousel',function(event){$('.owl-item:not(.active) .aos-init').removeClass('aos-animate');setTimeout(function(){$('.slider .aos-init').addClass('aos-animate');},500);});$('.full-window-height .owl-slider-block').css('height',window.innerHeight);$('#our-activities-owl').owlCarousel({items:3,loop:true,rtl:true,center:false,responsive:{0:{items:1},600:{items:2},1000:{items:2},1200:{items:3},},dots:true,nav:false,margin:15,autoplay:false,autoplayTimeout:5000,});$('#owl-activities-prev').on('click',function(e){e.preventDefault();$('#our-activities-owl').trigger('prev.owl.carousel');});$('#owl-activities-next').on('click',function(e){e.preventDefault();$('#our-activities-owl').trigger('next.owl.carousel',[300]);});$('.date').datepicker({});$('#available-room-owl').owlCarousel({items:4,loop:true,center:false,rtl:true,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:3},1000:{items:4},},dots:true,nav:false,margin:1,autoplay:false,autoplayTimeout:5000,});$('#owl-available-room-prev').on('click',function(e){e.preventDefault();$('#available-room-owl').trigger('prev.owl.carousel');});$('#owl-available-room-next').on('click',function(e){e.preventDefault();$('#available-room-owl').trigger('next.owl.carousel',[300]);});var $grid=$('.grid').isotope({itemSelector:'.grid-item',});$('.filter-button-group').on('click','button',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});$('.filter-button-group button').removeClass("active");$(this).addClass("active");});$('.grid-item.grid-item--height2').css('height',($('.grid-item').height()*2)+5);$('.dh-container').directionalHover();$('.gallery-item').magnificPopup({type:'image',gallery:{enabled:true}});$('.popup-youtube').magnificPopup({type:'iframe'});$('.counter-num').counterUp({delay:10,time:1000});$('#latest-offers-owl').owlCarousel({items:2,loop:true,center:false,rtl:true,responsive:{0:{items:1},600:{items:1},1000:{items:2},1200:{items:2},},dots:true,nav:false,margin:15,autoplay:false,autoplayTimeout:5000,});$('#latest-offers-prev').on('click',function(e){e.preventDefault();$('#latest-offers-owl').trigger('prev.owl.carousel');});$('#latest-offers-next').on('click',function(e){e.preventDefault();$('#latest-offers-owl').trigger('next.owl.carousel',[300]);});$('#our-events-owl').owlCarousel({items:3,loop:true,center:false,rtl:true,responsive:{0:{items:1},480:{items:1},768:{items:2},992:{items:2},1000:{items:3},},dots:true,nav:false,margin:1,autoplay:false,autoplayTimeout:5000,});$('#owl-our-events-prev').on('click',function(e){e.preventDefault();$('#our-events-owl').trigger('prev.owl.carousel');});$('#owl-our-events-next').on('click',function(e){e.preventDefault();$('#our-events-owl').trigger('next.owl.carousel',[300]);});$('#our-testimonials-owl').owlCarousel({items:3,loop:true,center:false,rtl:true,responsive:{0:{items:1},480:{items:1},768:{items:2},992:{items:2},1000:{items:3},},dots:true,nav:false,margin:30,autoplay:false,autoplayTimeout:5000,});$('#our-testimonials-prev').on('click',function(e){e.preventDefault();$('#our-testimonials-owl').trigger('prev.owl.carousel');});$('#our-testimonials-next').on('click',function(e){e.preventDefault();$('#our-testimonials-owl').trigger('next.owl.carousel',[300]);});});function initDesign(){$('.responsive-ratio').attr('data-heqw','1.77777777777778');$("[data-heqw]").each(function(){var xclass=$(this).attr('data-heqw');var finalv=Number($(this).innerWidth())/Number(xclass);if(finalv!==0){$(this).css('height',finalv);}else{setTimeout(function(){initDesign();},5000);}});}
$(window).on('load',function(){initDesign();setTimeout(function(){$('.all-filter-button').click();},1000);});$(window).on('resize',function(){initDesign();$('.grid-item.grid-item--height2').css('height',($('.grid-item').height()*2)+5);});$(window).on("scroll",function(){var fromTop=$("body").scrollTop();$('body:not(.header-light)').toggleClass("fixed-header",(fromTop>30));$('body.header-light').toggleClass("fixed-header-animate",(fromTop>118));$('body.header-light').toggleClass("fixed-header2",(fromTop>200));});$('a[href*="#"]:not([href="#"])').on('click',function(e){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top},1000);return false;}}});$(window).load(function(){setTimeout(function(){$('body').addClass('loaded');},100);});});