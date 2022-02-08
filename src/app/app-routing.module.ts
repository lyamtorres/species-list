import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEspecesComponent } from './components/liste-especes/liste-especes.component';

const routes: Routes = [
  { path: '', component: ListeEspecesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
