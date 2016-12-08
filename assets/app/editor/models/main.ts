export class Main{
    constructor(
        public name?: string,
        public items?: Array<MainItem>,
        public background? : string,
        public card_background? : string,
        public title_color? : string,
        public title_size? : string,
        public layout?: number
    ){}
}

export class MainItem{
    constructor(
        public title?: string,
        public description?: string,
        public image?: Object
    ){}
}