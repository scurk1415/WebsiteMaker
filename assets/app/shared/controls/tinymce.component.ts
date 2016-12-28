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
            plugins: [ 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                        'searchreplace wordcount visualblocks visualchars code fullscreen',
                        'insertdatetime media nonbreaking save table contextmenu directionality',
                        'emoticons paste textcolor colorpicker textpattern imagetools codesample toc'],

            toolbar: "undo redo | styleselect fontsizeselect forecolor | bold italic | alignleft aligncenter alignright alignjustify | insert | code codesample",
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