import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudiosList:any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data => {
    console.log(data);
    this.estudiosList=data.estudios;
  });
  }

}
