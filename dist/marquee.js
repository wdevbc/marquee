/*
 * marquee plugin 1.01v
 * This offers an alternative to the <marquee> tag, which doesn't align with HTML5 standards.
 * https://github.com/wdevbc/marquee
 * 
 * copyright 2024 wdevbc
 * 
 * Released under the MIT License
 * 
 * Released on: May 30, 2024
 * 
*/ 
((e, t) => { class SimpleMarquee { constructor(e, t = {}) { (this.selector = e), (this.options = Object.assign({}, SimpleMarquee.defaultOptions, t)), (this.parentElement = document.querySelector(e)), (this.contentClone = this.parentElement.innerHTML), (this.currentPosition = 0), (this.isPlaying = !1), this.init(); } init() { this.parentElement.style.whiteSpace = 'nowrap'; this.parentElement.style.display = 'flex'; this.parentElement.innerHTML += this.contentClone + this.contentClone; this.children = Array.from(this.parentElement.children); this.options.direction === 'right' ? (this.currentPosition = -this.parentElement.scrollWidth / 3) : (this.currentPosition = 0); this.options.autoplay ? ((this.isPlaying = true), this.startAnimation(), this.handleMouseEvents()) : this.handleMouseEvents(); } startAnimation() { const totalWidth = this.parentElement.scrollWidth / 3; const animate = () => { if (this.isPlaying) { if (this.options.direction === 'right') { this.currentPosition += this.options.speed; if (this.currentPosition >= totalWidth * 2) { this.currentPosition = 0; } } else { this.currentPosition -= this.options.speed; if (this.currentPosition <= -totalWidth * 2) { this.currentPosition = 0; } } this.parentElement.style.transform = `translateX(${this.currentPosition}px)`; } requestAnimationFrame(animate); }; requestAnimationFrame(animate); } handleMouseEvents() { if (this.options.pauseOnMouseEnter) { this.parentElement.addEventListener('mouseenter', () => { this.isPlaying = false; }); this.parentElement.addEventListener('mouseleave', () => { this.isPlaying = true; }); } } } (SimpleMarquee.defaultOptions = { speed: 1, autoplay: !0, pauseOnMouseEnter: !1, direction: 'left' }), (e.SimpleMarquee = SimpleMarquee); })(window, document);
