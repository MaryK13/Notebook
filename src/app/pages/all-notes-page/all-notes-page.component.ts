import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AllNotesModel } from '../../models/all-notes.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'all-notes-page',
  templateUrl: './all-notes-page.component.html',
  styleUrls: ['./all-notes-page.component.scss'],
})

export class AllNotesPageComponent implements OnInit {
  @Input() notesGroup!: FormGroup;
  @ViewChild(MatSort) sort!: MatSort;

  notesParse: AllNotesModel[] = [];

  notesTableDataSource!: MatTableDataSource<AllNotesModel>;
  notesColumns: string[] = ['notebook_text', 'date', 'delete', 'show'];

  constructor(
    private router: Router,
    private noteService: NotesService,
  ) {
    const dataNotes: AllNotesModel[] = [];
    this.notesTableDataSource = new MatTableDataSource(dataNotes);
  }

  ngOnInit() {
    this.getElements();
  }

  tableSortChange(event: Sort) {
    if (event.active && event.direction) {
      this.notesTableDataSource.sort = this.sort;
    }
  }

  back() {
    window.history.back();
  }

  getElements() {
    this.notesParse = this.noteService.getNotes();
    window.addEventListener('storage', event => {
      if (event.oldValue !== event.newValue) {
        location.reload();
      }
    })
    this.notesTableDataSource = new MatTableDataSource(this.notesParse);
  }

  delete(elemId: string) {
    this.noteService.deleteNote(elemId);
  }

  show(elemId: number) {
    this.router.navigate(['/notes/', elemId]);
  }
}
