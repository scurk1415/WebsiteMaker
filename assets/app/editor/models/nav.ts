export class Nav{
    constructor(
        public name?: string,
        public menu?: Array<NavItem>,
        public font_size?: string
    ){}
}

export class NavItem{
    constructor(
        public title?: string,
        public action?: string
    ){}
}