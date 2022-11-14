import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { AllNotesPageComponent } from './all-notes-page/all-notes-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotePageComponent } from './note-page/note-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AllNotesPageComponent,
    NotePageComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    RouterLinkWithHref,
    RouterLink,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {

}
