import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

require('tinymce');

declare var tinymce: any;

@Component({
    selector: 'dip-tinymce',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class TinyMceComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Input() content: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table', 'code', 'textcolor'],
            toolbar: "undo redo | styleselect fontsizeselect forecolor | bold italic | alignleft aligncenter alignright justify | link image | code",
            fontsize_formats: '8px 10px 12px 14px 18px 24px 36px',
            menubar: false,
            setup: editor => {
                this.editor = editor;

                editor.on("init", () => {
                        editor.setContent(this.content || "");
                    }
                );

                editor.on('change', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}