import { Component, OnInit, Input, Output, EventEmitter, NgZone } from "@angular/core";

@Component({
    selector: 'dip-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
    private zone: NgZone;
    options: any;
    hasBaseDropZoneOver: boolean = false;

    @Input() inputFile: Object;
    @Input() inputOptions: Object;
    @Output() uploadedFile = new EventEmitter();

    private response: any = {};

    constructor() {
    }


    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        if (this.inputOptions){
            this.options = this.inputOptions;
        }
        else{
            this.options = {
                url: 'http://localhost:10050/upload',
                filterExtensions: true,
                allowedExtensions: ['image/png', 'image/jpg'],
                calculateSpeed: true,
                data: {
                },
                customHeaders: {
                    'custom-header': 'value'
                }
            };
        }
    }

    handleUpload(data): void {
        if (data && data.response) {
            //this.response = data;
            //this.progress = Math.floor(data.progress.percent / 100);
            data = JSON.parse(data.response);
            this.uploadedFile.emit(data[0]);
        }
    }

    handleUpload2(data): void {
        console.log(data);
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFile.emit(data[0]);
        }
    }

    fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    deleteImage(){
        this.hasBaseDropZoneOver = false;
        this.uploadedFile.emit(null);
    }
}