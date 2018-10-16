import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    BookComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
