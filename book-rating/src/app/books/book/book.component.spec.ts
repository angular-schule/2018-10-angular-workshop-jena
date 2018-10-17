import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, spy, verify, instance, when, anything } from 'ts-mockito';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let rs: BookRatingService;

  beforeEach(async(() => {
    // gemockten BRS erstellen (kommt von ts-mockito)
    // hat dieselbe Schnittstelle, aber keine Funktionalität
    rs = mock(BookRatingService);

    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        // BRS ersetzen: Angular verwendet jetzt immer
        // instance(rs), wenn jemand den BRS anfordert
        // instance(rs) erstellt konkrete Instanz des Mocks
        { provide: BookRatingService, useValue: instance(rs) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Buch in Komponente initialisieren,
    // denn es gibt keine Elternkomponente, die Buch über
    // Property Binding hineingeben kann
    component.book = {
      title: 'title',
      description: 'desc',
      isbn: '777',
      rating: 3
    };

    // Wichtig: Diese Zeile NACH der Initialisierung des Buchs,
    // damit book in der View aktualisiert wird
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call RatingService.rateUp for rateUp', () => {
    // Aktion / Durchführung
    component.rateUp();

    // verify statt expect, weil ts-mockito
    // Mock besitzt bereits einen Spy
    // man kann hier konkretes Argument für den Aufruf angeben
    verify(rs.rateUp(component.book)).once();
  });

  it('should throw event for rateUp', (done) => {
    // Mockservice mit Funktionalität füllen
    // wenn rateUp gerufen wird, dann konkreten Wert returnen
    when(rs.rateUp(anything()))
      .thenReturn({ ...component.book });

    // EventEmitter abonnieren
    component.rate.subscribe(book => {
      expect(book).toBeTruthy();

      // Jasmine wartet so lange mit dem Test, bis done()
      // gerufen wird. nötig, weil Event asynchron sein könnte
      // (ist es aber nicht)
      done();
    });

    // Aktion
    component.rateUp();

  });

  it('should call rateUp for button click', () => {
    // Komponente überwachen (spy)
    const spiedComp = spy(component);

    // Button holen
    // fixture.debugElement ist das gerenderte Template der Komponente
    const rateUpBtn = fixture.debugElement
      .query(By.css('.testing-rate-up-btn'))
      .nativeElement;
    
    // Klick auslösen
    rateUpBtn.click();

    // Expectation
    verify(spiedComp.rateUp()).once();
  });

  it('should display the correct rating', () => {
    // Element selektieren
    const ratingBox = fixture.debugElement
      .query(By.css('.testing-rating-box'))
      .nativeElement;
    
    // prüfen, ob korrekt angezeigt
    expect(ratingBox.textContent).toBe('3');
    
    // ändern
    component.book = {
      ...component.book,
      rating: 1
    };
    
    fixture.detectChanges();

    // prüfen, ob korrekt angezeigt
    expect(ratingBox.textContent).toBe('1');
  });





});
