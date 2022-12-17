import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  form: FormGroup ;
  constructor(
    //private productService: ProductsService
  ) { 
    this.form =  new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched();
    if(this.form.invalid){
      return;
    }
    let data: Product = this.form.value as Product;
    //this.productService.saveProduct(data)
  }

}
