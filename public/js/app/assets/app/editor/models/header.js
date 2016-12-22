export var Header = (function () {
    function Header(title, background, title_color, font_size, height, padding_top, logo, display) {
        this.title = title;
        this.background = background;
        this.title_color = title_color;
        this.font_size = font_size;
        this.height = height;
        this.padding_top = padding_top;
        this.logo = logo;
        this.display = display;
    }
    return Header;
}());
