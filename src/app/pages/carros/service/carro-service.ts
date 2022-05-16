import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class Carroservice {
  collection: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore
  ) { }

  registraCarro(carro) {
    carro.id = this.db.createId();
    this.collection = this.db.collection('carro');
    return this.collection.doc(carro.id).set(carro);
  }

  lista(tipo) {
    this.collection = this.db.collection('carro', ref => ref.where('tipo', '==', tipo));
    return this.collection.valueChanges();
  }

  remove(carro) {
    this.collection = this.db.collection('carro');
    this.collection.doc(carro.id).delete();
  }
}
