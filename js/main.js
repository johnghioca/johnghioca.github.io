//@prepros-prepend plugins.js

$(document).ready(function() {
	
	// Mobile Menu Hamburger Toggle
	$('#menu').click(function(e){
		e.preventDefault();
		$('nav ul').toggleClass('collapse');
	});
	
	// Menu Scroll
	$("nav a").click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 500);
	});
	
	// Font icons for ie7 and lower
	if ($('html').hasClass('lt-ie8')) {
		(function() {
			function addIcon(el, entity) {
				var html = el.innerHTML;
				el.innerHTML = '<span style="font-family: \'social\'">' + entity + '</span>' + html;
			}
			var icons = {
				'icon-twitter': '&#xe600;',
				'icon-google': '&#xe601;',
				'icon-instagram': '&#xe602;',
				'icon-facebook': '&#xea8d;',
				'icon-github': '&#xeab1;',
				'0': 0
				},
				els = document.getElementsByTagName('*'),
				i, c, el;
			for (i = 0; ; i += 1) {
				el = els[i];
				if(!el) {
					break;
				}
				c = el.className;
				c = c.match(/icon-[^\s'"]+/);
				if (c && icons[c[0]]) {
					addIcon(el, icons[c[0]]);
				}
			}
		}());
	}
	
});
