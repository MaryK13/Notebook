import { Injectable } from '@angular/core';
import { AllNotesModel } from '../models/all-notes.model';

@Injectable()
export class NotesService {
  notes: AllNotesModel[] = [];
  constructor() {
  }

  setNotes(note: any) {
    const notes = note.map((x: any) => {
      let randomNoteId = Math.random().toString(36).substr(2, 5);
      return { id: randomNoteId, date: x.date, notebook_text: x.notebook_text }
    })
    localStorage.setItem('note', JSON.stringify(notes));
  }

  getNotes() {
    const notesParse = localStorage.getItem('note');
    if (notesParse) {
      return JSON.parse(notesParse);
    }
  }

  deleteNote(id: string) {
    const test = this.getNotes();
    this.notes = test.filter((n: any) => n.id !== id);
    localStorage.setItem('note', JSON.stringify(this.notes));
    location.reload();
  }
}
