import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Experiencia[]=[];

  pluscircle = faPlusCircle;
  pencil = faPencil;
  trash = faTrash;

  constructor(private experienciaService:ExperienciaService) {}

  ngOnInit(): void {
    this.getExperiencia();
  }
  
  public getExperiencia() {
    this.experienciaService.getExperiencia().subscribe({
      next:(Response:Experiencia[])=>{
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
