import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homeRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), MatCardModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
