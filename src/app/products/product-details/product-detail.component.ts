import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { IProduct } from '../../models/products/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pagetTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit(): void {
    const productId = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(productId)
      .subscribe(product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  private onBack(): void  {
    this._router.navigate(['/products']);
  }

}
