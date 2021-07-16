import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private router: Router) {
  }

  login(payload: { email: string, password: string }) {
    this.fireAuth.signInWithEmailAndPassword(payload.email, payload.password).then(() => {
      this.router.navigateByUrl('/dashboard').catch();
    }).catch(error => {
      console.info('Authentication failed ', error.message);
    });
  }

  isAuthenticated() {
    return this.fireAuth.user;
  }
}
