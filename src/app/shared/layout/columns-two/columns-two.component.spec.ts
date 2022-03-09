import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsTwoComponent } from './columns-two.component';

describe('ColumnsTwoComponent', () => {
  let component: ColumnsTwoComponent;
  let fixture: ComponentFixture<ColumnsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
