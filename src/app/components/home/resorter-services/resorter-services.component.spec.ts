import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResorterServicesComponent } from './resorter-services.component';

describe('ResorterServicesComponent', () => {
  let component: ResorterServicesComponent;
  let fixture: ComponentFixture<ResorterServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResorterServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResorterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
