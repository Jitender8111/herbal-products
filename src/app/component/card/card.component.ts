import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public product_category : any ;
  public searchKey : string = "" ;
  public filterCategory :any ;
  constructor(private api : ApiService, private cartService:CartService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.product_category = res;
      this.filterCategory = res;
      
      this.product_category.forEach((a:any)=>{
        if(a.category === "men's clothing" || a.category === "women's clothing"){
            a.category = 'fashion';
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
        console.log(this.product_category);
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    });
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.product_category.filter((a:any)=>{
      if(a.category == category || category==''){
       
        return a; 
      }
     
    })
    
  }

}
