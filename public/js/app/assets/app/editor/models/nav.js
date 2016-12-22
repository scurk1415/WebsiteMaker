export var Nav = (function () {
    function Nav(name, menu, font_size, tab_color, font_color, align_right, display, absolute, background) {
        this.name = name;
        this.menu = menu;
        this.font_size = font_size;
        this.tab_color = tab_color;
        this.font_color = font_color;
        this.align_right = align_right;
        this.display = display;
        this.absolute = absolute;
        this.background = background;
        this.menu = [];
    }
    return Nav;
}());
export var NavItem = (function () {
    function NavItem(title, action, action_type, page) {
        this.title = title;
        this.action = action;
        this.action_type = action_type;
        this.page = page;
    }
    return NavItem;
}());
