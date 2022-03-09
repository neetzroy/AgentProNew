import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentprosMainComponent } from './agentpros-main.component';

describe('AgentprosMainComponent', () => {
  let component: AgentprosMainComponent;
  let fixture: ComponentFixture<AgentprosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentprosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentprosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
