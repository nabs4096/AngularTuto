import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavHorizontalComponent } from './components/nav-horizontal/nav-horizontal.component';
import { CommentsComponent } from '../prestations-module/components/comments/comments.component';
import { DetailsComponent } from '../prestations-module/components/details/details.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent, NavHorizontalComponent, DetailsComponent, CommentsComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent,TemplatesModule,ButtonComponent,ReactiveFormsModule,FontAwesomeModule,NavHorizontalComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModuleModule { }
