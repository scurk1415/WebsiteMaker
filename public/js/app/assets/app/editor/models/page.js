export var Page = (function () {
    function Page(header, nav, main, footer, theme) {
        this.header = header;
        this.nav = nav;
        this.main = main;
        this.footer = footer;
        this.theme = theme;
    }
    return Page;
}());
