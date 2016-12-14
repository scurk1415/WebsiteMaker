export class Footer{
    constructor(
        public links?: Array<FooterLink>,
        public display?: boolean,
        public background?: string,
        public copyright_background?: string,
        public title_size?: string,
        public font_size?: string,
        public font_color?: string,
        public link_color?: string,
        public title?: string,
        public text?: string,
        public copyright_text?: string,
        public link_title?: string,
        public display_copyright?: boolean
    )
    {
        this.links = [];
    }
}

export class FooterLink{
    constructor(
        public title?: string,
        public action?: string,
    ){}
}