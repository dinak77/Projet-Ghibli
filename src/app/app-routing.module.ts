import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FondateursComponent } from './fondateurs/fondateurs.component';

const routes: Routes = [

  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'fondateurs', component: FondateursComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
