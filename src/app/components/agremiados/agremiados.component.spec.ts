import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremiadosComponent } from './agremiados.component';

describe('AgremiadosComponent', () => {
  let component: AgremiadosComponent;
  let fixture: ComponentFixture<AgremiadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremiadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgremiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
