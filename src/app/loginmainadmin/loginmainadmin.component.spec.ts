import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmainadminComponent } from './loginmainadmin.component';

describe('LoginmainadminComponent', () => {
  let component: LoginmainadminComponent;
  let fixture: ComponentFixture<LoginmainadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmainadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmainadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
