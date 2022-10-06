import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyLayoutComponent } from './giphy-layout.component';

describe('GiphyLayoutComponent', () => {
  let component: GiphyLayoutComponent;
  let fixture: ComponentFixture<GiphyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
