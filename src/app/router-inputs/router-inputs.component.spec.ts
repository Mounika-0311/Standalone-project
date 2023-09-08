import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterInputsComponent } from './router-inputs.component';

describe('RouterInputsComponent', () => {
  let component: RouterInputsComponent;
  let fixture: ComponentFixture<RouterInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterInputsComponent]
    });
    fixture = TestBed.createComponent(RouterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
