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
    return this.collection.add(carro);
  }

  lista() {
    this.collection = this.db.collection('carro', ref => ref.where('id', '!=', 0));
    return this.collection.valueChanges();
  }

  update(id, data) {
    this.collection = this.db.collection('carro');
    return this.collection.doc(id).update(data)
  }

  remove(carro) {
    this.collection = this.db.collection('carro');
    console.log(carro.id)
    this.collection.doc(carro.id).delete();
  }
}
