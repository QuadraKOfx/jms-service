import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  user = 'Andreas';
  constructor(private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.info('Auth Guard');
    if (!this.user) {
      return this.router.navigate(['/login']);
    }
    return true;
  }
}
