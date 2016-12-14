import { Page } from "./page";

export class Solution{
    constructor(
        public userId: string,
        public name: string,
        public pages: Array<Page>,
        public _id?: string
    ){}
}