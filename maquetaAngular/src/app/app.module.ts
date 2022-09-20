import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillComponent } from './components/skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { EstudiosComponent } from './components/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    BannerComponent,
    ExperienciasComponent,
    FooterComponent,
    ProyectosComponent,
    SkillComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
