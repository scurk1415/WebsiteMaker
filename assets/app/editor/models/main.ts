export class Main{
    constructor(
        public name?: string,
        public title? : string,
        public description? : string,
        public items?: Array<MainItem>,
        public background? : string,
        public card_background? : string,
        public title_color? : string,
        public title_size? : string,
        public layout?: number,
        public form_items?: Array<FormItem>,
        public label_color? : string,
        public button_label? : string,
        public button_background? : string,
        public button_color? : string,
        public padding?: string,
        public padding_items?: string,
        public description_color?: string
    )
    {
        this.items = [];
        this.form_items = [];
    }
}

export class MainItem{
    constructor(
        public title?: string,
        public description?: string,
        public image?: Object
    ){}
}

export class FormItem{
    constructor(
        public label?: string,
        public form_type?: number,
        public required?: boolean
    ){}
}