import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  newProjectName: string = '';

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  saveProjectName() {
    const projectName: string = this.newProjectName.trim();

    if (projectName) {
      // Close the dialog and pass the project name back to the project-overview component
      this.dialogRef.close(projectName);
    }
  }

  ngOnInit(): void {
  }

}
