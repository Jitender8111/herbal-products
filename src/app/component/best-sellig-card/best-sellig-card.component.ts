import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-best-sellig-card',
  templateUrl: './best-sellig-card.component.html',
  styleUrls: ['./best-sellig-card.component.css']
})
export class BestSelligCardComponent implements OnInit {

  public product_category : any ;
  constructor(private api : ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.product_category = res;
      this.product_category.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addToCart(item: any){
    this.cartService.addToCart(item);
  }

}
