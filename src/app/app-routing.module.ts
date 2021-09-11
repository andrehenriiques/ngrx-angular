import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'estado', pathMatch: 'full' },
  { path: 'estado', loadChildren: () => import('./state/state.module').then(m => m.StateModule) },
  { path: '**', redirectTo: 'estado' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
