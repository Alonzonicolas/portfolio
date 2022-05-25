import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  miPortfolio:any;
  pencil = faPencil;

  constructor(private datosPortfolio:PortfolioService) {
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
