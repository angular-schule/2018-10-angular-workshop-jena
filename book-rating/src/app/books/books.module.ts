import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    DashboardComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
