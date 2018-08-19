import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-file-upload',
  templateUrl: './drop-file-upload.component.html',
  styleUrls: ['./drop-file-upload.component.scss']
})
export class DropFileUploadComponent implements OnInit {

  constructor() { }

  uploadedFiles: File;


  ngOnInit() {
  }

  myUploader(event) {
    
      this.uploadedFiles = event.files
    

    console.log("ARCHIVO", this.uploadedFiles)
  }
}
