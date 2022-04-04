import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion-experiencia',
  templateUrl: './educacion-experiencia.component.html',
  styleUrls: ['./educacion-experiencia.component.css']
})
export class EducacionExperienciaComponent implements OnInit {

  pluscircle = faPlusCircle;
  pencil = faPencil;
  trash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
