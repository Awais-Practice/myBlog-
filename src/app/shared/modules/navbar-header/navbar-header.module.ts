import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarHeaderComponent } from './navbar-header.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { MainNavebarComponent } from './main-navebar/main-navebar.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    NavbarTopComponent,
    MainNavebarComponent,
    NavbarHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarHeaderComponent, NavbarTopComponent, MainNavebarComponent],
})
export class NavbarHeaderModule {}
