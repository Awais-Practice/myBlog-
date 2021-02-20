import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderModule } from './shared/modules/navbar-header/navbar-header.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesModule } from './shared/components/categories/categories.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarHeaderModule,
    BrowserAnimationsModule,
    HomeModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
