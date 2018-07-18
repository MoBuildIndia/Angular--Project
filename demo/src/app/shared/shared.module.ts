import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatTooltipModule, MatInputModule
} from '@angular/material';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {BadgesComponent} from './badges/badges.component';

import {HighlightModule} from 'ngx-highlightjs';
import {DisqusModule} from 'ngx-disqus';
import {NgxMaterialPagesModule} from 'ngx-material-pages';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    HighlightModule.forRoot(),
    DisqusModule.forRoot('ngx-auth-firebaseui'),
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyAVr8NPad4V-MPzzuR3dhRzIPYieVjU2Yk",
      authDomain: "sample-33b0b.firebaseapp.com",
      databaseURL: "https://sample-33b0b.firebaseio.com",
      projectId: "sample-33b0b",
      storageBucket: "sample-33b0b.appspot.com",
      messagingSenderId: "138996323404"
    }),
    NgxMaterialPagesModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    HighlightModule,
    DisqusModule,
    NgxAuthFirebaseUIModule,
    NgxMaterialPagesModule,
    BadgesComponent,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    BadgesComponent
  ],
  providers: [],
})
export class AppSharedModule {
}
