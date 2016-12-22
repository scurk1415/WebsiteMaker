import { Directive, Input, ElementRef, HostListener } from '@angular/core';
export var Draggable = (function () {
    function Draggable(element) {
        this.element = element;
        this.topStart = 0;
        this.leftStart = 0;
        this._allowDrag = true;
    }
    Draggable.prototype.ngOnInit = function () {
        // css changes
        if (this._allowDrag) {
            this.element.nativeElement.className += ' cursor-draggable';
        }
    };
    Draggable.prototype.onMouseDown = function (event) {
        if (event.button === 2)
            return; // prevents right click drag, remove his if you don't want it
        this.md = true;
        this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    };
    Draggable.prototype.onMouseUp = function (event) {
        this.md = false;
    };
    Draggable.prototype.onMouseMove = function (event) {
        if (this.md && this._allowDrag) {
            console.log(this.element.nativeElement.contains(event.target));
            this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    };
    Draggable.prototype.onTouchStart = function (event) {
        this.md = true;
        this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
        event.stopPropagation();
    };
    Draggable.prototype.onTouchEnd = function () {
        this.md = false;
    };
    Draggable.prototype.onTouchMove = function (event) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.changedTouches[0].clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.changedTouches[0].clientX - this.leftStart) + 'px';
        }
        event.stopPropagation();
    };
    Object.defineProperty(Draggable.prototype, "dragPosition", {
        set: function (value) {
            this._dragPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draggable.prototype, "allowDrag", {
        set: function (value) {
            this._allowDrag = value;
            if (this._allowDrag) {
                this.element.nativeElement.className += ' cursor-draggable';
                if (this._dragPosition) {
                    this.element.nativeElement.style.left = this._dragPosition.left;
                    this.element.nativeElement.style.top = this._dragPosition.top;
                }
            }
            else {
                this.element.nativeElement.className = this.element.nativeElement.className.replace(' cursor-draggable', '');
                this.element.nativeElement.style.top = '0';
                this.element.nativeElement.style.left = '0';
            }
        },
        enumerable: true,
        configurable: true
    });
    Draggable.decorators = [
        { type: Directive, args: [{
                    selector: '[ng2-draggable]'
                },] },
    ];
    /** @nocollapse */
    Draggable.ctorParameters = [
        { type: ElementRef, },
    ];
    Draggable.propDecorators = {
        'onMouseDown': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
        'onMouseUp': [{ type: HostListener, args: ['document:mouseup',] },],
        'onMouseMove': [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
        'onTouchStart': [{ type: HostListener, args: ['touchstart', ['$event'],] },],
        'onTouchEnd': [{ type: HostListener, args: ['document:touchend',] },],
        'onTouchMove': [{ type: HostListener, args: ['document:touchmove', ['$event'],] },],
        'dragPosition': [{ type: Input, args: ['position',] },],
        'allowDrag': [{ type: Input, args: ['ng2-draggable',] },],
    };
    return Draggable;
}());
