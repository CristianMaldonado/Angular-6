import { Injectable } from '@angular/core';
import { AdBanner } from './AdBanner';
import { CursoDesarrolloComponent } from './curso-desarrollo/curso-desarrollo.component';
import { OtroCursoComponent } from './otro-curso/otro-curso.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdBanner(CursoDesarrolloComponent, {name: 'Aprende Vue.js 2', price: '20€', info: 'Nueva entrada sobre Vue.js 2'}),
      new AdBanner(OtroCursoComponent, {title: 'Curso de Angular 5 y Firestore', body: 'Desarrollando una tienda en tiempo real'}),
      new AdBanner(CursoDesarrolloComponent, {name: 'Curso de Laravel 5.5', price: '25€', info: 'Aprende Laravel 5.5 desde 0'}),
      new AdBanner(OtroCursoComponent, {title: 'Tutorial de Angular 5', body: 'Angular 5, deploy en Firebase!'}),
    ];
  }


}
