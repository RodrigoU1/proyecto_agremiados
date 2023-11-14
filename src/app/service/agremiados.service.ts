import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgremiadosService {

  constructor(
    private firestore: Firestore,
  ) { }

guardarAgremiado(agremi: any){
  const agremiRef = collection(this.firestore, 'agremiados');
  return addDoc(agremiRef, agremi);
}

getAgremiado (filter= ''){
  const agremiRef = collection(this.firestore, 'agremiados');
  let q = query(agremiRef);
  if(filter){
    q = query(agremiRef, where('id', '==', filter))
  }
   return collectionData(q) as unknown as Observable<any[]>;
}
}