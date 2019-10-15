import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/domain/project.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {

  title: string;
  form: FormGroup;
  users: [];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.users = this.data.users;
    this.resetForm();
  }

  resetForm(project: Project = null) {
    if (project===null) {
      this.form = this.fb.group({
        name:[],
        desc: [],
        ownerId: [],
        beginDate: [],
        endDate: [],
        coverImage: [],
        state: [0],
        scoreTot: [0],
      })
    } else {
      this.form = this.fb.group({
        name:[project.Name],
        desc: [project.Desc],
        ownerId: [project.OwnerId],
        beginDate: [project.BeginDate],
        endDate: [project.EndDate],
        coverImage: [project.CoverImage],
        state: [project.State],
        scoreTot: [project.ScoreTot],
      })
    }
  }

}
