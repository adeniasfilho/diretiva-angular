import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaAngularCliComponent } from './diretiva-angular-cli.component';

describe('DiretivaAngularCliComponent', () => {
  let component: DiretivaAngularCliComponent;
  let fixture: ComponentFixture<DiretivaAngularCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaAngularCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
