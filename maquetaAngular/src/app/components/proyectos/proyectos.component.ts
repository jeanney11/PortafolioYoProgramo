import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectoList:any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data => {
    console.log(data);
    this.proyectoList=data.proyectos;
  });
  }

}
