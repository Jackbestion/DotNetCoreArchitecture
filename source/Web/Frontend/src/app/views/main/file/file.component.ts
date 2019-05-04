import { Component } from "@angular/core";
import { FileModel } from "src/app/models/file.model";

@Component({ selector: "app-file", templateUrl: "./file.component.html" })
export class AppFileComponent {
    files = new Array<FileModel>();

    setFiles() {
        this.files.push(new FileModel("3447C7C779B544A7B142B8A276A2B5EB", "text.txt"));
        this.files.push(new FileModel("206FDFA143A74246950005CE09288762", "document.docx"));
    }
}
