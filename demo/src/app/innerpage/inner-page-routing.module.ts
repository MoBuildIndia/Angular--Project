import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InnerpageComponent } from './innerpage.component';
@NgModule({
    imports: [RouterModule.forChild([
      { path: '', component: InnerpageComponent }
    ])],
    exports: [RouterModule]
  })
export class InnerPageRoutingModule {}