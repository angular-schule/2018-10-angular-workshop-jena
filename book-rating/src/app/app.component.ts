import { Component } from '@angular/core';
import { timer, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {
    
    const myObservable = new Observable(observer => {
      observer.next(1);
      setTimeout(() => observer.next(2), 2000);
      setTimeout(() => observer.next(3), 3000);
      setTimeout(() => observer.next(4), 4000);
      setTimeout(() => observer.complete(), 3100);
    });


    

    of('A', 'B', 'C').subscribe(
      e => console.log(e),
      err => console.error(err),
      () => console.log('Fertig!')
    );

    // setTimeout(() => sub.unsubscribe(), 3500);


    /* const observer = {
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('Fertig.')
    };


    timer(0, 1000).pipe(take(5))
      .subscribe(observer);
 */

    


    /* function obs(o) {
      o.next('A');
      o.next('B');

      setTimeout(() => o.next('C async'), 2000);
    }

    

    obs(observer);
    obs(observer); */



  }
}
