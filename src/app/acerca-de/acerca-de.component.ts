import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  descripcion = 'Matemático, físico e informático argentino considerado por muchos como el padre de la computación en la Argentina. test';

  pencil = faPencil;

  constructor() { }

  mostrarTxtArea():void {
    let txtArea:HTMLTextAreaElement = document.getElementById('textarea') as HTMLTextAreaElement;
    txtArea.style.display = 'block';
  }

  ocultarTxtArea():void {
    let txtArea:HTMLTextAreaElement = document.getElementById('textarea') as HTMLTextAreaElement;
    txtArea.style.display = 'none';
  }

  ngOnInit(): void {
  }

}
