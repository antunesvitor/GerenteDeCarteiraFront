import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { GraficoPizzaComponent } from './grafico-pizza/grafico-pizza.component';
import { AtivosComponent } from './ativos/ativos.component'

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    GraficoPizzaComponent,
    AtivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
