import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesPageComponent } from './pages/all-notes-page/all-notes-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'notes',
    component: AllNotesPageComponent
  },
  {
    path: 'notes/:id',
    component: NotePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
