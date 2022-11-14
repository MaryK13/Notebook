import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import format from 'date-fns/format';
import { AllNotesModel } from '../../models/all-notes.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent implements OnInit {
  textAreaForm: FormGroup;
  dataNotes: AllNotesModel[] = [];

  constructor(
    private noteService: NotesService,
    private fb: FormBuilder,
  ) {
    this.textAreaForm = this.fb.group({
      notebook_text: [''],
      date: [''],
    });
  }

  ngOnInit() {
    this.dataNotes = this.noteService.getNotes() || [];

    window.addEventListener('storage', event => {
      if (event.oldValue !== event.newValue) {
        location.reload();
      }
    })
  }

  clear() {
    this.textAreaForm.patchValue({ notebook_text: '' });
  }

  save() {
    const date = format(new Date(), 'dd/MM/yyyy');

    this.textAreaForm.patchValue({ date: date });
    this.dataNotes.push(this.textAreaForm.value);
    this.noteService.setNotes(this.dataNotes);

    this.clear();
  }
}
