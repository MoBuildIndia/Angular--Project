import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import GithubAuthProvider = firebase.auth.GithubAuthProvider;
import AuthProvider = firebase.auth.AuthProvider;

export interface NgxAuthFirebaseUIConfig {
  authNextURL?: string,
  authMethod?: string, // popup or redirect
  authProviders?: Array<AuthProvider>,
  languageCode?: string, // todo: 28.3.18
  onlyEmailPasswordAuth?: boolean,
  toastMessageOnAuthSuccess?: boolean,
  toastMessageOnAuthError?: boolean
}

export const defaultAuthFirebaseUIConfig: NgxAuthFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  // onlyEmailPasswordAuth: false,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true
};

