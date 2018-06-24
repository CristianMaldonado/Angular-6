import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './ad.directive';
import { CursoDesarrolloComponent } from './curso-desarrollo/curso-desarrollo.component';
import { OtroCursoComponent } from './otro-curso/otro-curso.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdService } from './ad.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdDirective, AdBannerComponent,CursoDesarrolloComponent, OtroCursoComponent],
  providers: [AdService],
  entryComponents: [CursoDesarrolloComponent, OtroCursoComponent],
  exports: [AdBannerComponent]
})
export class DinamicComponentsModule { }
