import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cartDetails',component: CartDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
