import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgremiadosComponent } from './lista-agremiados.component';

describe('ListaAgremiadosComponent', () => {
  let component: ListaAgremiadosComponent;
  let fixture: ComponentFixture<ListaAgremiadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgremiadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAgremiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
