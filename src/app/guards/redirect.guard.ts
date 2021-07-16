import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  user = null;
  constructor(private router: Router,
              private authFire: AngularFireAuth) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve => {
      this.authFire.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigateByUrl('/login').catch();
          resolve(false);
        }
      }).catch();
    }));
  }
}
