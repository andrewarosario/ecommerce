import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from 'product-ui';
import { HomeComponent } from './home/home.component';
import { homeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    ProductCardComponent,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
