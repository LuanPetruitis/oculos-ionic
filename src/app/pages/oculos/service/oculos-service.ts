import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class Oculoservice {
  collection: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore
  ) { }

  registraOculo(oculo) {
    if (!oculo.hasOwnProperty('id')) {
      oculo.id = this.db.createId();
    }
    this.collection = this.db.collection('oculo');
    //  this.collection.add(oculo);
    this.collection.doc(oculo.id).set(oculo)
    return oculo
  }

  pegaOculo(id) {
    this.collection = this.db.collection('oculo', ref => ref.where('id', '==', id));
    return this.collection.valueChanges();
  }

  lista() {
    this.collection = this.db.collection('oculo', ref => ref.where('id', '!=', 0));
    return this.collection.valueChanges();
  }

  update(id, data) {
    this.collection = this.db.collection('oculo');
    return this.collection.doc(id).update(data)
  }

  remove(oculo) {
    // console.log(this.db.collection('oculo', ref => ref.where('id', '==', oculo.id)).valueChanges().subscribe((x) => (console.log(x))));

    // this.update('ayJFoV06rKGq1uPZMGLK', {"nome": "Vai funcionar"})

    this.collection = this.db.collection('oculo');
    console.log(oculo.id)
    this.collection.doc(oculo.id).delete().then(() => console.log("Apaguei")).catch(() => console.log("Apaguei"));
  }
}
