import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiosComponent } from './componentes/audios/audios.component';

const routes: Routes = [{
  path: 'Audios', component: AudiosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
