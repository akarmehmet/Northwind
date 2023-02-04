import { Injectable } from '@angular/core';
import { CartItems } from '../Models/cardItems';
import { CartItem } from '../Models/cartItem';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=> c.product.productId === product.productId);
    if(item){
      item.quantity++;
    }
    else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=> c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
