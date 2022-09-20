import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  myPortfolio:any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data => {
    console.log(data);
    this.myPortfolio=data;
  });

}
}
