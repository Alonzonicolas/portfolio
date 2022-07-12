import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../servicios/educacion.service';
//import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[]=[];

  pluscircle = faPlusCircle;
  pencil = faPencil;
  trash = faTrash;

  educacionList:any;
  //constructor(private datosPortfolio:PortfolioService) { }
  constructor(private educacionService:EducacionService) {}

  ngOnInit(): void {
    /*this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.education;
    })*/
    
    this.getEducacion();
  }

  public getEducacion() {
    this.educacionService.getEducacion().subscribe({
      next:(Response:Educacion[])=>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
