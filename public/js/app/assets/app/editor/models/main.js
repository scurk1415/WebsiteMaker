export var Main = (function () {
    function Main(name, title, description, items, background, card_background, title_color, title_size, layout, form_items, label_color, button_label, button_background, button_color, padding, padding_items, description_color) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.items = items;
        this.background = background;
        this.card_background = card_background;
        this.title_color = title_color;
        this.title_size = title_size;
        this.layout = layout;
        this.form_items = form_items;
        this.label_color = label_color;
        this.button_label = button_label;
        this.button_background = button_background;
        this.button_color = button_color;
        this.padding = padding;
        this.padding_items = padding_items;
        this.description_color = description_color;
        this.items = [];
        this.form_items = [];
    }
    return Main;
}());
export var MainItem = (function () {
    function MainItem(title, description, image) {
        this.title = title;
        this.description = description;
        this.image = image;
    }
    return MainItem;
}());
export var FormItem = (function () {
    function FormItem(label, form_type, required) {
        this.label = label;
        this.form_type = form_type;
        this.required = required;
    }
    return FormItem;
}());
