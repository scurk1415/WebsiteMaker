import {Footer} from "./footer";
import {Header} from "./header";
import {Main} from "./main";
import {Nav} from "./nav";

export class Page{
    constructor(
        public header: Header,
        public nav: Nav,
        public main_contents: Array<Main>,
        public footer: Footer,
        public theme: number,
        public name: string,
        public unique_id: string
    ){}
}