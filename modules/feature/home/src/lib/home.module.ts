import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
