import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { PageAddPrestationComponent } from './pages/page-prestations/page-add-prestation/page-add-prestation.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModuleModule
  ]
})
export class PrestationsModuleModule { }
