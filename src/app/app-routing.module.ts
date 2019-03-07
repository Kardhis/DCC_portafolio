import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' } // Si no es ninguna ruta de las anteriores, lo redireccionamos a nuestra main page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } ) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
