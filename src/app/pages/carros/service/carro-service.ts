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
    if (!carro.hasOwnProperty('id')) {
      carro.id = this.db.createId();
    }
    this.collection = this.db.collection('carro');
    //  this.collection.add(carro);
    this.collection.doc(carro.id).set(carro)
    return carro
  }

  pegaCarro(id) {
    this.collection = this.db.collection('carro', ref => ref.where('id', '==', id));
    return this.collection.valueChanges();
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
    // console.log(this.db.collection('carro', ref => ref.where('id', '==', carro.id)).valueChanges().subscribe((x) => (console.log(x))));

    // this.update('ayJFoV06rKGq1uPZMGLK', {"nome": "Vai funcionar"})

    this.collection = this.db.collection('carro');
    console.log(carro.id)
    this.collection.doc(carro.id).delete().then(() => console.log("Apaguei")).catch(() => console.log("Apaguei"));
  }
}
