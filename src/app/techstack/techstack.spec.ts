import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Techstack } from './techstack';

describe('Techstack', () => {
  let component: Techstack;
  let fixture: ComponentFixture<Techstack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techstack],
    }).compileComponents();

    fixture = TestBed.createComponent(Techstack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
