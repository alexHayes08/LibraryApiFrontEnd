import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HompageComponent } from './hompage/hompage.component';
import { IntroToSeleniumComponent } from './intro-to-selenium/intro-to-selenium.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LockablesComponent } from './lockables/lockables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HompageComponent,
    IntroToSeleniumComponent,
    PageNotFoundComponent,
    LockablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
