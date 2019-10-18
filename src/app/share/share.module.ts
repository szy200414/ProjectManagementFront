import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatStepperModule,
  MatGridListModule,
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatAutocompleteModule,
} from '@angular/material';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { RouterModule } from '@angular/router';
import { ValidationDialogComponent } from './validation-dialog/validation-dialog.component';
import { UserResearchComponent } from './user-research/user-research.component';


@NgModule({
  declarations: [ImageListSelectComponent, ValidationDialogComponent, UserResearchComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule,
  ],
  exports: [
    CommonModule,
    ValidationDialogComponent,
    BrowserAnimationsModule,
    FormsModule,
    UserResearchComponent,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    ImageListSelectComponent,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule,
  ]
})
export class ShareModule { }
