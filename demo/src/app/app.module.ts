
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {AppRoutingModule} from './app-routing.module';
import {AppSharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {NgxMaterialPagesModule} from 'ngx-material-pages';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'ngx-auth-firebaseui-demo-id'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAVr8NPad4V-MPzzuR3dhRzIPYieVjU2Yk",
      authDomain: "sample-33b0b.firebaseapp.com",
      databaseURL: "https://sample-33b0b.firebaseio.com",
      projectId: "sample-33b0b",
      storageBucket: "sample-33b0b.appspot.com",
      messagingSenderId: "138996323404"
    }),
    NgxMaterialPagesModule.forRoot(),
    ClipboardModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppSharedModule,
    HomeModule,
    NgxAuthFirebaseUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
