import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
	styleUrls: ['./productcards.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class ProductcardsComponent implements OnInit {
	public products:Array<Product>;
	private sub;
	constructor(
			 private productService:ProductService,
			 private cartService:CartService,
			 private router: Router
	) { }

	ngOnInit() {
			this.load();
	}
	load = () => {
		 this.sub = this.productService.getProducts('./assets/mock-data/products.json')
					.subscribe(res => {
							this.products = res;
					})
	};
	addToCart = (product) => {
			this.cartService.addToCart({product,quantity:1})
	};
	ngOnDestroy() {
			this.sub.unsubscribe();
	}
}
