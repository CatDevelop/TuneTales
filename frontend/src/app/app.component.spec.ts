import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        const app: AppComponent = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'TuneTales'`, () => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        const app: AppComponent = fixture.componentInstance;
        expect(app.title).toEqual('TuneTales');
    });

    it('should render title', () => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, TuneTales');
    });
});
