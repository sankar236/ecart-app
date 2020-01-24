import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CartComponent,
    FilterComponent,
    SortComponent,
    ShoppingComponent,
    FooterComponent,
    HomeComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
