import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { MenuBar } from './components/menu-bar/menu-bar.component';
import { MainContent } from './components/main-content/main-content.component';
import { NuevoComponenteComponent } from './components/nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [AppComponent, NavBar, MenuBar, MainContent, NuevoComponenteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, NavBar, MenuBar, MainContent],
})

export class AppModule {}
