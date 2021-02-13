import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderModule } from './shared/navbar-header/navbar-header.module';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentModule } from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarHeaderModule,
    BrowserAnimationsModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
