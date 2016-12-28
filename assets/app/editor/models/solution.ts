import { Page } from "./page";
import { Settings } from "./settings";

export class Solution{
    constructor(
        public userId: string,
        public name: string,
        public pages: Array<Page>,
        public settings: Settings,
        public _id?: string
    ){}
}