import { User } from './../interfaces/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!:User;
  users:User[] = [];

  constructor(
    public angularFireAuth: AngularFireAuth,
    private userService: UserService,
    private router:Router
  ) { }

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  async authLogin(provider:AuthProvider) {
    try {
      const result = await this.angularFireAuth.signInWithPopup(provider);
      this.user = result.additionalUserInfo?.profile as User;
      this.userService.getUserByEmail(this.user.email).subscribe(
        (response) => {
          if (response.length === 0)
            this.userService.create(this.user);
            this.router.navigate(['dashboard']);
        }
      );
    } catch (error) {
      return console.error(error);
    }
  }
}
