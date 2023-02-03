import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

cartItems:CartItem[];

constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
