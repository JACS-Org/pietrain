import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productStore:AngularFirestoreCollection<any>;
  constructor(private store: AngularFirestore) { 
    this.productStore = this.store.collection('products');
  }

  getAllProducts():Observable<Product[]>{
    return this.productStore.valueChanges({ idField: 'id'});
  }

  saveProduct(product:Product){
    return this.productStore.add(product);
  }

  updateProduct(id:string, product:Product){
    return this.productStore.doc(id).update(product);
  }

  deleteProduct(id:string){
    return this.productStore.doc(id).delete();
  }
}
