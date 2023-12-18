import { TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'webcomponent' title`, () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('webcomponent');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, webcomponent');
  });
});
