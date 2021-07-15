import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IClientProfile} from '../pages/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isOpen: BehaviorSubject<IClientProfile> = new BehaviorSubject<IClientProfile>(null);
  constructor() {}

  openDialog(value: IClientProfile): void {
    this.isOpen.next(value);
  }

  closeDialog(): void {
    this.isOpen.next(null);
  }
}
