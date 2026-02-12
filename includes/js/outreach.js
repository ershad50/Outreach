/*
Outreach JS
Code and stuff you need for the Outreach theme
*/
jQuery(document).ready(function($){
	
	// load mobile menu
	$('#main_menu ul.menu').mobileMenu();
	
	//Menu
	$('.nav').mobileMenu();
	
    if (!$.browser.opera) {
        $('select.select-menu').each(function(){
            var title = $(this).attr('title');
            if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
            $(this)
                .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                .after('<span class="select">' + title + '</span>')
                .change(function(){
                    val = $('option:selected',this).text();
                    $(this).next().text(val);
                    })
        });
    };
	
	// Children Flyout on Menu
	function mainmenu(){
	$("#main_menu ul li ul").css({display: "none"}); // Opera Fix
		$("#main_menu ul li").hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300);
			},function(){
			$(this).find('ul:first').css({visibility: "hidden"});
		});
	}
					
	mainmenu();
	
	// add class to ul.menu parent div
	$('#header ul.menu').parent().addClass('header-menu-wrap');
	
	// The Slider
	$(function(){
		$('#slides').slides({
			preload: true,
			preloadImage: '../images/loading.gif',
			play: 8000,
			pause: 10000,
			hoverPause: true,
			effect: 'fade', // 'fade' or 'slide'
			generateNextPrev: true
		});
	});
	
	/* uncomment this to turn on the sticky header.
	$("#header").sticky({topSpacing:0});
	*/
	
	// Turn on that SlabText
	function slabTextHeadlines() {
		$('.slabload').fadeIn(1000); // fade in after it's loaded
    	$(".slabwrap h1").slabText({
    		// Don't slabtext the headers if the viewport is under 380px
    		"viewportBreakpoint":380
    	});
	};

	// give it a second to load fonts
	$(window).load(function() {
       setTimeout(slabTextHeadlines, 1000);
	});

	// Adds class to commenters
	$("ul.commentlist li:not(.bypostauthor)").children(".the_comment").addClass("not_author");
	
	
	// Fancybox
	$(".lightbox").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
	
	//Animates comment links, the logo and toggles on hover, no IE
	if(!$.browser.msie){
		// Animates the soc nets on hover
			$("#socnets").delegate("img", "mouseover mouseout", function(e) {
			if (e.type == 'mouseover') {
				$("#socnets a img").not(this).dequeue().animate({opacity: "0.3"}, 300);
			} else {
				$("#socnets a img").not(this).dequeue().animate({opacity: "1"}, 300);
				}
		});
		
		$("#the_logo").hover(function(){
			$(this).fadeTo(100, 0.8); 
		},function(){
			$(this).fadeTo(100, 1);
		});
		
		// Recent Blog Post hovers
		$('.single_latest img').hover(function(){
			$(this).stop().fadeTo(200, .8);
		},function(){
			$(this).stop().fadeTo(200, 1);
		});
		// Blog Post hovers
		$('.attachment-blog_image').hover(function(){
			$(this).stop().fadeTo(200, .8);
		},function(){
			$(this).stop().fadeTo(200, 1);
		});
	};
	
	// Email Capture effects
	$("input.outreach-email-capture-name").focus(function(srcc) {
		if ($(this).val() == $(this)[0].title) {
			$(this).removeClass("outreach-email-capture-name-active");
			$(this).val("");
		}
	});
	$("input.outreach-email-capture-name").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("outreach-email-capture-name-active");
			$(this).val($(this)[0].title);
		}
	});
	$("input.outreach-email-capture-name").blur();
	
	$("input.outreach-email-capture-email").focus(function(srcc) {
		if ($(this).val() == $(this)[0].title) {
			$(this).removeClass("outreach-email-capture-email-active");
			$(this).val("");
		}
	});
	$("input.outreach-email-capture-email").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("outreach-email-capture-email-active");
			$(this).val($(this)[0].title);
		}
	});
	$("input.outreach-email-capture-email").blur(); 

});		