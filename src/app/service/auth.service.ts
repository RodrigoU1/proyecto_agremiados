import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    public FireAuth: AngularFireAuth) { }


    // register({email, password}: any ){
    //   return createUserWithEmailAndPassword(this.auth, email, password);
    // }
  
    // login({email, password}: any){
    //   return signInWithEmailAndPassword(this.auth, email, password);
    // }


  }
