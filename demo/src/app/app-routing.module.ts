import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InnerpageComponent } from './innerpage/innerpage.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'innerpage',      component: InnerpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
