import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface Project {
  name: string;
};

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  @ViewChild('newProject') newProject: ElementRef;

  public projects: Project[] = [];
 
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  public addNewProject() {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe({
      next: this.projectNameSuccessHandler,
      error: this.projectNameErrorHandler,
    });
  };

  private projectNameSuccessHandler = (projectName: string): void => {
    if (projectName){
      this.projects.push({ name: projectName });
    }
  }

  private projectNameErrorHandler = (error: Error): void => {
    console.log('Could not get project name', error);
  }

}
