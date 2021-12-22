$(function() {
	'use strict'
	
	// ______________ PAGE LOADING
	$("#global-loader").fadeOut("slow");
	
	// ______________ Card
	const DIV_CARD = 'div.card';
	
	// ______________ Function for remove card
	$(document).on('click', '[data-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});
	
	// ______________ Functions for collapsed card
	$(document).on('click', '[data-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// ______________ Card full screen
	$(document).on('click', '[data-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
	
	// ______________Main-navbar
	if (window.matchMedia('(min-width: 992px)').matches) {
		$('.main-navbar .active').removeClass('show');
		$('.main-header-menu .active').removeClass('show');
	}
	$('.main-header .dropdown > a').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('show');
		$(this).parent().siblings().removeClass('show');
	});
	$('.mobile-main-header .dropdown > a').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('show');
		$(this).parent().siblings().removeClass('show');
	});
	$('.main-navbar .with-sub').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('show');
		$(this).parent().siblings().removeClass('show');
	});
	$('.dropdown-menu .main-header-arrow').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.dropdown').removeClass('show');
	});
	$('#mainNavShow').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('main-navbar-show');
	});
	$('#mainContentLeftShow').on('click touch', function(e) {
		e.preventDefault();
		$('body').addClass('main-content-left-show');
	});
	$('#mainContentLeftHide').on('click touch', function(e) {
		e.preventDefault();
		$('body').removeClass('main-content-left-show');
	});
	$('#mainContentBodyHide').on('click touch', function(e) {
		e.preventDefault();
		$('body').removeClass('main-content-body-show');
	})
	$('body').append('<div class="main-navbar-backdrop"></div>');
	$('.main-navbar-backdrop').on('click touchstart', function() {
		$('body').removeClass('main-navbar-show');
	});

	
	// ______________Dropdown menu
	$(document).on('click touchstart', function(e) {
		e.stopPropagation();
		var dropTarg = $(e.target).closest('.main-header .dropdown').length;
		if (!dropTarg) {
			$('.main-header .dropdown').removeClass('show');
		}
		if (window.matchMedia('(min-width: 992px)').matches) {
			var navTarg = $(e.target).closest('.main-navbar .nav-item').length;
			if (!navTarg) {
				$('.main-navbar .show').removeClass('show');
			}
			var menuTarg = $(e.target).closest('.main-header-menu .nav-item').length;
			if (!menuTarg) {
				$('.main-header-menu .show').removeClass('show');
			}
			if ($(e.target).hasClass('main-menu-sub-mega')) {
				$('.main-header-menu .show').removeClass('show');
			}
		} else {
			if (!$(e.target).closest('#mainMenuShow').length) {
				var hm = $(e.target).closest('.main-header-menu').length;
				if (!hm) {
					$('body').removeClass('main-header-menu-show');
				}
			}
		}
	});
	
	// ______________MainMenuShow
	$('#mainMenuShow').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('main-header-menu-show');
	})
	$('.main-header-menu .with-sub').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('show');
		$(this).parent().siblings().removeClass('show');
	})
	$('.main-header-menu-header .close').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('main-header-menu-show');
	})
	
	// ______________Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// ______________Toast
	$(".toast").toast();
	
	// ______________Back-top-button
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	// ______________Full screen
	$(document).on("click", ".fullscreen-button", function toggleFullScreen() {
		$('html').addClass('fullscreen');
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			$('html').removeClass('fullscreen');
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})
	
	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	
	
	// ______________Select2-Search
	$('.select2-no-search').select2({
		minimumResultsForSearch: Infinity,
		placeholder: 'All categories',
		 width: '100%'
	});
	

	
	
	// ______________Horizontal-menu Active Class
	function addActiveClass(element) {
		if (current === "") {
		  if (element.attr('href').indexOf("#") !== -1) {
			element.parents('.main-navbar .nav-item').last().removeClass('active');
			if (element.parents('.main-navbar .nav-sub').length) {
			  element.parents('.main-navbar .nav-sub-item').last().removeClass('active');
			}
			element.parents('.main-navbar .nav-sub-item .nav-sub-link.with-sub').last().removeClass('active');
			if (element.parents('.main-navbar .nav-sub .nav-sub-item  .nav-sub').length) {
				element.parents('.main-navbar .nav-sub-item .nav-sub-item').last().removeClass('active');
			}
		  }
		} else {
			if (element.attr('href').indexOf(current) !== -1) {
				element.parents('.main-navbar .nav-item').last().addClass('active');
				if (element.parents('.main-navbar .nav-sub').length) {
				   element.parents('.main-navbar .nav-sub-item').last().addClass('active');
				}
				element.parents('.main-navbar .nav-sub-item .nav-sub-link.with-sub').last().addClass('active');
				if (element.parents('.main-navbar .nav-sub .nav-sub-item  .nav-sub').length) {
					element.parents('.main-navbar .nav-sub-item .nav-sub-item').last().addClass('active');
				}
			}
		}
	}
	var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
	$('.main-navbar .nav li a').each(function() {
	  var $this = $(this);
	  addActiveClass($this);
	})
	
	
	// ______________ SWITCHER-toggle ______________//
	
		$(document).on("click", '#myonoffswitch51', function () {    
		if (this.checked) {
			$('body').addClass('icon-style');
			$('body').removeClass('light-leftmenu');
			$('body').removeClass('dark-leftmenu');
			$('body').removeClass('color-leftmenu');
			$('body').removeClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			localStorage.setItem("icon-style", "True");
		}
		else {
			$('body').removeClass('icon-style');
			localStorage.setItem("icon-style", "false");
		}
	});
	
	$(document).on("click", '#myonoffswitch52', function () {    
		if (this.checked) {
			$('body').addClass('theme-style');
		}
		else {
			$('body').removeClass('theme-style');
			localStorage.setItem("theme-style", "false");
		}
	});
	$(document).on("click", '#myonoffswitch53', function () {    
		if (this.checked) {
			$('body').addClass('boxed');
		}
		else {
			$('body').removeClass('boxed');
			localStorage.setItem("boxed", "false");
		}
	});
	
	
	
	$('#background1').on('click', function() {
	  $('body').addClass('color-leftmenu');
	  $('body').removeClass('light-leftmenu');
	  return false;
	});
	
	$('#background2').on('click', function() {
	  $('body').addClass('light-leftmenu');
	  $('body').removeClass('color-leftmenu');
	  return false;
	});
	
	
	$('#background3').on('click', function() {
	  $('body').addClass('header-dark');
	  $('body').removeClass('color-header');
	  return false;
	});
	
	$('#background4').on('click', function() {
	  $('body').addClass('color-header');
	  $('body').removeClass('header-dark');
	  return false;
	});
	
	$('#background5').on('click', function() {
	  $('body').addClass('dark-theme');
	   $('body').removeClass('light-theme');
	    $('body').removeClass('light-horizontal');
	   $('body').removeClass('color-horizontal');
	  $('body').removeClass('header-dark');
	  $('body').removeClass('color-header');
	  $('body').removeClass('color-leftmenu');
	  $('body').removeClass('light-leftmenu');
	  return false;
	});
	
	$('#background6').on('click', function() {
	   $('body').addClass('light-theme');
	  $('body').removeClass('dark-theme');
	    $('body').removeClass('light-horizontal');
	   $('body').removeClass('color-horizontal');
	  $('body').removeClass('header-dark');
	  $('body').removeClass('color-header');
	  $('body').removeClass('color-leftmenu');
	  $('body').removeClass('light-leftmenu');
	  return false;
	});
	
	$('#background7').on('click', function() {
	  $('body').addClass('color-horizontal');
	    $('body').removeClass('light-horizontal');
	  return false;
	});
	
	$('#background8').on('click', function() {
	  $('body').addClass('light-horizontal');
	   $('body').removeClass('color-horizontal');
	  return false;
	});
	  
	 
	$("a[data-theme]").click(function() {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});





var beatpack = [
	{
		name: "2Stroke",
		artist: "Bones - Prod. Niq Venus",
		src: "https://trevor-reznik.github.io/guides/email-template/4.opus",
		thumbnail: "url(https://trevor-reznik.github.io/guides/email-template/4.jpg)"
	},
	{
		name: 'Playboi Carti type beat "Jaded"',
		artist: "Niq Venus",
		src: "https://trevor-reznik.github.io/guides/email-template/1.mp3",
		thumbnail: "url(https://trevor-reznik.github.io/guides/email-template/14.jpg)"
	},
	{
		name: 'Roddy Ricch type beat "HERO"',
		artist: "Niq Venus",
		src: "https://trevor-reznik.github.io/guides/email-template/2.mp3",
		thumbnail: "url(https://trevor-reznik.github.io/guides/email-template/13.jpg)"
	},
	{
		name: "Reeses Puffs",
		artist: "Niq Venus",
		src: "https://trevor-reznik.github.io/guides/email-template/3.mp3",
		thumbnail: "url(https://trevor-reznik.github.io/guides/email-template/15.jpg)"
	}
];

$(document).ready(function () {
	var playing = false,
		artistname = $(".artist-name"),
		musicName = $(".music-name"),
		time = $(".time"),
		fillBar = $(".fillBar");

	var song = new Audio();
	var CurrentSong = 0;
	window.onload = load();

	function load() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
	}

	function playSong() {
		artistname.html(beatpack[CurrentSong].name);
		musicName.html(beatpack[CurrentSong].artist);
		song.src = beatpack[CurrentSong].src;
		song.play();
		$("#thumbnail").css("background-image", beatpack[CurrentSong].thumbnail);
		$("#play").addClass("fa-pause");
		$("#play").removeClass("fa-play");
		$("#thumbnail").addClass("active");
		$(".player-track").addClass("active");
	}

	song.addEventListener("timeupdate", function () {
		var position = (100 / song.duration) * song.currentTime;
		var current = song.currentTime;
		var duration = song.duration;
		var durationMinute = Math.floor(duration / 60);
		var durationSecond = Math.floor(duration - durationMinute * 60);
		var durationLabel = durationMinute + ":" + durationSecond;
		currentSecond = Math.floor(current);
		currentMinute = Math.floor(currentSecond / 60);
		currentSecond = currentSecond - currentMinute * 60;
		// currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
		if (currentSecond < 10) {
			currentSecond = "0" + currentSecond;
		}
		var currentLabel = currentMinute + ":" + currentSecond;
		var indicatorLabel = currentLabel + " / " + durationLabel;

		fillBar.css("width", position + "%");

		$(".time").html(indicatorLabel);
	});

	$("#play").click(function playOrPause() {
		if (song.paused) {
			song.play();
			playing = true;
			$("#play").addClass("fa-pause");
			$("#play").removeClass("fa-play");
			$("#thumbnail").addClass("active");
			$(".play-btn:before").css("padding-left", 300);

			document.getElementsByClassName("play-btn")[0].classList.add("pause-btn");
			document.getElementsByClassName("play-btn")[0].classList.remove("play-btn");
		} else {
			song.pause();
			playing = false;
			$("#play").removeClass("fa-pause");
			$("#play").addClass("fa-play");
			$("#thumbnail").removeClass("active");

			document.getElementsByClassName("pause-btn")[0].classList.add("play-btn");
			document
				.getElementsByClassName("pause-btn")[0]
				.classList.remove("pause-btn");
		}
	});

	$("#prev").click(function prev() {
		CurrentSong--;
		if (CurrentSong < 0) {
			CurrentSong = beatpack.length - 1;
		}
		playSong();
	});

	$("#next").click(function next() {
		CurrentSong++;
		if (CurrentSong == beatpack.length) {
			CurrentSong = 0;
		}
		playSong();
	});
});




