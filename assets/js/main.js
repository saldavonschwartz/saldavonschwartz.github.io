/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// FEDE_CHANGE
// // $('.caption').each(function() {
// // 		$(this).replaceWith($('<figure class="img-with-caption">' + this.innerHTML + '</figure>'));
// // });
// // $('.caption').children('img').each(function() {
// // 		var caption;
// // 		caption = $(this).attr('title');
// // 		$(this).before('<figcaption>' + caption + '</figcaption>');
// });

(function($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {

						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}

			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);

				});

			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();

					}

			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

})(jQuery);

// GL stuff: have to finish it...
// (function($) {
// 	var canvas = document.getElementById('glview');
// 	const gl = canvas.getContext('webgl');
// 	gl.clearColor(0, 0, 0, 1);
//
// 	quad = new Float32Array([
// 		-1.0, -1.0,
//      1.0, -1.0,
//     -1.0,  1.0,
//     -1.0,  1.0,
//      1.0, -1.0,
//      1.0,  1.0
// 	 ]);
//
// 	vtxbuff = gl.createBuffer();
// 	gl.bindBuffer(gl.ARRAY_BUFFER, vtxbuff);
// 	gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
//
// 	vshader = gl.createShader(gl.VERTEX_SHADER);
// 	gl.shaderSource(vshader,`
// 	precision mediump float;
// 	attribute vec2 pos;
//
// 	void main() {
// 	    gl_Position = vec4(pos, 0., 1.);
// 	}
// 	`
// 	);
//
// 	gl.compileShader(vshader);
//
// 	fshader = gl.createShader(gl.FRAGMENT_SHADER);
// 	gl.shaderSource(fshader,`
// 		precision mediump float;
// 		uniform vec2 resolution;
// 		uniform float u_time;
//
// 		vec2 random2(vec2 p) {
// 			return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
// 		}
//
// 		void main() {
// 			float time = u_time / 1000.;
// 	    vec2 st = gl_FragCoord.xy/resolution.xy;
// 	    st.x *= resolution.x/resolution.y;
// 	    vec3 color = vec3(.0);
//
// 			st -= 0.5;
// 			st *= 5.;
// 	    float a = mod(time/4., 2.*3.14);
// 	    mat2 R = mat2(cos(a), sin(a), -sin(a), cos(a));
// 	    st *= R;
//
// 	    vec2 i_st = floor(st);
// 	    vec2 f_st = fract(st);
//
// 	    float m_dist = 1.;
//
// 	    for (int y= -1; y <= 1; y++) {
//         for (int x= -1; x <= 1; x++) {
//           vec2 neighbor = vec2(float(x),float(y));
//           vec2 point = random2(i_st + neighbor);
//           point = 0.5 + 0.5*sin(time + 6.2831*point);
//
//           vec2 diff = neighbor + point - f_st;
//           float dist = length(diff);
//           m_dist = min(m_dist, dist);
// 	      }
// 	    }
//
// 	    // Draw the min distance (distance field)
// 	    color += m_dist;
//
// 	    // Draw cell center
// 	    color.r += 0.4*(.5-step(.02, m_dist));
//
// 	    // color.b += 0.2 * abs(sin(time*0.5));
// 			color = mix(color, vec3(.5, .5, .5), .7);
// 	    gl_FragColor = vec4(color, 1.);
// 	}
// 	`
// 	);
//
// 	gl.compileShader(fshader);
//
// 	program = gl.createProgram();
// 	gl.attachShader(program, vshader);
// 	gl.attachShader(program, fshader);
// 	gl.linkProgram(program);
//
// 	i = gl.getAttribLocation(program, 'pos');
// 	gl.enableVertexAttribArray(i);
// 	gl.vertexAttribPointer(i, 2, gl.FLOAT, false, 0, 0);
//
// 	utime = gl.getUniformLocation(program, 'u_time');
// 	uresolution = gl.getUniformLocation(program, 'resolution');
//
// 	gl.useProgram(program);
// 	gl.uniform2f(uresolution, canvas.width, canvas.height);
//
// 	function tick(ms) {
// 		gl.clear(gl.COLOR_BUFFER_BIT);
// 		gl.uniform1f(utime, ms);
// 		gl.drawArrays(gl.TRIANGLES, 0, 6);
// 		requestAnimationFrame(tick);
// 	}
//
// 	// requestAnimationFrame(tick);
//
// })(jQuery);
