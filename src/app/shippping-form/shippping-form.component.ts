import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'shippping-form',
  templateUrl: './shippping-form.component.html',
  styleUrls: ['./shippping-form.component.css']
})
export class ShipppingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscripthion:Subscription;
  userId:string;

  constructor(
    private router:Router,
    private authService: AuthService,
    private orderService: OrderService) {

    }


  ngOnInit() {
    this.userSubscripthion = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  ngOnDestroy() {
    this.userSubscripthion.unsubscribe();
  }
   

  async placeOrder() {
    let order = new Order(this.userId, this.shipping,this.cart);
    console.log("hellojanusss",order)
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key]);
  }   

}
