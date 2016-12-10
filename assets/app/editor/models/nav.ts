export class Nav{
    constructor(
        public name?: string,
        public menu?: Array<NavItem>,
        public font_size?: string,
        public tab_color?: string,
        public font_color?: string,
        public align_right?: boolean,

    ){}
}

export class NavItem{
    constructor(
        public title?: string,
        public action?: string,
        public action_type?: Number
    ){}
}