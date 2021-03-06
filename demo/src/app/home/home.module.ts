import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AppSharedModule} from '../shared';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    AngularFireAuthModule,
    HomeRoutingModule,
    NgxAuthFirebaseUIModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
