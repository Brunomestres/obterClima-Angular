import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimaAtualComponent } from './clima-atual.component';


describe('ClimaAtualComponent', () => {
  let component: ClimaAtualComponent;
  let fixture: ComponentFixture<ClimaAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
