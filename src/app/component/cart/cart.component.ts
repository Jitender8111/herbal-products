import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public grandtotal : number = 0;
  public totalItem : number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res =>{
    this.product = res;
    this.grandtotal = this.cartService.getTotalPrice();    // getTotalPrice
    this.totalItem = res.length;
    console.log(this.grandtotal);
  })

  }
  removeItem(item :any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCartItem();
  }

}
