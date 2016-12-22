export var Footer = (function () {
    function Footer(links, display, background, copyright_background, title_size, font_size, font_color, link_color, title, text, copyright_text, link_title, display_copyright) {
        this.links = links;
        this.display = display;
        this.background = background;
        this.copyright_background = copyright_background;
        this.title_size = title_size;
        this.font_size = font_size;
        this.font_color = font_color;
        this.link_color = link_color;
        this.title = title;
        this.text = text;
        this.copyright_text = copyright_text;
        this.link_title = link_title;
        this.display_copyright = display_copyright;
        this.links = [];
    }
    return Footer;
}());
export var FooterLink = (function () {
    function FooterLink(title, action) {
        this.title = title;
        this.action = action;
    }
    return FooterLink;
}());
