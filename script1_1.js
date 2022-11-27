var elm, buf, this$ = this;
elm = this.crslList.lastElementChild;
buf = elm.cloneNode(true); this.crslList.insertBefore(buf, this.crslList.firstElementChild);
this.crslList.removeChild(elm);
this.crslList.style.marginLeft = '-' + this.elemWidth + 'px';
window.getComputedStyle(this.crslList). marginLeft;
this.crslList.style.cssText = 'transition: margin '+this.options.speed+'ms ease;';
this.crslList.style.marginLeft = '0px';
setTimeout(function() {
	this$.crslList.style.cssText = 'transition: none;'
}, this.options.speed);