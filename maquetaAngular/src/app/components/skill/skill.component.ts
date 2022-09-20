import { Component, OnInit } from '@angular/core';
import {PortfolioService} from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillList:any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
  this.datos.obtenerDatos().subscribe(data => {
    console.log(data);
    this.skillList=data.skill;
  });
  }

}
