export class Footer{
    constructor( public link?: string, public links?: Array<FooterLink>){}
}

export class FooterLink{
    constructor(
        public title?: string,
        public action?: string,
    ){}
}