import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/servicios/portfolio.service';
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myPortfolio:any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data => {
    console.log(data);
    this.myPortfolio=data;
  });

}

}
