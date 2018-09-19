import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HompageComponent } from './hompage/hompage.component';
import { IntroToSeleniumComponent } from './intro-to-selenium/intro-to-selenium.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HompageComponent,
    IntroToSeleniumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
