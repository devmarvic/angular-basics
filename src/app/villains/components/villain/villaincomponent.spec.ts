import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillainComponent } from './villain.component';

describe('HeroComponent', () => {
  let component: VillainComponent;
  let fixture: ComponentFixture<VillainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillainComponent]
    });
    fixture = TestBed.createComponent(VillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
