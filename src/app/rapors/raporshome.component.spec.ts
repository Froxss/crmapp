import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaporshomeComponent } from './raporshome.component';

describe('RaporshomeComponent', () => {
  let component: RaporshomeComponent;
  let fixture: ComponentFixture<RaporshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaporshomeComponent],
    });
    fixture = TestBed.createComponent(RaporshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
