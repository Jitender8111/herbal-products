import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSelligCardComponent } from './component/best-sellig-card/best-sellig-card.component';
import { CardComponent } from './component/card/card.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {path: '',redirectTo: 'category', pathMatch:'full'},
  {path: 'category',component: CardComponent},
  {path: 'card',component: BestSelligCardComponent},
  {path: 'cart',component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
