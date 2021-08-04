import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {IClientProfile} from '../../assets/models/client';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  clientsRef: AngularFireList<IClientProfile>;
  clientRef: AngularFireObject<IClientProfile>;

  constructor(private firestore: AngularFirestore,
              private router: Router,
              private db: AngularFireDatabase) {
  }

  getUsersList(): AngularFireList<IClientProfile> {
    this.clientsRef = this.db.list('users');
    return this.clientsRef;
  }

  submitUser(user: IClientProfile) {
    this.clientsRef = this.db.list('/users');
    // @ts-ignore
    this.clientsRef.push({...user}).then( () => {
      // todo snackbar notification
      console.info('Done saving new Customer');
      this.router.navigateByUrl('/clients').catch();
    }).catch(error => {
      console.info(error);
    });
  }

  updateUser(user: IClientProfile, key: string) {
    this.clientRef = this.db.object('/users/' + key);
    return this.clientRef.update({...user});
  }

  deleteClient(user: IClientProfile) {
    return this.clientsRef.remove(user.$key);
  }
}
