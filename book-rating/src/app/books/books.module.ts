import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    FormsModule
  ],
  declarations: [
    BookComponent,
    DashboardComponent,
    CreateBookComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
