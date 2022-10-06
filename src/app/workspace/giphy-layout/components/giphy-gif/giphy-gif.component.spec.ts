import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyGifComponent } from './giphy-gif.component';

describe('GiphyGifComponent', () => {
  let component: GiphyGifComponent;
  let fixture: ComponentFixture<GiphyGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphyGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
