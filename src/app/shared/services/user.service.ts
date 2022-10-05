import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbPath: string = '/users';

  usersRef!: AngularFireList<User>;
  userRef!: AngularFireObject<User>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.usersRef = angularFireDatabase.list(this.dbPath);
  }

  getUserByEmail(email:string) {
    return this.angularFireDatabase.list(this.dbPath, ref => ref.orderByChild('email').equalTo(email)).snapshotChanges().pipe(
      map((user:any) => user.map((x: { payload: { val: () => any; }; key: any; }) => {
        const payload = x.payload.val();
        const key = x.key;
        return <User>{ key, ...payload };
      }))
    );
  }

  getUsers() : Observable<User[]> {
    return this.usersRef.snapshotChanges().pipe(
      map((users: any[]) => users.map(user => {
        const payload = user.payload.val();
        const key = user.key;
        return <User>{ key, ...payload };
      })),
    );
  }

  create(user: User): any {
    return this.usersRef.push(user);
  }
}
