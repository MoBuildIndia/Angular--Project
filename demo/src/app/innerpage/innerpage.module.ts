import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

import {InnerPageRoutingModule} from './inner-page-routing.module';
import {InnerpageComponent} from './innerpage.component';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatMenuModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    AngularFireAuthModule,
    InnerPageRoutingModule,
    NgxAuthFirebaseUIModule,
   MatButtonModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatMenuModule
  ],
  exports: [MatSlideToggleModule, MatMenuModule],
  declarations: [InnerpageComponent],
})
export class InnerPageModule {
}
