import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }


  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.dirty;
  }


  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.dirty;
  }
}
