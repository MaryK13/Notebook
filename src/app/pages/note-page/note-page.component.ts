import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNotesModel } from '../../models/all-notes.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss'],
})

export class NotePageComponent implements OnInit {
  noteId: string | null = '';
  dataNotes: AllNotesModel[] = [];
  note!: any;

  constructor(
    private noteService: NotesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.noteId = routeParams.get('id');

    this.getNote();
  }

  back() {
    window.history.back();
  }

  getNote() {
    this.dataNotes = this.noteService.getNotes() || [];
    this.note = this.dataNotes.find(x => x.id === this.noteId);
  }
}
