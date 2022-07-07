import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../servicios/portfolio.service';
import { Usuario } from '../models/profile';
import { ProfileService } from '../servicios/profile.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario : Usuario | undefined;
  public editUsuario : Usuario | undefined;

  miPortfolio:any;
  pencil = faPencil;

  constructor(private datosPortfolio:PortfolioService, private profileService:ProfileService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void {
    this.profileService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
