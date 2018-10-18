import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  testObj = {
    foo: 'hallo',
    bar: 'baz'
  };

  constructor() { }

  ngOnInit() {
  }

}
