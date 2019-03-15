import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Este modulo nos permite realizar peticiones get, put, delete, ... a servidores (por ejemplo a REST).
import { HttpClientModule } from '@angular/common/http';

// Routing (Nuestras rutas de la aplicacion).
import { AppRoutingModule } from './app-routing.module';

// Pages (Las paginas de la aplicacion).
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
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
